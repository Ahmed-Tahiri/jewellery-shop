<?php

namespace Database\Seeders;

use App\Models\Gender;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $gender = ['Female', 'Male', 'Other'];
        foreach ($gender as $gender) {
            Gender::create([
                'gender' => $gender,
            ]);
        };
    }
}
