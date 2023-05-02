<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PredmetController;
use App\Http\Controllers\LekcijaController;
use App\Http\Controllers\CasController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LekcijaPredmetController;
use App\Http\Controllers\LekcijaCasUserController;
use App\Http\Controllers\PredmetLekcijaController;
use App\Http\Controllers\API\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('predmeti', PredmetController::class)->only(['index', 'show']);
Route::resource('lekcije', LekcijaController::class)->only(['index', 'show']);
Route::resource('predmet/{id}/lekcije', LekcijaPredmetController::class)->only(['index']);
Route::resource('lekcija/{id}/predmet', PredmetLekcijaController::class)->only(['index']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::resource('casovi', CasController::class)->only(['index', 'show', 'store', 'destroy']);
Route::resource('users', UserController::class)->only(['index', 'show', 'update']);
Route::resource('users/{id}/cas', LekcijaCasUserController::class)->only(['index']);