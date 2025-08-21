<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {

        if (!Admin::exists()) {
            Admin::create([
                'first_name' => 'Super',
                'last_name' => 'Admin',
                'email' => 'admin@jewelleryshop.com',
                'password' => Hash::make('Admin123'),
                'role' => 'admin',
            ]);
        }
    }
}
