<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sala;
use App\Solicitud;

class apiSolicitudsalaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $sala = Sala::all();
        return view('docentes.solicitudes.solicitudsala', ['sala'=>$sala]);
        
    }
    public function solicitud()
    {
        return view('docentes.solicitudes.solicitudsala');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $solicitud = new Solicitud;
        $solicitud->id_solicitud=$request->get('id_solicitud');
        $solicitud->id_espacio=$request->get('id_espacio');
        $solicitud->clave_asignatura=$request->get('clave_asignatura');
        $solicitud->titulo_actividad=$request->get('titulo_actividad');
        $solicitud->participantes=$request->get('participantes');
        $solicitud->fecha_solicitud=$request->get('fecha_solicitud');
        $solicitud->detalle_actividad=$request->get('detalle_actividad');
        $solicitud->save();
        return redirect()->route('solicitudsala.solicitudsala')->with('datos','Solicitud Enviado!');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
