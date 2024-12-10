<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ServicesController;


    Route::prefix('dash')->group(function () {
          
        Route::resource('roles', RoleController::class);

        Route::resource('services', ServicesController::class);
        
    });