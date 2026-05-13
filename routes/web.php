<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::inertia('/login', 'Auth/Login')->name('login');
        Route::inertia('/register', 'Auth/Register')->name('register');
        Route::post('/login', [LoginController::class, 'login']);
        Route::post('/register', [RegisterController::class, 'register']);
    });
});
Route::get('/user/{id}', [ProfileController::class, 'show'])->name('show');
Route::get('/', [UsersController::class, 'index'])->name('users');

Route::middleware('auth')->group(function () {
    Route::prefix('posts')->group(function () {
        Route::post('/post', [ProfileController::class, 'store'])->name('post.store');
    });
    Route::inertia('/profile/edit', 'Profile/EditProfile')->name('edit');
    Route::post('/update', [ProfileController::class, 'update'])->name('user.update');
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
});

require __DIR__ . '/settings.php';
