<?php

namespace App\Console\Commands;

use App\Models\Admin;
use Illuminate\Console\Command;

class DeleteAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:delete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete Admin';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $admin = Admin::first();

        if (!$admin) {
            $this->error('No admin found. Please run admin:create first.');
            return self::FAILURE;
        }
        $admin->delete();
        $this->info('Admin deleted successfully.');
        return self::SUCCESS;
    }
}
