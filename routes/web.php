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

// Vista administrador

// vista de solicitud realizadas
Route::view('solicitudes','administrador.solicitudes.solicitudsa');

// Vista docentes

//peticiones get para llamar la vista del formulario solicitudsala
Route::get('solicitudsala', 'apiSolicitudsalaController@index')->name('solicitudsala.solicitudsala');
//ruta cancelar puesto en button cancelar en formulario
Route::get('cancelar/{ruta}', function($ruta) {
    return redirect()->route('solicitudsala.solicitudsala')->with('cancelar','Acción Cancelada!');
})->name('cancelar');

//petición post éste es la que permite guardar las solicitudes de sala
Route::post('solicitudsala','apiSolicitudsalaController@store');

//Apis vistas
Route::apiResource('apiSol','apiSolicitudsalaController');
Route::apiResource('apiSolicitud','apiSolicitudController');
