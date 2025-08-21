<?php

namespace App\Console\Commands;

use App\Models\Admin;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class UpdateAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'admin:update 
                            {--email= : New email} 
                            {--password= : New password} 
                            {--first_name= : New first name}
                            {--last_name= : New last name} ';

    protected $description = 'Update the existing admin credentials';

    public function handle(): int
    {
        $admin = Admin::first();

        if (!$admin) {
            $this->error('No admin found. Please run admin:create first.');
            return self::FAILURE;
        }

        if ($this->option('email')) {
            $admin->email = $this->option('email');
        }

        if ($this->option('password')) {
            $admin->password = Hash::make($this->option('password'));
        }

        if ($this->option('first_name')) {
            $admin->first_name = $this->option('first_name');
        }
        if ($this->option('last_name')) {
            $admin->last_name = $this->option('last_name');
        }

        $admin->save();

        $this->info('Admin updated successfully.');
        return self::SUCCESS;
    }
}
