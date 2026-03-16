<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    // Display a listing of the patients
    public function index()
    {
        $patients = Patient::all();
        return view('patients.index', compact('patients'));
    }

    // Show the form for creating a new patient
    public function create()
    {
        return view('patients.create');
    }

    // Store a newly created patient in storage
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'gender' => 'required|in:male,female,other',
            'date_of_birth' => 'nullable|date', 
            'phone' => 'nullable|string|max:15',
            'email' => 'nullable|email|max:100',
            'address' => 'nullable|string',
            'blood_group' => 'nullable|in:A+,A-,B+,B-,AB+,AB-,O+,O-',
        ]);
        Patient::create($request->all());
        return redirect()->route('patients.index')->with('success', 'Patient created successfully.');
    }
    // Display the specified patient
    public function show(Patient $patient)
    {
        return view('patients.show', compact('patient'));
    }
    // Show the form for editing the specified patient
    public function edit(Patient $patient)
    {
        return view('patients.edit', compact('patient'));
    }   
    // Update the specified patient in storage
    public function update(Request $request, Patient $patient)
    {
        $request->validate([
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'gender' => 'required|in:male,female,other',
            'date_of_birth' => 'nullable|date',
            'phone' => 'nullable|string|max:15',
            'email' => 'nullable|email|max:100',
            'address' => 'nullable|string',
            'blood_group' => 'nullable|in:A+,A-,B+,B-,AB+,AB-,O+,O-',
        ]);

        $patient->update($request->all());
        return redirect()->route('patients.index')->with('success', 'Patient updated successfully.');
    }
    // Remove the specified patient from storage
    public function destroy(Patient $patient)
    {
        $patient->delete();
        return redirect()->route('patients.index')->with('success', 'Patient deleted successfully.');
    }   
}

