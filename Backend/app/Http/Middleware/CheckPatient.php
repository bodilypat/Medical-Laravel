<!-- app/Http/Middleware/CheckPatient.php -->

<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;

class CheckPatient
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if the user is authenticated and has the 'patient' role
        if (auth()->check() && auth()->user()->role === 'patient') {
            return $next($request);
        }

        // If not a patient, redirect to home or show an error
        return redirect('/')->with('error', 'You do not have patient access.');
    }
}


