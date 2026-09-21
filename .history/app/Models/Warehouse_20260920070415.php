<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Warehouse extends Model
{
   use HasFactory;

    protected $fillable = [
        'tenant_id',
        'name',
        'location',
    ];

    public $timestamps = false;

    public function tenant()
    {
        return $this->belongsTo(Tenant::class);
    }
}
