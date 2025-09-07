<?php

namespace Database\Seeders;

use App\Models\Product\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = ['draft', 'active', 'in active', 'coming soon'];
        foreach ($statuses as $status) {
            Status::create(['status' => $status]);
        }
    }
}
