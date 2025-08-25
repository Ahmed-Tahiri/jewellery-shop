<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\PasswordController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Customer\MyAccountController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('Home');
Route::get('/signup', [CustomerController::class, 'index'])->name('Signup')->middleware('guest');
Route::post('/signup', [CustomerController::class, 'store']);

Route::get('/signin', [SessionController::class, 'index'])->name('Signin')->middleware('guest');
Route::post('/signin', [SessionController::class, 'store'])->middleware(['login.throttle']);
Route::post('/logout', [SessionController::class, 'destroy'])->middleware(['auth:admin,customer']);


Route::middleware(['admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('Dashboard');
    Route::get('/admin/profile', [AdminController::class, 'edit']);
    Route::put('/admin/profile', [AdminController::class, 'update']);
    Route::post('/admin/profile/avatar', [AdminController::class, 'uploadAvatar']);
    Route::get('/admin/profile/password', [PasswordController::class, 'index']);
    Route::put('/admin/profile/password', [PasswordController::class, 'update']);
});

Route::middleware(['customer'])->group(function () {
    Route::get('/myaccount', [MyAccountController::class, 'index']);
    Route::get('/myaccount/logout', [MyAccountController::class, 'logout']);
});
