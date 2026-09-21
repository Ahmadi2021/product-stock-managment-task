<?php

use App\Http\Controllers\StockLevelController;
use App\Http\Controllers\StockMovementController;
use Illuminate\Support\Facades\Route;

Route::middleware('identifyTenant')->group(function () {

    Route::post('/stock-movements', [StockMovementController::class, 'store']);
    Route::post('/stock-movements', [StockLevelController::class, 'index']);

    Route::get('/products/{sku}/history', [StockMovementController::class, 'history']);
});
