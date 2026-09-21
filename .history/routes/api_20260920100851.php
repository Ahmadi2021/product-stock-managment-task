<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('tenant')->group(function () {

    Route::post(
        '/stock-movements',
        [StockMovementControlle::class, 'store']
    );

});
