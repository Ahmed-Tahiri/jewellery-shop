<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\LoginAttempt;
use Illuminate\Support\Facades\Redirect;

class CheckLoginThrottle
{

    public function handle(Request $request, Closure $next)
    {
        $ip = $request->ip();
        $ipAttempt = LoginAttempt::where('ip_address', $ip)->first();
        if ($ipAttempt && $ipAttempt->blocked_until && $ipAttempt->blocked_until->isFuture()) {
            $seconds = (int) now()->diffInSeconds($ipAttempt->blocked_until);
            $message = "Too many login attempts. Try again in {$seconds} second(s).";
            return $this->errorResponse($request, $message, $seconds);
        }

        return $next($request);
    }

    private function errorResponse(Request $request, string $message, int $seconds)
    {
        if ($request->expectsJson()) {
            return response()->json(['message' => $message, 'retry_block' => $seconds], 429)
                ->header('Retry-After', $seconds);
        }
        return Redirect::back()->withErrors(['retry_block' => $message]);
    }
}
