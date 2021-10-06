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
                                <img src="images/semipermanente.jpg" class="card-img-top" alt="semipermanente" style="height: 370px;">
                                <div class="card-body">
                                    <h5 class="card-title">Maquillaje semipermanente</h5>
                                    <p class="card-text">La manicura semipermanente es un maquillaje en uñas con esmaltado
                                        de larga duración, el cual puede ser aplicado en uñas naturales o artificiales..</p>
                                </div>
                                <router-link to="/semipermanente" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                        aria-disabled="true">Ver más</router-link>
                            </div>
                        </div>
                        <div class="col h-100">
                            <div class="card">
                                <img src="images/uñas.png" class="card-img-top" alt="acrilicas" style="height: 370px;">
                                <div class="card-body">
                                    <h5 class="card-title">Uñas acrílicas</h5>
                                    <p class="card-text">Las uñas acrílicas son una mezcla de polvo y monómero líquido que se combinan en una masa, se le da forma a las uñas con un cepillo y luego se seca al aire libre..</p>
                                </div>
                                <router-link to="/acrilicas" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                        aria-disabled="true">Ver más</router-link>
                            </div>
                        </div>
                        <div class="col h-100">
                            <div class="card">
                                <img src="images/uñas3.png" class="card-img-top" alt="gel" style="height: 370px;">
                                <div class="card-body">
                                    <h5 class="card-title">Uñas en gel</h5>
                                    <p class="card-text"> Las uñas en gel por lo general consisten en cepillar capas de esmalte en las uñas
                                        naturales y se curan con una lámpara UV. Las uñas en gel por lo general...</p>
                                </div>
                                <router-link to="/gel" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                        aria-disabled="true">Ver más</router-link>
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
                                <router-link to="/manicure" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                        aria-disabled="true">Ver más</router-link>
                            </div>
                        </div>
                        <div class="col h-100">
                            <div class="card">
                                <img src="images/pedicure2.jpg" class="card-img-top" alt="pedicure" style="height: 340px;">                            
                                <div class="card-body">
                                    <h5 class="card-title">Pedicure</h5>
                                    <p class="card-text">Tratamiento cosmético superficial de las uñas de los pies. Este
                                        tratamiento, no trata exclusivamente de las uñas de los pies...</p>
                                </div>
                                <router-link to="/pedicure" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                        aria-disabled="true">Ver más</router-link>
                            </div>
                        </div>
                        <div class="col h-100">
                            <div class="card">
                                <img src="images/LOGO-3.jpg" class="card-img-top" alt="calendario">
                                <div class="card-body">
                                    <h5 class="card-title">Agenda</h5>
                                    <p class="card-text">Luego de elegir el servicio que deseas y el decorado de tu preferencia, elige el día y la hora en que tu deseas agendar tu cita.</p>
                                </div>
                                <router-link to="/agenda" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                        aria-disabled="true">Ver más</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="back">
                        <router-link to="/" class="btn btn-action">Salir</router-link>
                    </div>
                </div>
            </div>
    </div>
</template>