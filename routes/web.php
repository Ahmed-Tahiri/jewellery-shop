<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('Home');
Route::get('/signup', [CustomerController::class, 'index']);
Route::post('/signup', [CustomerController::class, 'store']);

Route::get('/login', [SessionController::class, 'index']);
Route::post('/login', [SessionController::class, 'store']);
Route::post('/logout', [SessionController::class, 'destroy']);

Route::middleware(['admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('Dashboard');
});
Route::get('/admin/signup', [AdminController::class, 'create']);
Route::post('/admin/signup', [AdminController::class, 'store']);
