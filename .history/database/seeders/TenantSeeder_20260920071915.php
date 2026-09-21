<?php

namespace Database\Seeders;

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

            Product::factory()
                ->count(5)
                ->for($tenant)
                ->create();

            Warehouse::factory()
                ->count(2)
                ->for($tenant)
                ->create();
        }
    }
    }
}
