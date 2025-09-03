<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\PasswordController;
use App\Http\Controllers\Admin\Product\ProductController;
use App\Http\Controllers\Admin\SubCategoryController;
use App\Http\Controllers\Customer\PasswordController as CustomerPasswordController;
use App\Http\Controllers\Customer\AddressController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Customer\MyAccountController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\SignupCompleteController;
use App\Models\Product\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('home')->middleware('customer_or_guest');
Route::get('/signup', [CustomerController::class, 'index'])->name('signup')->middleware('guest');
Route::post('/signup', [CustomerController::class, 'store']);
Route::get('/signup/complete', [SignupCompleteController::class, 'index'])->name('signup.complete')->middleware('customer');
Route::post('/signup/complete', [SignupCompleteController::class, 'store']);
Route::get('/signin', [SessionController::class, 'index'])->name('signin')->middleware('guest');
Route::post('/signin', [SessionController::class, 'store'])->middleware(['login.throttle'])->name('signin.post');
Route::post('/logout', [SessionController::class, 'destroy'])->middleware(['auth:admin,customer']);

Route::middleware(['admin'])->group(function () {

    Route::get('/admin', [AdminController::class, 'index'])->name('dashboard');
    Route::get('/admin/profile', [AdminController::class, 'edit']);
    Route::put('/admin/profile', [AdminController::class, 'update']);
    Route::post('/admin/profile/avatar', [AdminController::class, 'uploadAvatar']);

    Route::get('/admin/profile/password', [PasswordController::class, 'index']);
    Route::put('/admin/profile/password', [PasswordController::class, 'update']);

    Route::get('/admin/inventory', [CategoryController::class, 'index'])->name('admin.inventory');

    Route::get('/admin/orders', [CategoryController::class, 'index'])->name('admin.orders');
    Route::get('/admin/orders/complete', [CategoryController::class, 'index'])->name('admin.orders.complete');
    Route::get('/admin/orders/cancel', [CategoryController::class, 'index'])->name('admin.orders.cancel');

    Route::get('/admin/inventory', [CategoryController::class, 'index'])->name('admin.inventory');


    Route::get('/admin/categories', [CategoryController::class, 'index'])->name('admin.categories');

    Route::put('/admin/categories/{category}', [CategoryController::class, 'update'])->name('admin.categories.update');
    Route::post('/admin/categories/{category}', [CategoryController::class, 'update'])->name('admin.categories.update.post');
    Route::post('/admin/categories', [CategoryController::class, 'store'])->name('admin.categories.post');
    Route::get('/admin/categories/create', [CategoryController::class, 'create'])->name('admin.categories.create');
    Route::get('/admin/categories/{category}/edit', [CategoryController::class, 'edit'])->name('admin.categories.edit');
    Route::get('/admin/categories/{category}/show', [CategoryController::class, 'show'])->name('admin.categories.show');
    Route::delete('/admin/categories/{category}', [CategoryController::class, 'destroy'])->name('admin.categories.destroy');
    Route::patch('/admin/categories/{category}/status', [CategoryController::class, 'statusUpdate'])->name('admin.categories.status.update');
    Route::post('/admin/categories/image/upload', [CategoryController::class, 'imgUpload'])->name('admin.categories.image.post');

    Route::get('/admin/subcategories/create', [SubCategoryController::class, 'create'])->name('admin.subcategories.create');
    Route::post('/admin/subcategories', [SubCategoryController::class, 'store'])->name('admin.subcategories.post');
    Route::patch('/admin/subcategories/{subcategory}/status', [SubCategoryController::class, 'statusUpdate'])->name('admin.subcategories.status.update');
    Route::get('/admin/subcategories/{subcategory}/edit', [SubCategoryController::class, 'edit'])->name('admin.subcategories.edit');
    Route::get('/admin/subcategories/{subcategory}/show', [SubCategoryController::class, 'show'])->name('admin.subcategories.show');
    Route::put('/admin/subcategories/{subcategory}', [SubCategoryController::class, 'update'])->name('admin.subcategories.update');
    Route::delete('/admin/subcategories/{subcategory}', [SubCategoryController::class, 'destroy'])->name('admin.subcategories.destroy');

    Route::get('/admin/products', [ProductController::class, 'index'])->name('admin.products');
    Route::get('/admin/products/create', [ProductController::class, 'create'])->name('admin.products.create');
});

Route::get('/myaccount', [MyAccountController::class, 'index'])->middleware('customer_or_guest');
Route::middleware(['customer'])->group(function () {
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
