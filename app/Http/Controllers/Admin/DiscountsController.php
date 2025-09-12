<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Discounts;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class DiscountsController extends Controller
{
    public function index()
    {
        $codeDiscounts = Discounts::where('type', 'code')->get();
        $productDiscounts = Discounts::where('type', 'product')->get();
        return Inertia::render('Admin/Discounts/Index', ['codeDiscounts' => $codeDiscounts, 'productDiscounts' => $productDiscounts]);
    }
    public function create()
    {
        return Inertia::render('Admin/Discounts/Create');
    }
    public function store(Request $request)
    {

        $validated = $request->validate(
            [
                'code' => ['required', 'string', 'regex:/^[A-Z0-9]{3,12}$/', 'min:3', 'max:12', 'unique:discounts,code'],
                'name' => ['required', 'string', 'min:3', 'max:50'],
                'discount' => ['required', 'numeric', 'min:0', 'max:100'],
                'limitation' => ['nullable', 'numeric', 'min:1'],
                'start_date' => ['required', 'date', 'after_or_equal:today'],
                'end_date' => ['nullable', 'date', 'after:start_date'],
            ],
            [
                'end_date.after' => 'The discount end date must be after the start date.',
                'start_date.after_or_equal' => 'The discount start date must be today or a future date.',
            ]
        );
        $startDate = Carbon::parse($validated['start_date']);
        $today = Carbon::today();
        $discountFormattedData = [
            'code' => $validated['code'],
            'name' => $validated['name'],
            'discount_percent' => $validated['discount'],
            'limitation' => $validated['limitation'] ?? null,
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'],
            'type' => 'code',
            'is_active' => $startDate->isSameDay($today),
        ];

        Discounts::create($discountFormattedData);
        return redirect()->route('admin.discounts')->with('success', 'Discount code created successfully');
    }

    public function update(Request $request, Discounts $discount)
    {
        $validated = $request->validate(
            [
                'code' => ['required', 'string', 'regex:/^[A-Z0-9]{3,12}$/', 'min:3', 'max:12', Rule::unique('discounts')->ignore($discount)],
                'name' => ['required', 'string', 'min:3', 'max:50'],
                'discount' => ['required', 'numeric', 'min:0', 'max:100'],
                'limitation' => ['nullable', 'numeric', 'min:1'],
                'start_date' => ['required', 'date', 'after_or_equal:today'],
                'end_date' => ['nullable', 'date', 'after:start_date'],
            ],
            [
                'end_date.after' => 'The discount end date must be after the start date.',
                'start_date.after_or_equal' => 'The discount start date must be today or a future date.',
            ]
        );
        $startDate = Carbon::parse($validated['start_date']);
        $today = Carbon::today();
        $discountFormattedData = [
            'code' => $validated['code'],
            'name' => $validated['name'],
            'discount_percent' => $validated['discount'],
            'limitation' => $validated['limitation'] ?? null,
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'],
            'type' => 'code',
            'is_active' => $startDate->isSameDay($today),
        ];

        $discount->update($discountFormattedData);
        return redirect()->route('admin.discounts')->with('success', 'Discount code created successfully');
    }

    public function edit(Request $request, Discounts $discount)
    {
        $discountModifiedData = $discount->only(['id', 'name', 'code', 'discount_percent', 'limitation', 'start_date', 'end_date']);
        return Inertia::render('Admin/Discounts/Edit', ['discount' => $discountModifiedData]);
    }
    public function show(Discounts $discount)
    {
        return Inertia::render('Admin/Discounts/Show',);
    }
    public function statusUpdate(Request $request, Discounts $discount)
    {
        $discount->is_active = $request->input('is_active');
        $discount->save();
        return redirect()->back()->with('success', 'Discount status updated successfully');
    }
}
