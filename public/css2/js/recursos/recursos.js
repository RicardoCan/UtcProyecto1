var rec="http://localhost/GestionDeSalas/public/"
var urlRecursos=rec + '/apiRecursos';
new Vue({
	
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	el:'#recursos',
	data:{
		recursos:[],
		id_recurso:'',
		recurso:'',
	
	},

	created:function(){
		this.getRecursos();
	},

	methods:{
		getRecursos:function(){
			this.$http.get(urlRecursos)
			.then(function(json){
				this.recursos=json.data
			});
		},

		guardarRec:function(id){
			this.$http.get(urlRecursos + '/' + id)
			.then(function(json){
				this.id_recurso=json.data.id_recurso;
				this.recurso=json.data.recursos;
		
			});
		},

		eliminarRec:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlRecursos + '/' + id)
				.then(function(json){
				this.getRecursos();
				});
			}
			
		},

		agregarRec:function(){
			var rec={
				id_recurso:this.id_recurso,
				recurso:this.recurso
			};

				this.id_recurso='';
				this.recurso='';

			this.$http.post(urlRecursos,rec)
			.then(function(response){
				this.getRecursos();
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

			this.$http.patch(urlRecursos + '/' + id,rec)
			.then(function(json){
				this.getRecursos();
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
