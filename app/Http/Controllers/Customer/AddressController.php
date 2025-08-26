<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Customer\CustomerController;
use App\Models\Address;
use App\Rules\UniqueEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddressController extends CustomerController
{

    public function index()
    {
        $customer = Auth::guard('customer')->user();
        $addresses = $customer->addresses->map(function ($address) {
            return [
                'id'     => $address->id,
                'city'   => $address->city,
                'street' => $address->street,
            ];
        });

        return Inertia::render('MyAccount/Address', ['addresses' => $addresses]);
    }
    public function store(Request $request)
    {


        $customer = Auth::guard('customer')->user();
        $attrs = $request->validate([
            'first_name'   => ['required', 'string', "regex:/^[\p{L}]+(?:[\p{L} '-][\p{L}]+)*$/u", 'min:2', 'max:50'],
            'last_name'    => ['required', 'string', "regex:/^[\p{L}]+(?:[\p{L} '-][\p{L}]+)*$/u", 'min:2', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:100', new UniqueEmail(null, $customer->id)],
            'phone'    => ['required', 'string', "regex:/^(?:\+?\d{7,30}|0\d{6,29})$/", 'min:7', 'max:30'],
            'country' => ['required', 'string', "regex:/^[\p{L} ]+$/u",],
            'state' => ['required', 'string', "regex:/^[\p{L} ]+$/u",],
            'city' => ['required', 'string', "regex:/^[\p{L} ]+$/u",],
            'zipcode' => ['required', 'string', "regex:/^[0-9A-Za-z\- ]+$/",],
            'street' => ['required', 'string', 'max:255'],
            'is_primary' => ['nullable', 'boolean'],
        ]);
        $address = $customer->addresses()->create($attrs);

        if (! empty($attrs['is_primary'])) {
            $address->markAsPrimary();
        }

        return redirect()->back()->with('success', 'Address added successfully');
    }

    public function update(Request $request, Address $address)
    {


        $customer = Auth::guard('customer')->user();
        if ($address->customer_id !== $customer->id) {
            abort(403, 'Unauthorized action.');
        }
        $attrs = $request->validate([
            'first_name'   => ['required', 'string', "regex:/^[\p{L}]+(?:[\p{L} '-][\p{L}]+)*$/u", 'min:2', 'max:50'],
            'last_name'    => ['required', 'string', "regex:/^[\p{L}]+(?:[\p{L} '-][\p{L}]+)*$/u", 'min:2', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:100', new UniqueEmail(null, $customer->id)],
            'phone'    => ['required', 'string', "regex:/^(?:\+?\d{7,30}|0\d{6,29})$/", 'min:7', 'max:30'],
            'country' => ['required', 'string', "regex:/^[\p{L} ]+$/u",],
            'state' => ['required', 'string', "regex:/^[\p{L} ]+$/u",],
            'city' => ['required', 'string', "regex:/^[\p{L} ]+$/u",],
            'zipcode' => ['required', 'string', "regex:/^[0-9A-Za-z\- ]+$/",],
            'street' => ['required', 'string', 'max:255'],
            'is_primary' => ['nullable', 'boolean'],
        ]);
        $address->update($attrs);

        if (! empty($attrs['is_primary'])) {
            $address->markAsPrimary();
        }

        return redirect()->route('myaccount.address')->with('success', 'Address added successfully');
    }

    public function edit(Address $address)
    {
        return Inertia::render('MyAccount/EditAddress', [
            'address' => $address,
        ]);
    }

    public function destroy(Address $address)
    {
        $address->delete();
        return redirect()->back()->with('success', 'Address deleted successfully.');
    }
}
