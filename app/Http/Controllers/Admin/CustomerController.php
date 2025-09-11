<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customersData = Customer::orderBy('created_at', 'desc')->get(['first_name', 'last_name', 'email', 'created_at', 'id', 'avatar', 'status']);
        $customerDataModified = [];
        foreach ($customersData as $customer) {
            $customerDataModified[] = [
                'id' => $customer['id'],
                'firstname' => $customer['first_name'],
                'lastname' => $customer['last_name'],
                'email' => $customer['email'],
                'datejoined' => $customer['created_at'],
                'status' => $customer['status'],
                'avatar' => $customer['avatar'],
            ];
        }
        return Inertia::render('Admin/Customers/Index', ['customers' => $customerDataModified]);
    }


    public function show(Customer $customer)
    {
        $customer->load(['addresses']);
        $addresses = $customer->addresses->sortByDesc('is_primary')->values();
        $customerDataModified = [
            'id' => $customer['id'],
            'firstname' => $customer['first_name'],
            'lastname' => $customer['last_name'],
            'email' => $customer['email'],
            'phone' => $customer['phone'],
            'status' => $customer['status'],
            'avatar' => $customer['avatar'],
            'addresses' => $addresses,
            'gender' => $customer->gender->gender,
            'createdAt' => $customer->created_at,
            'updatedAt' => $customer->updated_at
        ];
        return Inertia::render('Admin/Customers/Show', ['customer' => $customerDataModified]);
    }
    public function destroy(Request $request, Customer $customer)
    {
        Address::where('customer_id', $customer->id)->delete();
        if (
            !Str::startsWith($customer->avatar, ['http://', 'https://']) &&
            Storage::disk('public')->exists($customer->avatar)
        ) {
            Storage::disk('public')->delete($customer->avatar);
        }
        $customer->delete();
        return redirect()->route('admin.customers')->with('success', 'Customer Deleted successfully');
    }
    public function statusUpdate(Request $request, Customer $customer)
    {
        $customer->status = $request->input('status');
        $customer->save();
        return redirect()->back()->with('success', 'Status updated successfully');
    }
}
