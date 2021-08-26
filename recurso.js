var route= document.querySelector("[name=route]").value;
// var Sal="http://localhost/GestionDeSalas/public/"
var urlRec=route + '/apiRecursos';
new Vue({
	
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	el:'#recurso',
	data:{
		recursos:[],
		id_recurso:'',
		recurso:'',
		buscar:'',
		
	},

	created:function(){
		this.getRec();
	},

	methods:{
		getRec:function(){
			this.$http.get(urlRec)
			.then(function(json){
				this.recursos=json.data
			});
		},

		guardarRec:function(id){
			this.$http.get(urlRec + '/' + id)
			.then(function(json){
				this.id_recurso=json.data.id_recurso;
				this.recurso=json.data.recurso;
			});
		},

		eliminarRec:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlRec + '/' + id)
				.then(function(json){
				this.getRec();
				});
			}
			
		},

		agregarRec:function(){
			var rec={
				id_recurso:this.id_recurso,
				recurso:this.recurso,
			};

				this.id_recurso='';
				this.recurso='';

			this.$http.post(urlRec,rec)
			.then(function(response){
				this.getRec();
				alert('Se Ha Agregado Con Exito');
			});

		},

		actualizarRec:function(id){
			// crear un json 
			var rec={
				id_recurso:this.id_recurso,
				recurso:this.recurso,
					  }
		    console.log();

			this.$http.patch(urlRec + '/' + id,rec)
			.then(function(json){
				this.getRec();
				this.limpiar();
			})
		},

		limpiar:function(){
				
				this.id_recurso='';
				this.recurso='';
		}

	},

	computed:{
		filtroRec:function(){
			return this.recursos.filter((x)=>{
				return x.recurso.match(this.buscar.trim()) ||
					x.recurso.toLowerCase()
					 .match(this.buscar.trim().toLowerCase());
	});
	},
	},

});
