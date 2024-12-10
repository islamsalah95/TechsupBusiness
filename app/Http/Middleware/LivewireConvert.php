<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LivewireConvert
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        // Skip middleware for Livewire routes
        if ($request->is('livewire/*')) {
            return $next($request);
        }



        // Get the locale from the URL
        $locale = $request->segment(1);

        if (!in_array($locale, config('app.locales'))) {
            // Redirect to the fallback locale if the URL segment is invalid
            return redirect(url('/' . config('app.fallback_locale') . $request->getRequestUri()));
        }

        // Set the application locale
        app()->setLocale($locale);

        return $next($request);
    }
    
}
