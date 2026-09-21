<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('main');
})->name('home');

Route::middleware(['identifyTenant'])->group(function () {
   
});

// please sent with each request the X-Tenant-ID = id of tenant برای هر درخواست لطفن ایدی را به این اسم بفرستید

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
