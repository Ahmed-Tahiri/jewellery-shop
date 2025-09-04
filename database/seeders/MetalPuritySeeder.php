<?php

namespace Database\Seeders;

use App\Models\Product\MetalPurity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MetalPuritySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $purities = [
            '24K',
            '22K',
            '21K',
            '18K',
            '14K',
            '10K',
            '9K',
            '18K White Gold',
            '14K White Gold',
            '10K White Gold',
            '18K Rose Gold',
            '14K Rose Gold',
            '10K Rose Gold',
            '999 Fine Silver',
            '958 Britannia Silver',
            '925 Sterling Silver',
            '800 Silver',
            '950 Platinum',
            '900 Platinum',
            '950 Palladium',
            '500 Palladium',
            'Pure Titanium (99.2%)',
            'Titanium Alloy (90–95%)',
            'Tungsten Carbide (85–95%)',
            '316L Stainless Steel (Jewellery Grade)'
        ];

        foreach ($purities as $purity) {
            MetalPurity::create(['purity' => $purity]);
        }
    }
}
