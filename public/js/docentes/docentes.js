var route= document.querySelector("[name=route]").value;
// var Sal="http://localhost/GestionDeSalas/public/"
var urlDoc=route + '/apiDocentes';
new Vue({
	
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	el:'#docentes',
	data:{
		docentes:[],
		cedula:'',
		nombre:'',
        apellidop:'',
        apellidom:'',
        nivelestudio:'',
        profesion:'',
        foto:'',
		buscar:'',
		
	},

	created:function(){
		this.getDoc();
	},

	methods:{
		getDoc:function(){
			this.$http.get(urlDoc)
			.then(function(json){
				this.docentes=json.data
			});
		},

		guardarDoc:function(id){
			this.$http.get(urlDoc + '/' + id)
			.then(function(json){
				this.cedula=json.data.cedula;
				this.docentes=json.data.docentes;
			});
		},

		eliminarDoc:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlDoc + '/' + id)
				.then(function(json){
				this.getDoc();
				});
			}
			
		},

		agregarDoc:function(){
			var rec={
				cedula:this.cedula,
				nombre:this.docentes,
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
		filtroDoc:function(){
			return this.docentes.filter((x)=>{
				return x.docentes.match(this.buscar.trim()) ||
					x.docentes.toLowerCase()
					 .match(this.buscar.trim().toLowerCase());
	});
	},
	},

});
