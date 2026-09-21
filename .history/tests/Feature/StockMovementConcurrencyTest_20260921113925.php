<?php

namespace Tests\Feature;

use App\Models\Product;
use App\Models\StockLevel;
use App\Models\Tenant;
use App\Models\Warehouse;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Process;
use Tests\TestCase;

class StockMovementConcurrencyTest extends TestCase
{
    use RefreshDatabase;

    public function test_100_concurrent_out_movements_from_50_stock(): void
    {
        $tenant = Tenant::create([
            'name' => 'Test Company',
            'subdomain' => 'test',
        ]);

        $product = Product::create([
            'tenant_id' => $tenant->id,
            'sku' => 'TEST-001',
            'name' => 'Test Product',
            'unit_price' => 100,
        ]);

        $warehouse = Warehouse::create([
            'tenant_id' => $tenant->id,
            'name' => 'Test Warehouse',
            'location' => 'Test Location',
        ]);

        StockLevel::create([
            'tenant_id' => $tenant->id,
            'product_id' => $product->id,
            'warehouse_id' => $warehouse->id,
            'quantity' => 50,
        ]);

        $processes = [];

        for ($i = 0; $i < 100; $i++) {
            $processes[] = Process::path(base_path())
                ->command([
                    PHP_BINARY,
                    'artisan',
                    'tinker',
                    '--execute',
                    "app(\App\Services\StockMovementService::class)->create([
                        'product_id' => {$product->id},
                        'warehouse_id' => {$warehouse->id},
                        'type' => 'out',
                        'quantity' => 1,
                    ], {$tenant->id});"
                ]);
        }

        $results = Process::pool(function ($pool) use ($processes) {
            foreach ($processes as $process) {
                $pool->as('movement')->start($process);
            }
        })->wait();

        $successful = 0;
        $failed = 0;

        foreach ($results as $result) {
            if ($result->successful()) {
                $successful++;
            } else {
                $failed++;
            }
        }

        $stock = StockLevel::first();

        $this->assertEquals(50, $successful);
        $this->assertEquals(50, $failed);
        $this->assertEquals(0, $stock->quantity);
    }
}