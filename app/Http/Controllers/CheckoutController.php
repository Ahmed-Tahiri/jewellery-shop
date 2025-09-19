<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function address()
    {
        $authUserAddresses = Auth::guard('customer')->user()->addresses;
        return Inertia::render('Site/Shop/Address', ['addresses' => $authUserAddresses]);
    }
    public function addressStore(Request $request)
    {
        return redirect()->route('checkout.payment')->with('success', 'address added successfully');
    }
    public function payment()
    {
        return Inertia::render('Site/Shop/Payment');
    }
    public function orderSubmit()
    {
        dd('Order Submitted Successfully');
    }
}
