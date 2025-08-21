<?php

namespace App\Http\Controllers;

use App\Models\LoginAttempt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SessionController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Signin');
    }
    public function store(Request $request)
    {
        $credentials = $request->validate(['email' => ['required', 'email'], 'password' => 'required'], ['email.required' => 'Please enter email address', 'password.required' => 'Please enter password']);
        $remember = $request->boolean('remember');

        $email = $credentials['email'];
        $ip = $request->ip();

        if (Auth::guard('admin')->attempt($credentials, $remember)) {
            $this->clearAttempts($email, $ip);
            $request->session()->regenerate();
            return redirect()->route('Dashboard')->with('success', 'Login Successful');
        }
        if (Auth::guard('customer')->attempt($credentials, $remember)) {
            $this->clearAttempts($email, $ip);
            $request->session()->regenerate();
            return redirect()->route('Home')->with('success', 'Login Successful');
        }

        if ($response = $this->recordAttempt($email, config('signin_throttle.limit'), $ip)) {
            return $response;
        }

        return back()->withErrors([
            'auth' => 'Invalid email or password.',
        ])->withInput($request->only('email', 'password'));
    }

    public function destroy(Request $request)
    {
        if (Auth::guard('admin')->check()) {
            Auth::guard('admin')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return redirect()->route('Signin');
        } elseif (Auth::guard('customer')->check()) {
            Auth::guard('customer')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return redirect()->route('Home');
        }
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
