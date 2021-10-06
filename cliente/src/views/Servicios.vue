<template>
    <div class="servicios">
    <div class="card text-center">
            <div class="card-header section-title">
                Bienvenido a Nuestro Portafolio de Servicios
            </div>
            <div class="card-body navigations">

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col h-100">
                        <div class="card">
                            <img src="images/uñassemipermanente2.jpg" class="card-img-top" alt="semipermanente">
                            <div class="card-body">
                                <h5 class="card-title">Maquillaje semipermanente</h5>
                                <p class="card-text">La manicura semipermanente es un maquillaje en uñas con esmaltado
                                    de larga duración, el cual puede ser aplicado en uñas naturales o artificiales..</p>
                            </div>
                            <router-link to="/semipermanente" class="btn btn-action  btn-lg" tabindex="-1" role="button" aria-disabled="true">Ver más</router-link>
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="images/uñas.png" class="card-img-top" alt="acrilicas">
                            <div class="card-body">
                                <h5 class="card-title">Uñas acrílicas</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <router-link to="/acrilicas" class="btn btn-action  btn-lg" tabindex="-1" role="button" aria-disabled="true">Ver más</router-link>
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="images/uñas3.png" class="card-img-top" alt="gel">
                            <div class="card-body">
                                <h5 class="card-title">Uñas en gel</h5>
                                <p class="card-text"> Las uñas en gel por lo general consisten en cepillar capas de
                                    esmalte en las uñas
                                    naturales y se curan con una lámpara UV.</p>
                            </div>
                            <router-link to="/gel" class="btn btn-action  btn-lg" tabindex="-1" role="button" aria-disabled="true">Ver más</router-link>
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="images/manicure2.jpg" class="card-img-top" alt="manicure">
                            <div class="card-body">
                                <h5 class="card-title">Manicure</h5>
                                <p class="card-text">Este decorado a pesar de durar menos no maltrata tanto las capas
                                    supersificiales de la uña.</p>
                            </div>
                            <router-link to="/manicure" class="btn btn-action  btn-lg" tabindex="-1" role="button" aria-disabled="true">Ver más</router-link>
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="card">
                            <img src="images/pedicure.jpg" class="card-img-top" alt="pedicure">
                            <div class="card-body">
                                <h5 class="card-title">Pedicure</h5>
                                <p class="card-text">Tratamiento cosmético superficial de las uñas de los pies. Este
                                    tratamiento, no trata exclusivamente de las uñas de los pies, sino el cuidado
                                    integral de los pies..</p>
                            </div>
                            <router-link to="/pedicure" class="btn btn-action  btn-lg" tabindex="-1" role="button" aria-disabled="true">Ver más</router-link>
                        </div>
                    </div>
                </div>
                <router-link to="/portafolioServicios" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
            </div>
        </div>
    </div>
</template>