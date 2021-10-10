<template>
    <div class="servicios">
    <div class="card text-center">
            <div class="card-header section-title">
                Bienvenido a Nuestro Portafolio de Servicios
            </div>
            <div class="card-body section-body h-100">
                <div class="row row-cols-1 row-cols-md-5 g-4"> 
                    <Servicio id="modal-1"
                        :src="foto1"
                        title="Maquillaje semipermanente"
                        shortDescription="La manicura semipermanente es un maquillaje en uñas con esmaltado
                                de larga duración, el cual puede ser aplicado en uñas naturales o artificiales.."
                        fullDescription="La manicura semipermanente es un maquillaje en uñas con esmaltado de larga
                        duración, el cual puede ser aplicado en uñas naturales, artificiales, de gel o acrílicas.

                        Ventajas: duración, brillo y salud de la uñas,dura hasta 14 días intacta, es fácil de quitar sin limar, con productos a base de acetona.
                        La única desventaja es que tendrás que llevar 14 días el mismo color."
                    />
                </div> 
            </div>  
        </div> 
        
    </div> 
</template>

<script>

import MiComponente from "@/components/MiComponente.vue";
export default {
    components: { Servicio },
    data(){
        return {
            foto1: require("@/assets/images/semipermanente2.jpg"),

        }
    }
}
</script>
