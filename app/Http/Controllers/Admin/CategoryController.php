<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends AdminController
{
    public  function index()
    {

        $categories = Category::withCount('subCategories')
            ->get(['id', 'name', 'is_active']);

        $subCategories = SubCategory::all(['id', 'name', 'is_active', 'parent_id']);
        return Inertia::render('Admin/Category/Index', ['categories' => $categories]);
    }
    public  function create()
    {
        return Inertia::render('Admin/Category/Create');
    }
    public  function store(Request $request)
    {

        $attrs = $request->validate(
            [
                'name' => ['required', 'string', 'min:3', 'max:50', "regex:/^[A-Za-z\s'-]+$/", 'unique:categories'],
                'description' => ['required', 'string', 'min:10',]
            ],
            [
                'name.required' => "Category name is required",
                'name.min' => "Category name must be at least 3 characters long.",
                'name.max' => "Category name cannot exceed 50 characters.",
                'name.regex' => "Category name can only contain letters, spaces, hyphens (-), and apostrophes (').",
                'name.unique' => "Category name already exists.",

                'description.required' => "Category description is required",
                'description.min' => "Category description  must be at least 10 characters long.",
            ]
        );
        $subAttrs = $request->validate([
            'sub_categories' => ['array', 'nullable'],
            'sub_categories.*.name' => ['required_with:sub_categories', 'string', 'min:3', 'max:50', "regex:/^[A-Za-z\s'-]+$/"],
            'sub_categories.*.description' => ['required_with:sub_categories', 'string', 'min:10'],
        ], [
            'sub_categories.*.name.required_with' => "Subcategory name is required.",
            'sub_categories.*.name.min' => "Subcategory name must be at least 3 characters long.",
            'sub_categories.*.name.max' => "Subcategory name cannot exceed 50 characters.",
            'sub_categories.*.name.regex' => "Subcategory name can only contain letters, spaces, hyphens (-), and apostrophes (').",

            'sub_categories.*.description.required_with' => "Subcategory description is required.",
            'sub_categories.*.description.min' => "Subcategory description must be at least 10 characters long.",
        ]);


        $attrs['slug'] = Str::slug($attrs['name']);
        $category = Category::create($attrs);

        if (!empty($subAttrs) && $subAttrs) {
            $subAttrs = $request->input('sub_categories');
            foreach ($subAttrs as $subCat) {
                unset($subCat['id']);
                $newData = [
                    'name' => $subCat['name'],
                    'description' => $subCat['description'],
                    'slug' => Str::slug($subCat['name']),
                    'parent_id' => $category->id,
                ];
                SubCategory::create($newData);
            }
        }
        return redirect()->route('admin.categories');
    }


    public function statusUpdate(Request $request, Category $category)
    {
        $category->is_active = $request->input('is_active');
        $category->save();
    }
}
