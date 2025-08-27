<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Customer\CustomerController;
use App\Models\Gender;
use App\Rules\UniqueEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class MyAccountController extends CustomerController
{

    public function index()
    {

        $customer = Auth::guard('customer')->user();
        if (!$customer) {
            return redirect()->route('signin');
        }
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

        $tempFilename = session('temp_avatar');
        $tempAvatarUrl = $tempFilename ? Storage::url('temp_avatars/' . $tempFilename) : null;

        return Inertia::render('MyAccount/Index', [
            'customer' => $CustomerData,
            'genders'  => $genders,
            'temp_avatar' => $tempAvatarUrl,
        ]);
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

        $tempFilename = session('temp_avatar');

        if ($tempFilename && Storage::disk('public')->exists('temp_avatars/' . $tempFilename)) {
            Storage::disk('public')->move('temp_avatars/' . $tempFilename, 'avatars/' . $tempFilename);
            $attrs['avatar'] = 'avatars/' . $tempFilename;
            session()->forget('temp_avatar');
        }
        $customer->update($attrs);
        return redirect()->back()->with('success', 'Profile updated successfully.');
    }
    public function avatar(Request $request)
    {


        return Inertia::render('MyAccount/Avatar');
    }
    public function uploadAvatar(Request $request)
    {

        $avatar = $request->validate([
            'avatar' => 'required|image|max:2048',
        ], [
            'avatar.required' => 'Please upload an image.',
            'avatar.image' => 'Only image files are allowed.',
            'avatar.max' => 'The avatar must be less than 2MB.',
        ]);
        $file = $request->file('avatar');
        $filename = Str::random(40) . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('temp_avatars', $filename, 'public');
        session(['temp_avatar' => $filename]);
        return redirect('/myaccount')->with('success', 'Avatar uploaded. Submit profile to save it permanently.');
    }
    public function cancelAvatarUpload(Request $request)
    {
        $filename = session('temp_avatar');
        if ($filename && Storage::exists('public/temp_avatars/' . $filename)) {
            Storage::delete('public/temp_avatars/' . $filename);
        }
        session()->forget('temp_avatar');
        return redirect('/myaccount');
    }
    public function logout()
    {
        return Inertia::render('MyAccount/Logout');
    }
}
