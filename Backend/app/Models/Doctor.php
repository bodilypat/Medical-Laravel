<!-- app/Models/Doctor.php -->
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $primaryKey = 'doctor_id';
    public $timestamps = false;

    protected $fillable = [
        'first_name',
        'last_name',
        'specialization',
        'phone',
        'email',
        'consultation_fee',
        'joined_at',
    ];
}

