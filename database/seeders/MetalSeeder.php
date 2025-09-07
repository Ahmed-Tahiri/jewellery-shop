<?php

namespace Database\Seeders;

use App\Models\Product\Metal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MetalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $metals = ['Gold', 'Silver', 'White Gold', 'Bronze', 'Titanium', 'Brass', 'Rose Gold', 'Palladium', 'Glass', 'Ceramic',   'Tungsten', 'Stainless Steel'];
        foreach ($metals as $metal) {
            Metal::create(['name' => $metal]);
        }
    }
}
