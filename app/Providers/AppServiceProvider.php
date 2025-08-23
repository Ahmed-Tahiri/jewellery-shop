<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            config_path('signin_throttle.php'),
            'signin_throttle'
        );
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
                        $adminData = Auth::guard('admin')->user();
                        $adminDataModified = [
                            'id'        => $adminData->id,
                            'firstName' => $adminData->first_name,
                            'lastName'  => $adminData->last_name,
                            'email'     => $adminData->email,
                            'avatar'    => $adminData->avatar ? Storage::url($adminData->avatar) : null,
                            'lastLogin'    => $adminData->last_login_at,
                        ];
                        return $adminDataModified;
                    }
                    if (Auth::guard('customer')->check()) {
                        $customerData = Auth::guard('admin')->user();
                        $customerDataModified = [
                            'id'        => $customerData->id,
                            'firstName' => $customerData->first_name,
                            'lastName'  => $customerData->last_name,
                            'email'     => $customerData->email,
                            'avatar'    => $customerData->avatar ? Storage::url($customerData->avatar) : null,
                            'lastLogin'    => $customerData->last_login_at,
                        ];
                        return $customerDataModified;
                    }
                    return null;
                }
            ]
        );
    }
}
