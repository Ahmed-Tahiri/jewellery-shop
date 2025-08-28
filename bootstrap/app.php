<?php

use App\Console\Commands\CreateAdmin;
use App\Console\Commands\DeleteAdmin;
use App\Console\Commands\UpdateAdmin;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\CheckLoginThrottle;
use App\Http\Middleware\CustomerMiddleware;
use App\Http\Middleware\CustomerOrGuestMiddleware;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
        $middleware->alias([
            'admin' => AdminMiddleware::class,
            'login.throttle' => CheckLoginThrottle::class,
            'customer_or_guest' => CustomerOrGuestMiddleware::class,
            'customer' => CustomerMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->respond(function (Response $response, Throwable $exception, Request $request) {
            if ( in_array($response->getStatusCode(), [500, 503, 404, 403])) { //! app()->environment(['local', 'testing']) && include this in condition to prevent local environment from server error pages
                return Inertia::render('ErrorPage', ['status' => $response->getStatusCode(), 'role' => Auth::guard('admin')->user()->role ?? ''])
                    ->toResponse($request)
                    ->setStatusCode($response->getStatusCode());
            } elseif ($response->getStatusCode() === 419) {
                return back()->with([
                    'message' => 'The page expired, please try again.',
                ]);
            }

            return $response;
        });
    })
    ->withCommands([CreateAdmin::class, UpdateAdmin::class, DeleteAdmin::class])
    ->create();
