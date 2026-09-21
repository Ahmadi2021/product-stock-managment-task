<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'tenant_id',
        'sku',
        'name',
        'unit_price',
    ];

    public $timestamps = false;

    protected static function booted()
    {
        static::addGlobalScope(new TenantSco);
    }


    public function tenant()
    {
        return $this->belongsTo(Tenant::class);
    }

    public function warehouses()
    {
        return $this->belongsToMany(Warehouse::class);
    }
}
