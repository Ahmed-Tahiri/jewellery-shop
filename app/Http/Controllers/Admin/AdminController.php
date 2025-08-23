<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Rules\UniqueEmail;
use App\Models\Admin;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {

        $customersData = Customer::orderBy('created_at', 'desc')
            ->take(7)
            ->get(['first_name', 'last_name', 'email', 'created_at', 'id', 'avatar']);
        $customerDataModified = [];

        foreach ($customersData as $customer) {
            $customerDataModified[] = [
                'id' => $customer['id'],
                'firstname' => $customer['first_name'],
                'lastname' => $customer['last_name'],
                'email' => $customer['email'],
                'datejoined' => $customer['created_at'],
                'status' => 'active',
                'avatar' => $customer['avatar'],
            ];
        }

        return Inertia::render('Admin/Dashboard', ['recentCustomers' => $customerDataModified]);
    }

    public function edit(Admin $admin)
    {
        if (Auth::guard('customer')->check() && Auth::guard('customer')->user()->role === 'customer') {
            return redirect()->route('Home');
        }
        $adminData = Admin::first(['first_name', 'last_name', 'email', 'id', 'avatar', 'role', 'last_login_at']);
        $adminDataModified = [
            'id'        => $adminData->id,
            'firstName' => $adminData->first_name,
            'lastName'  => $adminData->last_name,
            'email'     => $adminData->email,
            'avatar'    => $adminData->avatar ? Storage::url($adminData->avatar) : null,
            'role'    => $adminData->role,
            'lastLogin'    => $adminData->last_login_at,
        ];

        return Inertia::render('Admin/Profile', ['adminData' => $adminDataModified]);
    }


    public function store(Request $request)
    {


        $attrs = $request->validate([
            'first_name'   => ['required', 'string', 'min:2', 'max:50'],
            'last_name'    => ['required', 'string', 'min:2', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:100', new UniqueEmail],
            'password'     => ['required', 'string', Password::min(6), 'confirmed']
        ]);

        $admin = Admin::create([
            'first_name'   => $attrs['first_name'],
            'last_name'    => $attrs['last_name'],
            'email'        => $attrs['email'],
            'password'     => Hash::make($attrs['password']),
            'role' => 'admin'

        ]);
        Auth::guard('admin')->login($admin);
        return redirect()->route('Dashboard')->with('success', 'Account created successfully');
    }


    public function uploadAvatar(Request $request)
    {
        $request->validate([
            'avatar' => 'required|image|max:2048',
        ]);
        $admin = Auth::guard('admin')->user();
        if ($admin->avatar && Storage::disk('public')->exists($admin->avatar)) {
            Storage::disk('public')->delete($admin->avatar);
        }
        $path = $request->file('avatar')->store('avatars', 'public');
        $admin->avatar = $path;
        $admin->save();

        return redirect()->back()->with('success', 'Avatar updated!');
    }
}
