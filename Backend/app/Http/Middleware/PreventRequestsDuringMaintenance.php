<!-- app/Http/Middleware/PreventRequestsDuringMaintenance.php -->

<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PreventRequestsDuringMaintenance
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
        if (app()->isDownForMaintenance()) {
            return response()->view('errors.503', [], Response::HTTP_SERVICE_UNAVAILABLE);
        }

        return $next($request);
    }
}

