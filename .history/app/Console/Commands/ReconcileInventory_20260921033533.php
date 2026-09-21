<?php

namespace App\Console\Commands;

use App\Models\StockLevel;
use App\Models\StockMovement;
use App\Models\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class ReconcileInventory extends Command
{
    protected $signature = 'inventory:reconcile {tenant}';

    protected $description = 'Check stock levels against stock movements';

    public function handle(): int
    {
        $tenantId = $this->argument('tenant');

   
        if (!Tenant::find($tenantId)) {
            $this->error("Tenant {$tenantId}  پیدا نشد.");

            return self::FAILURE;
        }

       
        $stockLevels = StockLevel::withoutGlobalScopes()
            ->where('tenant_id', $tenantId)
            ->get();

      
        $expected = [];

        foreach ($stockLevels as $stock) {
            $key = $stock->product_id . '-' . $stock->warehouse_id;

            $expected[$key] = 0;
        }

        /*
         * 3. Get all movements for this tenant.
         */
        $movements = StockMovement::withoutGlobalScopes()
            ->where('tenant_id', $tenantId)
            ->orderBy('id')
            ->get();

        /*
         * 4. Calculate expected stock.
         */
        foreach ($movements as $movement) {

            if ($movement->type === 'in') {

                $key = $movement->product_id . '-' . $movement->warehouse_id;

                if (!isset($expected[$key])) {
                    $expected[$key] = 0;
                }

                $expected[$key] += $movement->quantity;
            }

            elseif ($movement->type === 'out') {

                $key = $movement->product_id . '-' . $movement->warehouse_id;

                if (!isset($expected[$key])) {
                    $expected[$key] = 0;
                }

                $expected[$key] -= $movement->quantity;
            }

            elseif ($movement->type === 'transfer') {

                $meta = $movement->meta;

                // meta is stored as a JSON string
                if (is_string($meta)) {
                    $meta = json_decode($meta, true);
                }

                $fromWarehouseId = $meta['from_warehouse_id'] ?? null;
                $toWarehouseId = $meta['to_warehouse_id'] ?? null;

                if (!$fromWarehouseId || !$toWarehouseId) {
                    $this->warn(
                        "Transfer movement {$movement->id} has invalid meta."
                    );

                    continue;
                }

                $fromKey =
                    $movement->product_id . '-' . $fromWarehouseId;

                if (!isset($expected[$fromKey])) {
                    $expected[$fromKey] = 0;
                }

                $expected[$fromKey] -= $movement->quantity;

                
                $toKey =
                    $movement->product_id . '-' . $toWarehouseId;

                if (!isset($expected[$toKey])) {
                    $expected[$toKey] = 0;
                }

                $expected[$toKey] += $movement->quantity;
            }
        }

        $discrepancies = 0;

        foreach ($stockLevels as $stock) {

            $key = $stock->product_id . '-' . $stock->warehouse_id;

            $expectedQuantity = $expected[$key] ?? 0;
            $actualQuantity = $stock->quantity;

            if ($expectedQuantity != $actualQuantity) {

                $discrepancies++;

                $message =
                    "Inventory discrepancy: "
                    . "product={$stock->product_id}, "
                    . "warehouse={$stock->warehouse_id}, "
                    . "expected={$expectedQuantity}, "
                    . "actual={$actualQuantity}";

                $this->warn($message);

                Log::warning($message);
            }

            unset($expected[$key]);
        }

    
        foreach ($expected as $key => $expectedQuantity) {

            if ($expectedQuantity == 0) {
                continue;
            }

            [$productId, $warehouseId] = explode('-', $key);

            $discrepancies++;

            $message =
                "Missing stock level: "
                . "product={$productId}, "
                . "warehouse={$warehouseId}, "
                . "expected={$expectedQuantity}, "
                . "actual=0";

            $this->warn($message);

            Log::warning($message);
        }

       
        if ($discrepancies === 0) {

            $this->info(
                'Reconciliation completed. No discrepancies found.'
            );
        } else {

            $this->error(
                "Reconciliation completed. "
                . "{$discrepancies} discrepancy(s) found."
            );
        }

        return self::SUCCESS;
    }
}