<?php

namespace App\Services;

use App\Exceptions\InsufficientStockException;
use App\Models\StockLevel;
use App\Models\StockMovement;
use Illuminate\Support\Facades\DB;

class StockMovementService
{
    public function create(array $data, int $tenantId)
    {
        return DB::transaction(function () use ($data, $tenantId) {

            return match ($data['type']) {
                'in' => $this->stockIn($data, $tenantId),

                'out' => $this->stockOut($data, $tenantId),

                'transfer' => $this->transfer($data, $tenantId),

                default => throw new \InvalidArgumentException(
                    'Invalid stock movement type.'
                ),
            };
        });
    }


    private function stockIn(array $data, int $tenantId): StockMovement
    {
        $stockLevel = StockLevel::where('tenant_id', $tenantId)
            ->where('product_id', $data['product_id'])
            ->where('warehouse_id', $data['warehouse_id'])
            ->lockForUpdate()
            ->first();

        if (!$stockLevel) {
            $stockLevel = StockLevel::create([
                'tenant_id' => $tenantId,
                'product_id' => $data['product_id'],
                'warehouse_id' => $data['warehouse_id'],
                'quantity' => 0,
            ]);


            $stockLevel->refresh();
        }

        $stockLevel->increment('quantity', $data['quantity']);

        return StockMovement::create([
            'tenant_id' => $tenantId,
            'product_id' => $data['product_id'],
            'warehouse_id' => $data['warehouse_id'],
            'type' => 'in',
            'quantity' => $data['quantity'],
            'reference' => $data['reference'] ?? null,

        ]);
    }


    private function stockOut(array $data, int $tenantId): StockMovement
    {
        $stockLevel = StockLevel::where('tenant_id', $tenantId)
            ->where('product_id', $data['product_id'])
            ->where('warehouse_id', $data['warehouse_id'])
            ->lockForUpdate()
            ->first();

        if (!$stockLevel || $stockLevel->quantity < $data['quantity']) {
            throw new InsufficientStockException();
        }

        $stockLevel->decrement('quantity', $data['quantity']);

        return StockMovement::create([
            'tenant_id' => $tenantId,
            'product_id' => $data['product_id'],
            'warehouse_id' => $data['warehouse_id'],
            'type' => 'out',
            'quantity' => $data['quantity'],
            'reference' => $data['reference'] ?? null,
            'meta' => $data['meta'] ?? null,
        ]);
    }


    private function transfer(array $data, int $tenantId): StockMovement
    {
        $fromWarehouseId = $data['meta']['from_warehouse_id'];
        $toWarehouseId = $data['meta']['to_warehouse_id'];

        // if ($fromWarehouseId === $toWarehouseId) {
        //     throw new \InvalidArgumentException(
        //         'Source and destination warehouses must be different.'
        //     );
        // }

        $sourceStock = StockLevel::where('tenant_id', $tenantId)
            ->where('product_id', $data['product_id'])
            ->where('warehouse_id', $fromWarehouseId)
            ->orderBy('warehouse_id')
            ->lockForUpdate()
            ->get();

        $destinationStock = StockLevel::where('tenant_id', $tenantId)
            ->where('product_id', $data['product_id'])
            ->where('warehouse_id', $toWarehouseId)
            ->orderBy('warehouse_id')
            ->lockForUpdate()
            ->get();

        if (!$sourceStock) {
            throw new ();
        }

        if ($sourceStock->quantity < $data['quantity']) {
            throw new InsufficientStockException();
        }

        if (!$destinationStock) {
            $destinationStock = StockLevel::create([
                'tenant_id' => $tenantId,
                'product_id' => $data['product_id'],
                'warehouse_id' => $toWarehouseId,
                'quantity' => 0,
            ]);
        }

        $sourceStock->decrement('quantity', $data['quantity']);

        $destinationStock->increment('quantity', $data['quantity']);

        return StockMovement::create([
            'tenant_id' => $tenantId,

            'product_id' => $data['product_id'],

            // For a transfer, warehouse_id represents the source.
            'warehouse_id' => $fromWarehouseId,

            'type' => 'transfer',

            'quantity' => $data['quantity'],

            'reference' => $data['reference'] ?? null,

            'meta' => [
                'from_warehouse_id' => $fromWarehouseId,
                'to_warehouse_id' => $toWarehouseId,
            ],
        ]);
    }
}
