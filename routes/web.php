<?php

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

Route::get('/', function () {
    return view('welcome');
});

//Vista De Adminlte
Route::view('administrador','layouts.adminlte');
Route::view('docentes', 'layouts.adminltedocentes');

//Vista De inicio principal
Route::view('/','principal.principal');


//Vista de inicio
Route::view('bienvenida','layouts.inicio');
Route::view('inicio','principal.principal');


//Vista administrador

Route::view('recurso','administrador.recursos.recursos');
Route::view('home','administrador.home.home');
Route::view('sala','administrador.salas.salas');

//Vista docentes
Route::view('configuracion','docentes.configuracion.configuracion');
Route::view('solicitudes','docentes.historialsolicitudes.historialsolicituds');
Route::view('panelsolicitudes','docentes.paneldesolicitudes.panelsolicituds');
Route::view('solicitudrecurso','docentes.solicitudes.solicitudrecurso');
Route::view('solicitudsala','docentes.solicitudes.solicitudsala');
Route::view('calendario','docentes.calendario.calendario');

//Apis Vistas
Route::apiResource('apiSalas','apiSalasController');