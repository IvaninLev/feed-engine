<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'Home/Index', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware('guest')->prefix('/auth')->name('auth.')->group(function () {
    Route::inertia('/login', 'Auth/Login')->name('login');
    Route::inertia('/register', 'Auth/Register')->name('register');
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/register', [RegisterController::class, 'register']);
});

Route::middleware('auth')->group(function () {
    Route::post('/post', [HomeController::class, 'store'])->name('store');
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
});
Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::prefix('/')->name('home.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('index');
});

require __DIR__ . '/settings.php';
