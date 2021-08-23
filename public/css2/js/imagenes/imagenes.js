var Img='http://localhost/Digitales/public/';
var urlImagenes=Img+'apiImagenes';
var UrlFotos = Img + 'apiImagenes';

new Vue({

	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},


	el:'#imagenes',
	created:function(){
		this.getCategoria();
	},

	data:{
		imagenes:[],
		nombre:'',
		fecha:'',
		foto:'',
		preview:'',
		auxId:'',
		// buscar:''
	},

	methods:{
		alSeleccionar(event){
			this.foto=event.target.files[0];
			// console.log(this.foto);
			this.preview=URL.createObjectURL(this.foto)
		},
		getCategoria:function(){
			this.$http.get(urlImagenes)
			.then(function(json){
				this.imagenes=json.data;
			}).catch(function(json){
				console.log(json);
			});
		},

		cargarFoto:function()
		{
			var data = new FormData();
			data.append('foto',this.foto);
			data.append('nombre',this.nombre);
			data.append('fecha',this.fecha);


			var config={
				header:{'Content-Type':'image/jpg'}
			}

			this.$http.post(UrlFotos,data,config)
			.then(function(json){
				alert('Cambios Aplicados Correctamente');
				this.getArticulo();
				$('#datos').modal('hide');
				//Recarga la página window.location.reload();
				window.location.reload();
			})
			.catch(function(json){
				console.log(json)
			})
		},

		eliminarImagen:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar La Información?")
			if(resp==true)
			{
				this.$http.delete(urlImagenes + '/' + id)
				.then(function(json){
				this.getCategoria();
				});
			}
			
		},

		// actualizarImagen:function(id){
		// 	// crear un json 
		// 	var Img={
				
		// 		nombre:this.nombre,
		// 		fecha:this.fecha,
		// 		foto:this.foto,

		// 			  }
		//     console.log();

		// 	this.$http.patch(urlImagenes + '/' + id,Img)
		// 	.then(function(json){
		// 		this.getCategoria();
		// 		this.limpiar();
		// 	})
		// },

		// editarImagen:function(id){
		// 	this.$http.get(urlImagenes + '/' + id)
		// 	.then(function(response){
		// 		this.nombre=response.data.nombre;
		// 		this.fecha= response.data.fecha;
		// 		this.foto= response.data.foto;
		// 		console.log(response);
		// 	});
		// },

		guardarImagen:function(){
			var data = new FormData();
			data.append('nombre',this.nombre);
			data.append('fecha',this.fecha);
			data.append('foto',this.foto);

			var config={
				header:{'Content-Type':'image/jpg'}
			}

			this.$http.post(UrlFotos,data,config)
			.then(function(json){
				
			})
			.catch(function(json){
				// console.log(json);
				alert('IMAGEN GUARDADA');
				window.location.reload();
			})

		},

	// 	computed:{
	// 	filtroImg:function(){
	// 		return this.imagenes.filter((img)=>{
	// 			return img.nombre.match(this.buscar.trim()) ||  
	// 				img.nombre.toLowerCase()
	// 				.match(this.buscar.trim().toLowerCase());
	// 		});
	// 	},
	// },

	}

});