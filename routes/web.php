<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CaseStatusController;
use App\Http\Controllers\Admin\ClientCaseController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function (Request $request) {
    // ?lang=en o ?lang=es
    $lang = $request->query('lang', 'en');

    if (!in_array($lang, ['en', 'es'])) {
        $lang = 'en';
    }

    app()->setLocale($lang);

    return Inertia::render('Welcome', [
        'locale' => $lang,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role_or_permission:admin|access dashboard'])->name('dashboard');

Route::middleware(['auth', 'verified', 'role_or_permission:admin|access dashboard'])
    ->prefix('dashboard')
    ->name('admin.')
    ->group(function () {
        Route::resource('client-cases', ClientCaseController::class);
    });

Route::get('/case-status', function () {
    return Inertia::render('CaseStatus', [
        'locale' => app()->getLocale(),
    ]);
})->name('case.status');

Route::post('/case-status/lookup', CaseStatusController::class)->name('case-status.lookup');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
