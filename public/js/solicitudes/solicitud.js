var route= document.querySelector("[name=route]").value;
var urlSol= route + '/apiSolicitud';

new Vue({
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	el:'#solicitud',
	data:{
		// buscar:'',
		solicitudes:[],
		id_solicitud:'',
		// cedula:'',
		id_espacio:'',
		fecha_solicitud:'',
		// fecha_solicitada:'',
		// fecha_autorizacion:'',
		titulo_actividad:'',
		detalle_actividad:'',
		// aprobado:'',
		// activa:'',
		// clave_grupo:'',
		clave_asignatura:'',
		participantes:'',
		// tipo_solicitud:'',

	},
	created:function(){
		this.getSol();
	},

	methods:{
		getSol:function(){
			this.$http.get(urlSol)
			.then(function(json){
				this.solicitudes=json.data
				console.log(json.data);
			});
		},
	}
});