<?php

namespace App\Console\Commands;

use App\Models\Admin;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:create 
                            {email : Admin email} 
                            {password : Admin password} 
                            {first_name=Super : Admin first name}
                            {last_name=Admin : Admin last name}';

    protected $description = 'Create a new admin (only if none exists)';

    public function handle(): int
    {
        if (Admin::exists()) {
            $this->error('An admin already exists. You cannot create another one.');
            return self::FAILURE;
        }

        Admin::create([
            'first_name' => $this->argument('first_name'),
            'last_name' => $this->argument('last_name'),
            'email' => $this->argument('email'),
            'password' => Hash::make($this->argument('password'))
        ]);

        $this->info('Admin created successfully.');
        return self::SUCCESS;
    }
}
