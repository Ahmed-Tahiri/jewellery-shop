<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $customers = [
            [
                'first_name' => 'Ahmed',
                'last_name' => 'Tahiri',
                'email' => 'ahmed@example.com',
                'phone' => '03001234567',
                'password' => Hash::make('Ahmed123'),
                'role' => 'customer',
                'status' => 'active',
                'avatar' => null,
                'last_login_at' => now(),
                'gender_id' => 1,
            ],
            [
                'first_name' => 'Sara',
                'last_name' => 'Khan',
                'email' => 'sara@example.com',
                'phone' => '03017654321',
                'password' => Hash::make('Sara123'),
                'role' => 'customer',
                'status' => 'active',
                'avatar' => null,
                'last_login_at' => now(),
                'gender_id' => 2,
            ],
            [
                'first_name' => 'Bilal',
                'last_name' => 'Ahmed',
                'email' => 'bilal@example.com',
                'phone' => '03019876543',
                'password' => Hash::make('Bilal123'),
                'role' => 'customer',
                'status' => 'active',
                'avatar' => null,
                'last_login_at' => now(),
                'gender_id' => 1,
            ],
            [
                'first_name' => 'Ayesha',
                'last_name' => 'Ali',
                'email' => 'ayesha@example.com',
                'phone' => '03013456789',
                'password' => Hash::make('Ayesha123'),
                'role' => 'customer',
                'status' => 'active',
                'avatar' => null,
                'last_login_at' => now(),
                'gender_id' => 2,
            ],
            [
                'first_name' => 'Usman',
                'last_name' => 'Malik',
                'email' => 'usman@example.com',
                'phone' => '03011223344',
                'password' => Hash::make('Usman123'),
                'role' => 'customer',
                'status' => 'active',
                'avatar' => null,
                'last_login_at' => now(),
                'gender_id' => 1,
            ],
        ];

        DB::table('customers')->insert($customers);
    }
}
