<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ServicesController;



// Define localized routes
Route::middleware(['web', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath'])
    ->prefix('{locale}')
    ->where(['locale' => implode('|', config('app.locales'))]) 
    ->group(function () {
        Route::prefix('dash')->group(function () {
          
          
            Route::resource('services', ServicesController::class);
            Route::resource('roles', RoleController::class);












            
        });
    });





