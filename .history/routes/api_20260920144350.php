<?php

use App\Http\Controllers\StockMovementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('identifyTenant')->group(function () {
    Route::post('/stock-movements',[StockMovementController::class, 'store']);

        'id' => $this->id,
            'product_id' => $this->product_id,
            'warehouse_id' => $this->warehouse_id,
            'quantity' => $this->quantity,
            'updated_at' => $this->updated_at,

});
