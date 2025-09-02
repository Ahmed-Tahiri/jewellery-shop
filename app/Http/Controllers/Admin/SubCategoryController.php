<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubCategoryController extends Controller {}



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