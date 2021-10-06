<template>
    <div class="separatuTurno">
        <div class="card text-center">
            <div class="card-header section-title">
                Nuestra Agenda
            </div>
            <div class="card-body section-body">

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col h-100">
                        <div class="card">
                            <img src="images/octubre.jpg" class="card-img-top" alt="semipermanente">
                            <div class="card-body">
                                <h5 class="card-title">Agenda tu cita</h5>
                                <p class="card-text">De acuerdo a la disponibilidad de turnos agenda tu cita</p>
                            </div>
                            <div class="d-grid gap-2">
                                <router-link to="/" class="btn btn-action">Volver a la página principal </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>