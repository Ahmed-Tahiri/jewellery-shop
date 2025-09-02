<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public  function index()
    {

        $categories = Category::withCount('subCategories')
            ->get(['id', 'name', 'is_active', 'image', 'created_at']);

        $subCategories = SubCategory::all(['id', 'name', 'is_active', 'parent_id', 'created_at']);
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
                'description' => ['required', 'string', 'min:10'],
                'image' => 'required|image|max:2048',
            ],
            [
                'name.required' => "Category name is required",
                'name.min' => "Category name must be at least 3 characters long.",
                'name.max' => "Category name cannot exceed 50 characters.",
                'name.regex' => "Category name can only contain letters, spaces, hyphens (-), and apostrophes (').",
                'name.unique' => "Category name already exists.",

                'description.required' => "Category description is required",
                'description.min' => "Category description  must be at least 10 characters long.",

                'image.required' => 'Please upload an image.',
                'image.image' => 'Only image files are allowed.',
                'image.max' => 'The image must be less than 2MB.',
            ]
        );


        $path = $request->file('image')->store('categories_images', 'public');
        $attrs['image'] = $path;
        $attrs['slug'] = Str::slug($attrs['name']);
        $category = Category::create($attrs);

        return redirect()->route('admin.categories');
    }



    public function edit(Request $request, Category $category)
    {
        return Inertia::render('Admin/Category/Edit', ['category' => $category]);
    }
    public function show(Request $request, Category $category)
    {
        return Inertia::render('Admin/Category/Show', ['category' => $category]);
    }

    public function statusUpdate(Request $request, Category $category)
    {
        $category->is_active = $request->input('is_active');
        $category->save();
    }
    public function imgUpload(Request $request)
    {
        $img = $request->validate([
            'image' => 'required|image|max:2048',
        ], [
            'image.required' => 'Please upload an image.',
            'image.image' => 'Only image files are allowed.',
            'image.max' => 'The image must be less than 2MB.',
        ]);

        $file = $request->file('image');
        $filename = Str::random(40) . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('temp_categories_images', $filename, 'public');
        session(['temp_categories_images' => $filename]);
        return back()->with('success', 'Image uploaded successfully');
    }
}


    //   $subAttrs = $request->validate([
    //         'sub_categories' => ['array', 'nullable'],
    //         'sub_categories.*.name' => ['required_with:sub_categories', 'string', 'min:3', 'max:50', "regex:/^[A-Za-z\s'-]+$/"],
    //         'sub_categories.*.description' => ['required_with:sub_categories', 'string', 'min:10'],
    //     ], [
    //         'sub_categories.*.name.required_with' => "Subcategory name is required.",
    //         'sub_categories.*.name.min' => "Subcategory name must be at least 3 characters long.",
    //         'sub_categories.*.name.max' => "Subcategory name cannot exceed 50 characters.",
    //         'sub_categories.*.name.regex' => "Subcategory name can only contain letters, spaces, hyphens (-), and apostrophes (').",

    //         'sub_categories.*.description.required_with' => "Subcategory description is required.",
    //         'sub_categories.*.description.min' => "Subcategory description must be at least 10 characters long.",
    //     ]);

    
        // if (!empty($subAttrs) && $subAttrs) {
        //     $subAttrs = $request->input('sub_categories');
        //     foreach ($subAttrs as $subCat) {
        //         unset($subCat['id']);
        //         $newData = [
        //             'name' => $subCat['name'],
        //             'description' => $subCat['description'],
        //             'slug' => Str::slug($subCat['name']),
        //             'parent_id' => $category->id,
        //         ];
        //         SubCategory::create($newData);
        //     }
        // }