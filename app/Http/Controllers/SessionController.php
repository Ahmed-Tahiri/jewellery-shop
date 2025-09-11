<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\LoginAttempt;
use App\Models\Session;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SessionController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Signin');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required'],
        ], [
            'email.required'    => 'Please enter email address',
            'password.required' => 'Please enter password',
        ]);




        $remember = $request->boolean('remember');
        $email    = $credentials['email'];
        $ip       = $request->ip();
        $customer = Customer::where('email', $email)->first();
        if ($customer && $customer->status === 'blocked') {
            return redirect()->back()->withErrors([
                'status' => 'Your account is currently disabled. Please contact support for assistance.'
            ]);
        };

        if ($request->session()->has('guard')) {
            return back()->withErrors([
                'auth' => 'You are already logged in as ' . $request->session()->get('guard') . '. Please logout first.',
            ]);
        }
        $guards = [
            'admin'    => 'dashboard',
            'customer' => 'home',
        ];

        foreach ($guards as $guard => $redirect) {
            if (Auth::guard($guard)->attempt($credentials, $remember)) {
                $user = Auth::guard($guard)->user();
                $user->last_login_at = now();
                $user->save();

                $this->clearAttempts($email, $ip);

                $request->session()->regenerate();
                $request->session()->put('guard', $guard);
                return redirect()->route($redirect)->with('success', 'Signin Successful');
            }
        }

        if ($response = $this->recordAttempt($email, config('signin_throttle.limit'), $ip)) {
            return $response;
        }

        return back()->withErrors([
            'auth' => 'Invalid email or password.',
        ])->withInput($request->only('email'));
    }


    public function destroy(Request $request)
    {
        if (Auth::guard('admin')->check()) {
            Auth::guard('admin')->logout();
            $redirect = 'signin';
        } else {
            Auth::guard('customer')->logout();
            $redirect = 'home';
        }

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        $request->session()->forget('guard');

        return redirect()->route($redirect);
    }

    private function clearAttempts($email, $ip)
    {
        LoginAttempt::where('identifier', $email)->delete();
        LoginAttempt::where('identifier', $ip)->delete();
    }


    private function recordAttempt($identifier, $limit, $ip)
    {
        $attempt = LoginAttempt::firstOrNew(['ip_address' => $ip]);
        $attempt->identifier = $identifier;
        $attempt->last_attempt_at = now();
        $newAttempts = ($attempt->attempts ?? 0) + 1;
        if ($newAttempts >= $limit) {
            $blockSeconds = config('signin_throttle.block_seconds');
            $attempt->blocked_until = now()->addSeconds($blockSeconds);
            $attempt->attempts = 0;
            $attempt->save();
            return back()->withErrors([
                'retry_after' => "Too many login attempts. Retry after " . $blockSeconds . " seconds",
            ]);
        } else {
            $attempt->attempts = $newAttempts;
            $attempt->blocked_until = null;
            $attempt->save();
            $remaining = $limit - $newAttempts;
            return back()->withErrors([
                'retry_after' => "Invalid credentials. You have {$remaining} attempt(s) left."
            ]);
        }
    }
}
