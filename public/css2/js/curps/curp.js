var curp="http://localhost/Digitales/public/"
var urlCurp=curp + '/apiCurp';
new Vue({
	el:'#curp',
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	data:{
		curps:[],
		clave:'',
		nombre:'',
		fecha_inscripcion:'',
		folio:'',
		entidad:'',
		buscar:'',
		
	},

	created:function(){
		this.getCurp();
	},

	methods:{
		getCurp:function(){
			this.$http.get(urlCurp)
			.then(function(json){
				this.curps=json.data
			});
		},

		guardarCurp:function(id){
			this.$http.get(urlCurp + '/' + id)
			.then(function(json){
				this.clave=json.data.clave;
				this.nombre=json.data.nombre;
				this.fecha_inscripcion=json.data.fecha_inscripcion;
				this.folio=json.data.folio;
				this.entidad=json.data.entidad;
			});
		},

		eliminarCurp:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlCurp + '/' + id)
				.then(function(json){
				this.getCurp();
				});
			}
			
		},

		agregarCurp:function(){
			var curp={
				clave:this.clave,
				nombre:this.nombre,
				fecha_inscripcion:this.fecha_inscripcion,
				folio:this.folio,
				entidad:this.entidad
			};

				this.clave='';
				this.nombre='';
				this.fecha_inscripcion='';
				this.folio='';
				this.entidad='';

			this.$http.post(urlCurp,curp)
			.then(function(response){
				this.getCurp();
				alert('Se Ha Agregado Con Exito');
			});

		},

		actualizarCurp:function(id){
			// crear un json 
			var curp={
				clave:this.clave,
				nombre:this.nombre,
				fecha_inscripcion:this.fecha_inscripcion,
				folio:this.folio,
				entidad:this.entidad
					  }
		    console.log();

			this.$http.patch(urlCurp + '/' + id,curp)
			.then(function(json){
				this.getCurp();
				this.limpiar();
			})
		},

		limpiar:function(){
				
				this.clave='';
				this.nombre='';
				this.fecha_inscripcion='';
				this.folio='';
				this.entidad='';
			
		}

	},

	computed:{
		filtroCurp:function(){
			return this.curps.filter((x)=>{
				return x.nombre.match(this.buscar.trim()) ||
					x.nombre.toLowerCase()
					.match(this.buscar.trim().toLowerCase());
			});
		},
	},

});
