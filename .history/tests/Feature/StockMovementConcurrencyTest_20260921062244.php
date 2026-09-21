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
        // We will put the test here.
    }
}