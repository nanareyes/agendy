<template>
    <div class="portafolioServicios">
    <div class="card text-center">
            <div class="card-header section-title">
                Página principal
            </div>
            <div class="card-body navigations">

                <div class="row row-cols-1 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/images/flowers.jpg" class="card-img-top h-100 pt-3" alt="semipermanente">
                            <div class="card-body">
                                <h5 class="card-title">Esta es tu sección de Servicios</h5>
                                <p class="card-text">Aquí podrás configurar la presentación de tus servicios y precios</p>
                            </div>
                            <router-link to="/servicios" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                    aria-disabled="true">Ver más</router-link>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card h-100">
                            <img src="@/assets/images/esmaltes.jpeg" class="card-img-top h-100 pt-3 py-3" alt="acrilicas">
                            <div class="card-body">
                                <h5 class="card-title"> Galería</h5>
                                <p class="card-text">En este espacio podrás configurar y guardar una amplia galería de fotos con todos los estilos de los servicios que ofreces.</p>
                            </div>
                            <router-link to="/galeria" class="btn btn-action  btn-lg" tabindex="-1" role="button" aria-disabled="true">Ver más</router-link>

                        </div>
                    </div>
                    <div class="col ">
                        <div class="card h-100">
                            <img src="@/assets/images/LOGO 1.svg" class="card-img-top h-100" alt="calendario">
                            <div class="card-body">
                                <h5 class="card-title">Agenda</h5>
                                <p class="card-text">En este espacio podrás configurar tu agenda.</p>
                            </div>
                            <router-link to="/agenda" class="btn btn-action  btn-lg" tabindex="-1" role="button" aria-disabled="true">Ver más</router-link>
                        </div>
                    </div>
                </div>
                <router-link to="/" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
            </div>
        </div>

    </div>
</template>