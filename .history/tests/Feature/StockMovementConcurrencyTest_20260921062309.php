<?php

namespace Tests\Feature;

use App\Models\Product;
use App\Models\StockLevel;
use App\Models\Tenant;
use App\Models\Warehouse;
use App\Services\StockMovementService;
use Illuminate\Foundation\Testing\RefreshDatabase;
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

        $stockLevel = StockLevel::create([
            'tenant_id' => $tenant->id,
            'product_id' => $product->id,
            'warehouse_id' => $warehouse->id,
            'quantity' => 50,
        ]);
    }
}
