<?php

namespace Database\Seeders;

use App\Models\Product\ColorTone;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $color_tones = [
            ['name' => 'Red', 'hex_code' => '#FF0000',],
            ['name' => 'Green', 'hex_code' => '#008000',],
            ['name' => 'Blue', 'hex_code' => '#0000FF',],
            ['name' => 'Brown', 'hex_code' => '#8B4513',],
            ['name' => 'Gold', 'hex_code' => '#FFD700',],
            ['name' => 'Silver', 'hex_code' => '#C0C0C0',],
            ['name' => 'Black', 'hex_code' => '#010101',],
            ['name' => 'White', 'hex_code' => '#F1F1F1',],
            ['name' => 'Orange', 'hex_code' => '#FF4D00',],
            ['name' => 'Pink', 'hex_code' => '#FC6C85',],
        ];


        foreach ($color_tones as $tone) {
            ColorTone::create($tone);
        }
    }
}
