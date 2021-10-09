<template>
    <div class="galeria">
        <div class="card text-center">
            <div class="card-header section-title">
                Galería de Fotos
            </div>
            <div class="card-body section-body">
                <FotoServicio src="decorado.jpg" />

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <!-- <div class="col h-100">
                        <div class="card">
                            <div v-for="servicio in servicios" :key="servicio.id" class="card-img-top">
                                <img :src="getPictureProducto(servicio.imagen)" class="card-img-top">
                            </div>
                        </div> 
                    </div> -->
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado.jpg" class="card-img-top  px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado2.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado3.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado4.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado5.jpg" class="card-img-top  px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado6.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado7.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado8.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado9.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado12.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado11.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado13.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado14.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado15.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado16.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado17.jpg" class="card-img-top px-3 py-3" >
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado18.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado19.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado21.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado22.jpg" class="card-img-top px-3 py-3">
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="@/assets/images/decorado23.jpg" class="card-img-top px-3 py-3" >
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <router-link to="/portafolioServicios" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
            </div>
        </div>

    </div>
</template>

<script>
import FotoServicio from "@/components/FotoServicio.vue";
export default {
  components: { FotoServicio },
    // data () {
    //     return {
    //         productos: [],
    //         carrito: [],
    //         total_carrito: 0
    //     }
    // },
    // created () {
    //     this.cargarProductos()
    // },

    methods: {
        getPictureProducto (nombre_archivo) {
            var image = require.context('@/assets/images/', false, /\.jpg$|\.png$/)
            return image('./' + nombre_archivo)
        }
            }
    }



</script>