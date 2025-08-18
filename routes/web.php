<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('Home');
Route::get('/signup', [CustomerController::class, 'index']);
Route::post('/signup', [CustomerController::class, 'store']);
