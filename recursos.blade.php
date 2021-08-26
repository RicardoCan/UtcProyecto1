@extends('layouts.adminlte')
@section('titulo','Recursos')
@section('contenido')

<div class="row">
  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
    <h3>Gestión de Recursos</h3>
  </div>
</div>


<div id="recurso" class="container">
    <div class="row">
      <div class="col">
        <table class="table table-striped table-bordered">

        <button class="fa fa-plus-square btn btn-lg btn-warning" data-toggle="modal" data-target="#agregar"></button>

        <br>
        <br>
        
          <thead style="background-color:#207197">
            <tr>
              <th><center><p class="font-italic">No. Recurso</p></center></th>
              <th><center><p class="font-italic">Nombre Recurso</p></center></th>
              <th><center><p class="font-italic">Opciones</p></center></th>
            </tr>

          </thead>
          
            <tbody>
              <tr v-for="recurso in recursos">
                <td><center><p class="font-italic">@{{recurso.id_recurso}}</p></center></td>
                <td><center><p class="font-italic">@{{recurso.recurso}}</p></center></td>
                <!--<td><center>@{{sala.cupo}}</center></td>-->
                
                <td>
                 <center><span class="fa fa-check btn btn-xs btn-primary" data-toggle="modal" data-target="#editarRec" v-on:click="guardarRec(recurso.id_recurso)"></span>

                  <span class="fa fa-trash btn btn-xs btn-danger" v-on:click="eliminarRec(recurso.id_recurso)"></span></center>

                </td>
              </tr>

             <!-- Modal Agregar -->
    <div class="modal fade" id="agregar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header"  style="background-color:#207197">
            <!-- <center><h4 class="modal-title" id="exampleModalLabel"><strong class="color">Agregar</strong></h4></center> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="limpiar()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          
          <div>
            <div class="col-xs-12">
              

              <label><p class="font-italic">No. Recurso</p></label>
             <input type="number" name="No" v-model="id_recurso" class="form-control"><br> 

              <label><p class="font-italic">Nombre Recurso</p></label>
              <input type="text" name="Nombre Recurso" v-model="recurso" class="form-control" ><br> 

              <!--<label>Cupo</label>
              <input type="number" name="Cupo" v-model="cupo" class="form-control"><br> -->

            </div>
          </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal" v-on:click="limpiar()"><p class="font-italic">Cancelar</p></button>
            <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal" v-on:click="agregarRec(id_recurso)"><p class="font-italic">Guardar</p></button>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin de modal -->

    <!-- Modal Editar -->
    <div class="modal fade" id="editarRec" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header"  style="background-color:#207197">
            <!-- <center><h4 class="modal-title" id="exampleModalLabel"><strong class="color">Editar</strong></h4></center> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="limpiar()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          
          <div>
            <div class="col-xs-12">
              
              <label><p class="font-italic">No. Recurso</p></label>
              <input type="number" name="No" v-model="id_recurso" class="form-control" disabled=""><br> 

              <label><p class="font-italic">Nombre Recurso</p></label>
              <input type="text" name="Nombre Recurso" v-model="recurso" class="form-control"><br> 

              <!--<label>Cupo</label>
              <input type="number" name="Cupo" v-model="cupo" class="form-control"><br> -->

            </div>
          </div>

          </div>
          <div class="modal-footer">

            <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal" v-on:click="limpiar()"><p class="font-italic">Cancelar</p></button>
            <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal" v-on:click="actualizarRec(id_recurso)"><p class="font-italic">Guardar cambios</p></button>
            
           </div>
        </div>
      </div>
    </div>
    <!-- Fin de modal -->
           </tbody>
         </table>
        </div>
      </div>


@endsection
@push('scripts')
<script src="js/vue-resource.js"></script>
<script src="js/recursos/recurso.js"></script>
@endpush
<input type="hidden" name="route" value="{{url('/')}}">