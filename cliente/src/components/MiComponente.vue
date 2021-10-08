<template>
    <div class="container">
        
<!--    <div class="container">
            {{productos}}
        </div> "con esto puedo mostrar en pantalla el array de productos o de cualquier variable-->
        <div class="container" id="ropa">
            <div v-for="servicio in preciosmanosyPies" :key="servicio.id">
                <h1>Servicio: {{servicio.nombre}} </h1>
                <h2>Precio: {{ servicio.precio }} </h2>
                <button type="button" @click="mostrarPrecioAcumulado(servicio.precio)">Agregar</button>
            </div>
        </div>
        <br>
    
        <div class="container">
            <h3> <b>PRECIO TOTAL = </b>{{ precioAcumulado }} </h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            servicios: [
                {
                    id: 1,
                    nombre: 'Acrílicas',
                    precio: 55000,
                    imagen: 'acrilicas.jpg',
                    descripcion: 'Uñas en acrílico con maquillaje de larga duración'
                },
                {
                    id: 2,
                    nombre: 'Semipermanente',
                    precio: 38000,
                    imagen: 'semipermanente.jpg',
                    descripcion: 'Maquillaje de larga duración en tus uñas naturales'
                },
                {
                    id: 3,
                    nombre: 'Gel',
                    precio: 45000,
                    imagen: 'engel.jpg',
                    descripcion: 'Uñas en gel con maquillaje de larga duración'
                },
                {
                    id: 3,
                    nombre: 'Manicure Tradicional',
                    precio: 15000,
                    imagen: 'manicure.jpg',
                    descripcion: 'Manicure tradicional con esmaltes convencionales de larga duración'
                },
                {
                    id: 3,
                    nombre: 'Pedicure',
                    precio: 15000,
                    imagen: 'pedicure.jpg',
                    descripcion: 'Pedicure con maquillaje de uñas'
                }
            ],
            precioAcumulado: 0
        }
    },
    methods: {
        mostrarPrecioAcumulado (precioServicio) {
        
            this.precioAcumulado = this.precioAcumulado + precioProducto
        },
        
    },
    created () {
        this.servicios = [
                {
                    id: 1,
                    nombre: 'Acrílicas',
                    precio: 55000
                },
                {
                    id: 2,
                    nombre: 'Semipermanente',
                    precio: 38000
                },
                {
                    id: 3,
                    nombre: 'Gel',
                    precio: 45000
                },
                {
                    id: 4,
                    nombre: 'Manicure Tadicional',
                    precio: 15000
                },
                {
                    id: 5,
                    nombre: 'Pedicure',
                    precio: 15000
                }
            ]
        console.log('Ejecuta created')
    },
    mounted () {
        console.log('Ejecuta mounted')
        // this.enviarCliente()
    },
    
}
</script>
<style scoped>
    .estilo-tarjeta {
        padding: 5px;
        border: solid;
        border-radius: 15px;
        background-color: orange;
        margin: 10px;
    }
</style>