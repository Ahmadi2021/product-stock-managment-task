<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\StockLevel;
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

        }
    
    }
}
