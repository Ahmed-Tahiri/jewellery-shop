<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\PasswordController;
use App\Http\Controllers\Customer\PasswordController as CustomerPasswordController;
use App\Http\Controllers\Customer\AddressController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Customer\MyAccountController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\SignupCompleteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('home')->middleware('auth:customer');
Route::get('/signup', [CustomerController::class, 'index'])->name('signup')->middleware('guest');
Route::post('/signup', [CustomerController::class, 'store']);
Route::get('/signup/complete', [SignupCompleteController::class, 'index'])->name('signup.complete')->middleware('auth:customer');
Route::post('/signup/complete', [SignupCompleteController::class, 'store']);
Route::post('/signin', [SessionController::class, 'store'])->middleware(['login.throttle'])->name('signin.post');
Route::get('/signin', [SessionController::class, 'index'])->name('signin');
Route::post('/logout', [SessionController::class, 'destroy'])->middleware(['auth:admin,customer']);


Route::middleware(['admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('dashboard');
    Route::get('/admin/profile', [AdminController::class, 'edit']);
    Route::put('/admin/profile', [AdminController::class, 'update']);
    Route::post('/admin/profile/avatar', [AdminController::class, 'uploadAvatar']);
    Route::get('/admin/profile/password', [PasswordController::class, 'index']);
    Route::put('/admin/profile/password', [PasswordController::class, 'update']);
});

Route::middleware(['customer'])->group(function () {
    Route::get('/myaccount', [MyAccountController::class, 'index']);
    Route::put('/myaccount', [MyAccountController::class, 'update']);
    Route::get('/myaccount/avatar', [MyAccountController::class, 'avatar']);
    Route::post('/myaccount/avatar', [MyAccountController::class, 'uploadAvatar']);
    Route::post('/myaccount/avatar/cancel', [MyAccountController::class, 'cancelAvatarUpload']);
    Route::get('/myaccount/logout', [MyAccountController::class, 'logout']);
    Route::get('/myaccount/address', [AddressController::class, 'index'])->name("myaccount.address");
    Route::delete('/myaccount/address/{address}', [AddressController::class, 'destroy'])->name('address.destroy');
    Route::put('/myaccount/address/{address}', [AddressController::class, 'update'])->name('address.update');
    Route::get('/myaccount/address/{address}/edit', [AddressController::class, 'edit'])->name('address.edit');
    Route::post('/myaccount/address', [AddressController::class, 'store']);
    Route::get('/myaccount/password', [CustomerPasswordController::class, 'index']);
    Route::put('/myaccount/password', [CustomerPasswordController::class, 'update']);
});
