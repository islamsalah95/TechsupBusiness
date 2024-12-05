<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ServicesController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

// Route::group([
//     'prefix'     => LaravelLocalization::setLocale(),
//     'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath']
// ], function() {
//     Route::prefix('dash')->group(function () {
//         Route::resource('services', ServicesController::class);
//         Route::resource('roles',     RoleController::class);
//     });

// });

Route::prefix('dash')->group(function () {
    Route::resource('services', ServicesController::class);
    Route::resource('roles',     RoleController::class);
});


