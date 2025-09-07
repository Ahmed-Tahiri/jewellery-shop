<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Product\ColorTone;
use Illuminate\Http\Request;

class ColorToneController extends Controller
{
    public function store(Request $request)
    {
        $attrs = $request->validate([
            'color_name' => ['required', 'string', 'unique:color_tones,name'],
            'hex_code' => ['required', 'string', 'unique:color_tones,hex_code'],
        ], [
            'color_name.unique' => 'Color with same name exists.',
            'hex_code.unique' => 'Color with same hex code exists.',
            'hex_code.required' => 'Please choose color from color pallet.'
        ]);


        ColorTone::create(['name' => $attrs['color_name'], 'hex_code' => $attrs['hex_code']]);
        return redirect()->back()->with('success', 'Color added successfully');
    }
}
