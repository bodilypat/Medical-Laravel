<!-- app/Models/Appointment.php -->
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $primaryKey = 'appointment_id';
    public $timestamps = false;

    protected $fillable = [
        'patient_id',
        'doctor_id',
        'appointment_date',
        'appointment_time',
        'status',
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class, 'doctor_id', 'doctor_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id', 'patient_id');
    }
}

