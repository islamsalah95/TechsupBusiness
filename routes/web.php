<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Define localized routes
Route::middleware(['web', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath'])
    ->prefix('{locale}')
    ->where(['locale' => implode('|', config('app.locales'))])
    ->group(function () {

        Route::get('/', function () {
            return view('welcome');
        });

        Route::view('dashboard', 'dashboard')
            ->middleware(['auth', 'verified'])
            ->name('dashboard');

        Route::view('profile', 'profile')
            ->middleware(['auth'])
            ->name('profile');

        Route::post('logout', function () {
            Auth::guard('web')->logout();
            return redirect(app()->getLocale() . '/'); // Redirect to the homepage or login page
        })->name('logout');

        require __DIR__ . '/auth.php';
        require __DIR__ . '/dash.php';
    });
