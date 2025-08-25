<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Customer\CustomerController;
use App\Models\Gender;
use App\Rules\UniqueEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class MyAccountController extends CustomerController
{

    public function index()
    {

        $customer = Auth::guard('customer')->user();
        $genders = Gender::all(['id', 'gender']);

        $CustomerData = $customer->only([
            'id',
            'first_name',
            'last_name',
            'email',
            'phone',
            'gender',
            'avatar'
        ]);
        return Inertia::render('MyAccount/Index', ['customer' => $CustomerData, 'genders'  => $genders]);
    }

    public function update(Request $request)
    {
        $customer = Auth::guard('customer')->user();
        $attrs = $request->validate([
            'first_name'   => ['required', 'string', "regex:/^[\p{L}]+(?:[\p{L} '-][\p{L}]+)*$/u", 'min:2', 'max:50'],
            'last_name'    => ['required', 'string', "regex:/^[\p{L}]+(?:[\p{L} '-][\p{L}]+)*$/u", 'min:2', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:100', new UniqueEmail(null, $customer->id)],
            'phone'    => ['required', 'string', "regex:/^(?:\+?\d{7,30}|0\d{6,29})$/", 'min:7', 'max:30'],
            'gender_id' => ['required', Rule::exists('genders', 'id')],
        ], [
            'gender_id.exists' => 'Selected gender is invalid.',
        ]);

        $customer->update($attrs);

        return redirect()->back()->with('success', 'Profile updated successfully.');
    }
    public function logout()
    {
        return Inertia::render('MyAccount/Logout');
    }
}
