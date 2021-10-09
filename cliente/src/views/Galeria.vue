<template>
    <div class="galeria">
        <div class="card text-center">
            <div class="card-header section-title">
                Galería de Fotos
            </div>
            <div class="card-body section-body">
                <div class="row row-cols-1 row-cols-md-5 g-4">
                    <div v-for="foto in fotos" class="col" :key="foto.id">
                        <FotoServicio :src="foto.src" :description="foto.description" />
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
    data() {
        // Metodo 1. Manual, cada foto se incluye con su src y descripcion
        // return {
        //     fotos: [
        //         {
        //             src: require("@/assets/images/decorado.jpg"),
        //             description: "Lindas uñas acrílicas",
        //         },
        //         {
        //             src: require("@/assets/images/decorado2.jpg"),
        //             description: "Otras uñas acrílicas",
        //         },
        //     ],
        // }
        // Metodo 2. Ciclo
        // Se define el array donde se van a cargar las fotos
        const fotos = [];
        // Ciclo que comienza en 1 y termina en 26
        for (let i=1; i<= 26; i++) {
            // Cada ingreso al ciclo, en el array adiciona un objeto
            // que contiene la ruta de la foto y la descripcion. Adicionalmente
            // se asigna un id para que sirva como key en el v-for
            fotos.push({
                id: i,
                src: require(`@/assets/images/decorado${i}.jpg`),
                description: `Decorado de uñas ${i}`,
            });
        }
        // Se retorna el array de fotos para que pueda ser usado en el v-for
        return {
            fotos
        };
    },
}



</script>