<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dash\RoleController;
use App\Http\Controllers\Dash\AdminController;
use App\Http\Controllers\Dash\ServicesController;


    Route::prefix('dash')->group(function () {
          
        Route::resource('roles',    RoleController::class);

        Route::resource('services', ServicesController::class);


        Route::resource('admins', AdminController::class)->except(['show']);
        Route::get('admins/profile', [AdminController::class, 'profile'])->name('admins.profile');
        


        
    });