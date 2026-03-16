<!-- app/Models/Prescription.php -->
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    use HasFactory;

    protected $primaryKey = 'prescription_id';
    public $timestamps = false;

    protected $fillable = [
        'record_id',
        'medicine_id',
        'dosage',
        'frequency',
        'duration',
    ];

    public function medicalRecord()
    {
        return $this->belongsTo(MedicalRecord::class, 'record_id', 'record_id');
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class, 'medicine_id', 'medicine_id');
    }
}

