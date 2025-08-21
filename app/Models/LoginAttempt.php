<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoginAttempt extends Model
{
    protected $fillable = [
        'identifier',
        'ip_address',
        'attempts',
        'last_attempt_at',
        'blocked_until',
        'is_successful',
    ];

    protected $dates = [
        'last_attempt_at',
        'blocked_until',
        'created_at',
        'updated_at'
    ];
    protected $casts = [
        'blocked_until' => 'datetime',
    ];
}
