<!-- app/Http/Middleware/LogRequests.php  # Optional logging -->
<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;

class LogRequests
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
        // Log the request details (method, URL, timestamp)
        \Log::info('Incoming Request', [
            'method' => $request->getMethod(),
            'url' => $request->fullUrl(),
            'timestamp' => now()->toDateTimeString(),
        ]);

        return $next($request);
    }
}

