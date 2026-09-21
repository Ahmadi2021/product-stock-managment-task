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
   
       $service = app(StockMovementService::class);

$service->create([
    'product_id' => $product->id,
    'warehouse_id' => $warehouse->id,
    'type' => 'out',
    'quantity' => 1,
], $tenant->id);

$this->assertDatabaseHas('stock_levels', [
    'tenant_id' => $tenant->id,
    'product_id' => $product->id,
    'warehouse_id' => $warehouse->id,
    'quantity' => 49,
]);
    }
}
