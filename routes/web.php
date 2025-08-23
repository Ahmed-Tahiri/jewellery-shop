<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AvatarController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('Home');
Route::get('/signup', [CustomerController::class, 'index'])->name('Signup');
Route::post('/signup', [CustomerController::class, 'store']);

Route::get('/signin', [SessionController::class, 'index'])->name('Signin');
Route::post('/signin', [SessionController::class, 'store'])->middleware('login.throttle');
Route::post('/logout', [SessionController::class, 'destroy']);

Route::middleware(['admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('Dashboard');
    Route::get('/admin/profile', [AdminController::class, 'edit']);
    Route::post('/admin/avatar', [AdminController::class, 'uploadAvatar']);
});
