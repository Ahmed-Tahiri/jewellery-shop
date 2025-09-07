<?php

namespace Database\Seeders;

use App\Models\Product\ProductFinish;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductFinishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $finishes = [
            'High Polish',
            'Matte',
            'Brushed',
            'Hammered',
            'Sandblasted',
            'Stippled',
            'Florentine',
            'Etched',
            'Oxidized',
            'Diamond-Cut',
            'Two-Tone',
        ];

        foreach ($finishes as $finish) {
            ProductFinish::create(['name' => $finish]);
        }
    }
}
