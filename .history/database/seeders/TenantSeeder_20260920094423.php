<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Tenant;
use App\Models\Warehouse;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TenantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          $tenants = Tenant::factory()
            ->count(2)
            ->create();

        foreach ($tenants as $tenant) {

            $products = Product::factory()
                ->count(5)
                ->for($tenant)
                ->create();

            $warehouses = Warehouse::factory()
                ->count(2)
                ->for($tenant)
                ->create();

            foreach ($products as $product) {
                foreach ($warehouses as $warehouse) {

                    StockLevel::create([
                        'tenant_id' => $tenant->id,
                        'product_id' => $product->id,
                        'warehouse_id' => $warehouse->id,
                        'quantity' => fake()->numberBetween(0, 500),
                    ]);
                }
            }
        }
    
    }
}
