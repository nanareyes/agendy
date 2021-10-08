<template>
    <div class="preciosmanosyPies">
        <div class="container div-galeria" id="galeria">
            <div class="row fila-productos">
                <div v-for="servicio in preciosmanosyPies" :key="servicio.id"  class="col-lg-4 col-md-6 col-sm-6 col-xs-12 tarjeta-producto">
                    <img class="imagen-producto" :src="getPictureProducto(servicio.imagen)">
                    <h1 class="nombre-producto">{{servicio.nombre}}</h1>
                    <h3 class="precio-producto">{{servicio.precio}}</h3>
                    <div class="descripcion-producto">
                        <p>{{servicio.descripcion}}</p>
                    </div>
                </div>
                
            </div>
        </div>    
    </div>
</template>
<script>
    export default {
        data () {
            return {
                productos: [],
                carrito: [],
                total_carrito: 0
            }
        },
        created () {
        this.cargarServicios()
        }
    }

</script>