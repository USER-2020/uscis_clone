<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLocaleFromRequest
{
    public function handle(Request $request, Closure $next)
    {
        // lee ?lang=es o usa el de sesión
        $lang = $request->query('lang', session('lang', 'en'));

        if (!in_array($lang, ['en', 'es'])) {
            $lang = 'en';
        }

        app()->setLocale($lang);
        session(['lang' => $lang]);

        return $next($request);
    }
}