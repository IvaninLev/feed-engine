<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'Home/Index', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::prefix('/')->name('home.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('index');
    Route::post('/post', [HomeController::class, 'store'])->name('store');
});

require __DIR__.'/settings.php';
