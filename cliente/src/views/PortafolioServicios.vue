<template>
    <div class="portafolioServicios">
    <div class="card text-center">
            <div class="card-header section-title">
                Nuestros Servicios
            </div>
            <div class="card-body navigations">

                <div class="row row-cols-1 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/images/semipermanente.jpg" class="card-img-top h-100 pt-3" alt="semipermanente">
                            <div class="card-body">
                                <h5 class="card-title">Manos y Pies</h5>
                                <p class="card-text">La manicura es el cuidado de tus manos y pies a través de diferentes técnicas de esmaltado, el cual puede ser aplicado en uñas naturales o artificiales.</p>
                            </div>
                            <router-link to="/servicios" class="btn btn-action  btn-lg" tabindex="-1" role="button"
                                    aria-disabled="true">Ver más</router-link>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card h-100">
                            <img src="@/assets/images/unasgaleria.jpg" class="card-img-top h-100 pt-3 py-3" alt="acrilicas">
                            <div class="card-body">
                                <h5 class="card-title">Nuestra Galería</h5>
                                <p class="card-text">En este espacio podrás encontrar una hermosa y amplia variedad de estilos y decorados para tu manicure o pedicure.</p>
                            </div>
                            <router-link to="/galeria" class="btn btn-action  btn-lg" tabindex="-1" role="button" aria-disabled="true">Ver más</router-link>

                        </div>
                    </div>
                    <div class="col ">
                        <div class="card h-100">
                            <img src="@/assets/images/LOGO 1.svg" class="card-img-top h-100" alt="calendario">
                            <div class="card-body">
                                <h5 class="card-title">Agenda</h5>
                                <p class="card-text">En este espacio podrás reservar en tu agenda, la cita que tanto necesitas para el cuidado de tus manos y pies.</p>
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