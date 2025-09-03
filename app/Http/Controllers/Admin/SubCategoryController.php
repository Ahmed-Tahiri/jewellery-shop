<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class SubCategoryController extends Controller
{


    public function create(Request $request)
    {
        $categories = Category::all();
        return Inertia::render('Admin/Categories/SubCategory/Create', ['categories' => $categories]);
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'parent' => ['required', 'exists:categories,id'],
            'subcategories' => ['array', 'nullable'],
            'subcategories.*.name' => ['required_with:subcategories', 'string', 'min:3', 'max:50', "regex:/^[A-Za-z\s'-]+$/",],
            'subcategories.*.description' => ['required_with:subcategories', 'string', 'min:10',],
        ], [
            'subcategories.*.name.required_with' => "Subcategory name is required.",
            'subcategories.*.name.min' => "Subcategory name must be at least 3 characters long.",
            'subcategories.*.name.max' => "Subcategory name cannot exceed 50 characters.",
            'subcategories.*.name.regex' => "Subcategory name can only contain letters, spaces, hyphens (-), and apostrophes (').",

            'subcategories.*.description.required_with' => "Subcategory description is required.",
            'subcategories.*.description.min' => "Subcategory description must be at least 10 characters long.",
        ]);


        if (!empty($validated['subcategories'])) {
            foreach ($validated['subcategories'] as $sub) {
                $exists = SubCategory::where('parent_id', $validated['parent'])
                    ->whereRaw('LOWER(name) = ?', [strtolower($sub['name'])])
                    ->exists();

                if ($exists) {
                    return back()->withErrors([
                        'subcategories' => "The subcategory '{$sub['name']}' already exists under this parent category."
                    ])->withInput();
                }
            }
        }

        foreach ($validated['subcategories'] as $sub) {
            SubCategory::create([
                'slug' => Str::slug($sub['name']),
                'parent_id' => $validated['parent'],
                'name' => $sub['name'],
                'description' => $sub['description'],
            ]);
        }

        return redirect()->route('admin.categories')->with('success', 'Subcategories added successfully.');
    }
    public function statusUpdate(Request $request, SubCategory $subcategory)
    {
        $subcategory->is_active = $request->input('is_active');
        $subcategory->save();
    }
}
