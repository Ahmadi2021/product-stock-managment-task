<?php

use App\Http\Controllers\StockMovementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('tenant')->group(function () {

    Route::post(
    '/stock-movements',[StockMovementController::class, 'store']);

});
