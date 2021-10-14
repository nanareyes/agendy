<template>
    <div class="servicios">
        <div class="card text-center">
            <div class="card-header section-title">
            Bienvenido a Nuestro Portafolio de Servicios
            </div>
            <div class="card-body section-body h-100">
                <div class="row row-cols-1 row-cols-md-5 g-4"> 
                    <div v-for="servicio in servicios" :key="servicio.id" class="card pb-3 pt-3">
                        <img class="card-img-top pb-2" :src="getPictureServicio(servicio.imagen)">
                        <div>
                            <h1 class="card-title">{{servicio.nombre}}</h1>
                            <h3 class="card-title">{{servicio.precio}}</h3>
                            <div class="card-text">
                            <p>{{servicio.descripcion}}</p>
	                        </div>
                        </div>
	                    <div id="icono">
	                        <i class="las la-cart-arrow-down estilo-icono" @click="agregarAlCarrito(servicio)"></i>
	                    </div>
                    </div>
                </div>
            </div>
            <div >
                <h1>TOTAL</h1>
                <h2 id="total_carrito">${{total_carrito}}</h2>
            </div> 
            <div>
                <router-link to="/portafolioServicios" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
            </div>
	    </div>
        
	</div>
        
</template>
<script>
//import Servicio from "@/components/Servicio.vue";
	
import axios from 'axios'
export default {
	data () {
	    return {
	        servicios: [],
	        carrito: [],
	        total_carrito: 0
	    }
	},
	created () {
	    this.cargarServicios();
	},
    methods: {
    	getPictureServicio (nombre_archivo) {
    	/* Función para cargar imágenes dinámicamente */
    	    var images = require.context('@/assets/images/', false, /\.jpg$|\.png$/)
    	    return images('./' + nombre_archivo)
    	},
    	agregarAlCarrito(servicio) {
    	    this.carrito.push(servicio)
    	    console.log(this.carrito)
    	    this.total_carrito = this.total_carrito + servicio.precio
    	    this.$swal.fire(
    	    'Servicio agregado',
    	    'Se ha agregado ' + servicio.nombre + ' al carrito de compras',
    	    'success'
    	    )
    	},
    	cargarServicios(){
    	    axios.get('http://localhost:3000/api/servicios')
    	     //promesa
    	    .then(response => {
	        let status_peticion = response.status
	        console.log(status_peticion)
	        this.servicios = response.data
	        })
	    }
    }
}
</script>

<style scoped>
.estilo-icono {
    font-size: 24px;
    border-style: outset;
    background-color: #d7b1e6;
}


</style>