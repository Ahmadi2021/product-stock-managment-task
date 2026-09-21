<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockMovement extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'tenant_id',
        'product_id',
        'warehouse_id',
        'type',
        'quantity',
        'reference',
        'meta',
    ];

    protected $casts = [
        'quantity' => 'integer',
         'meta' => 'array',
    ];
}
