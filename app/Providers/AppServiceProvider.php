<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share(
            [
                'auth' => function () {
                    if (Auth::guard('admin')->check()) {

                        $customer =   Auth::guard('admin')->user();
                        return ['id' => $customer->id, 'firstName' => $customer->first_name, 'lastName' => $customer->last_name, 'email' => $customer->email];
                    }
                    if (Auth::guard('customer')->check()) {

                        $customer =   Auth::guard('customer')->user();
                        return ['id' => $customer->id, 'firstName' => $customer->first_name, 'lastName' => $customer->last_name, 'email' => $customer->email];
                    }
                    return null;
                }
            ]
        );
    }
}
