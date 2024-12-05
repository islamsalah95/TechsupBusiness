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
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the request is a POST and matches the Livewire update endpoint
        if ($request->url() === 'http://127.0.0.1:8000/livewire/update') {
            // Get the current locale
            $locale = app()->getLocale();

            // Redirect to the URL with the locale prefix
            return redirect()->to("http://127.0.0.1:8000/{$locale}/livewire/update");
        }

        return $next($request);
    }
}
