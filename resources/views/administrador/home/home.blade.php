@extends('layouts.adminlte')
@section('titulo','home')
@section('contenido')

<div class="row">
	<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
		<h3><p class="font-italic">Menú de Contenido</p></h3>
	</div>
</div>

<div class="row">

            <div class="col-lg-4 col-xs-6">
              <!-- small box -->
              <div class="small-box bg-blue">
                <div class="inner">
                  <p class="font-italic">Lista de Usuarios</p>
                </div>
                <div class="icon">
                  <i class="ion ion-bag"></i> 
                </div>
                <a href="#" class="small-box-footer"><p class="font-italic">Usuarios</p><i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>

            <div class="col-lg-4 col-xs-6">
              <!-- small box -->
              <div class="small-box bg-blue">
                <div class="inner">
                  <p class="font-italic">Solicitudes</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
                <a href="solicitudsa" class="small-box-footer"><p class="font-italic">Solicitudes</p><i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div><!-- ./col -->

            <div class="col-lg-4 col-xs-6">
              <!-- small box -->
              <div class="small-box bg-blue">
                <div class="inner">
                  <p class="font-italic">Solicitudes Pendientes</p>
                </div>
                <div class="icon">
                  <i class="ion ion-pie-graph"></i>
                </div>
                <a href="#" class="small-box-footer"><p class="font-italic">Solicitudes</p><i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div><!-- ./col -->
</div>

@endsection
@push('scripts')