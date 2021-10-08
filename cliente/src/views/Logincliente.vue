<template>
    <div class="logincliente">
    <div class="card text-center">
                <div class="card-header section-title">
                    Bienvenido
                </div>
                <div class="card text-center">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" router-link to="/galeria">Galería</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" router-link to="/servicios">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" router-link to="/agenda">Agenda</a>
                        </li>
                        </ul>
                    <div class="back">
                        <router-link to="/" class="btn btn-action">Salir</router-link>
                    </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Somos Agendy</h5>
                        <p class="card-text">Este espacio está pensado especialmente para ti!!!
                        Aquí podrás acceder a una galería de imagenes y servicios que podrás enseñar o compartir con tus clientes,
                        a demás de poder separar tu horario y tiempo de trabajo a través de una agenda virtual.
                        </p>
                    </div>
                    </div>

                <div class="card-body section-body">

                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col h-100">
                            <div class="card">
                                <img src="@/assets/images/semipermanente.jpg" class="card-img-top" alt="semipermanente" style="height: 370px;">
                                <div class="card-body">
                                    <h5 class="card-title">Mi galería de imágenes</h5>
                                    <p class="card-text">En este espacio podrás incluir todas las imágenes para construir tu galería personalziada de tu portafolio de servicios, los cuales podrán ser vistos por tus clientes.</p>
                                </div>
                                <router-link to="/galeria" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                        aria-disabled="true">Ingresar</router-link>
                            </div>
                        </div>
                        <div class="col h-100">
                            <div class="card">
                                <img src="@/assets/images/uñas.png" class="card-img-top" alt="acrilicas" style="height: 370px;">
                                <div class="card-body">
                                    <h5 class="card-title">Mis servicios</h5>
                                    <p class="card-text">Aquí podras construir el portafolio de servicios, precios, promociones.</p>
                                </div>
                                <router-link to="/acrilicas" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                        aria-disabled="true">Ingresar</router-link>
                            </div>
                        </div>
                        <div class="col h-100">
                            <div class="card">
                                <img src="@/assets/images/calendar.png" class="card-img-top" alt="gel" style="height: 370px;">
                                <div class="card-body">
                                    <h5 class="card-title">Agenda</h5>
                                    <p class="card-text"> En este espacio podrás configurar tu agenda, para que tus clientes puedan escoger el día y hora del servicio. </p>
                                </div>
                                <router-link to="/gel" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                        aria-disabled="true">Ingresar</router-link>
                            </div>
                        </div>
                        
                    </div>
                
                </div>
            </div>
    </div>
</template>