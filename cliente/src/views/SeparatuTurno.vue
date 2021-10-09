<template>
    <div class="agenda">
    <div class="card text-center">
                <div class="card-header section-title">
                    Nuestra Agenda
                </div>
                <div class="card-body navigations">

                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col h-100">
                            <div class="card">
                                <img src="@/assets/images/calendar.png" class="card-img-top px-3" alt="semipermanente">
                                <div class="card-body">
                                    <h5 class="card-title">Manos y Pies</h5>
                                    <p class="card-text">La manicura semipermanente es un maquillaje en uñas con esmaltado
                                        de larga duración, el cual puede ser aplicado en uñas naturales o artificiales..</p>
                                </div>
                                <div class="d-grid gap-2">
                                    <router-link to="/" class="btn btn-action">Separa tu turno</router-link>
                                    <router-link to="/" class="btn btn-action">Volver a la página principal</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>