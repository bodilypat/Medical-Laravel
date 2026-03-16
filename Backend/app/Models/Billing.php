<!-- 
 Schema::create('billing', function (Blueprint $table) {
            $table->id('bill_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('appointment_id');
            $table->decimal('total_amount', 10, 2);
            $table->enum('payment_status', ['Pending', 'Paid'])->default('Pending');
            $table->enum('payment_method', ['Cash', 'Card', 'Insurance'])->default('Cash');
            $table->date('billing_date')->nullable();

            $table->foreign('patient_id')->references('patient_id')->on('patients')->onDelete('cascade');
            $table->foreign('appointment_id')->references('appointment_id')->on('appointments')->onDelete('cascade');
        }); 
--> 
<!-- app/Models/Billing.php -->

<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    use HasFactory;

    protected $primaryKey = 'bill_id';
    public $timestamps = false;

    protected $fillable = [
        'patient_id',
        'appointment_id',
        'total_amount',
        'payment_status',
        'payment_method',
        'billing_date',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id', 'patient_id');
    }

    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'appointment_id', 'appointment_id');
    }
}

