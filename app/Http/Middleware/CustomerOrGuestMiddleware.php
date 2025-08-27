<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CustomerOrGuestMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!Auth::guard('customer')->check() && !Auth::guard('admin')->check()) {
            return $next($request);
        }

        // If logged in as customer → allow
        if (Auth::guard('customer')->check()) {
            return $next($request);
        }

        // If logged in as admin → deny
        if (Auth::guard('admin')->check()) {
            return abort(403);
        }

        return abort(403);
    }
}
