<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Salas;

class apiSalasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $salas=Salas::all();
        return $salas;
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
        $salas=new Salas;
        $salas->id_espacio=$request->get('id_espacio');
        $salas->nombre=$request->get('nombre');
        $salas->cupo=$request->get('cupo');
        $salas->save();
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
        $salas=Salas::find($id);
        return $salas;
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
        $salas=Salas::find($id);
        $salas->id_espacio=$request->get('id_espacio');
        $salas->nombre=$request->get('nombre');
        $salas->cupo=$request->get('cupo');
        $salas->update();
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
        return Salas::destroy($id);
    }
}
