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
                    <Servicio id="modal-2"
                        :src="foto2"
                        title="Uñas Acrílicas"
                        shortDescription="Las uñas acrílicas son una mezcla de polvo y monómero líquido que se combina en una masa, se da forma a las uñas con un cepillo y luego se seca al aire libre.
                                Es una forma artificial de extender tus uñas, agregar fuerza y grosor."
                        fullDescription="Las uñas acrílicas son una mezcla de polvo y monómero líquido que se combina en una masa, se da forma a las uñas con un cepillo y luego se seca al aire libre.
                                Es una forma de extender las uñas, agregar fuerza, longitud y grosor.
                                La manicura para uñas acrílicas se puede realizar mediante puntas o moldes las cuales se
                                adhieren a la uña. Algunas de sus ventajas es que puedes reconstruir las uñas rotas y mordidas fácilmente para llevarlas siempre
                                perfectas. Protege las uñas naturales de los efectos dañinos de los esmaltes y otros agentes, solo si lo
                                realizas y retiras correctamente, el mantenimiento de este procedimiento se realiza cada 15 a 20 días, dependiendo del crecimiento de tu uña. 
                                Algunas desventajas de poner uñas acrílicas es que si no te realizas un buen procedimiento, puede provocar infecciones, afectar el crecimiento de la uña natural.
                                Muchos expertos recomiendan otorgar descansos de una a dos semanas para volver a poner las uñas postizas.
                                Como siempre es importante que estos procedimientos los realices con un profesional capacitado. "
                        />

                        <Servicio id="modal-3"
                            :src="foto3"
                            title="Uñas en Gel"
                            shortDescription="Las uñas en gel por lo general consisten en cepillar capas de esmalte en las uñas
                                    naturales y se curan con una lámpara UV"
                            fullDescription="Aunque las uñas de gel y acrílicas pueden proporcionar resultados similares, existen diferencias clave con cada estilo de uñas.
                            Las uñas en gel por lo general consisten en cepillar capas de esmalte en las uñas naturales y se curan con una lámpara UV.
                            Una vez completadas, estas suelen durar alrededor de 14 días sin astillarse, hacia el final de este período, estas comenzarán a pelarse o levantarse en las esquinas.
                            
                            Una gran ventaja es que el esmaltado dura mucho más que con los esmaltes tradicionales, tiene un acabado perfecto y evita que las uñas se quiebren."
                        
                        />

                        <Servicio id="modal-4"
                            :src="foto4"
                            title="Manicure Tradicional"
                            shortDescription="Es el arreglo de manos y uñas tradicional, y a pesar de durar menos no maltrata tanto las capas superficiales de la uña"
                            fullDescription="Par el manicure tradicional, se comienza cortando las uñas de acuerdo al gusto del cliente,luego se liman y se limpian a profundida las uñas de las manos, haciendo masajes, este cuidado de las uñas hace lucir unas manos con aspecto bonito, limpio y suave.
                            Existen varios tipos:
                            -Manicura francesa inversa, que resulta muy elegante y que apuesta por pintar de color blanco lo que es la zona de la base de la uña.
                            -Manicura americana, que opta porque las uñas luzcan de forma natural y neutra. Eso sin pasar por alto que adquieren una apariencia redondeada y habitualmente se presentan en tonos marfil.
                            -Manicura espejo. Esta es una de las últimas tendencias que han aparecido y lo ha hecho gracias a las redes sociales. En concreto, en ella las uñas se pintan en negro, en cromo y con brillo.
                            Ventajas: no maltrata tanto las primeras capas de las uñas ya que se puede quitar facilmente con un quitaesmaltes.
                            Desventajas: Poca duración.  "
                        
                        />
                        <Servicio id="modal-5"
                            :src="foto5"
                            title="Pedicure"
                            shortDescription="Tratamiento cosmético superficial de las uñas de los pies. Este tratamiento, no trata exclusivamente de las uñas de los pies, sino el cuidado integral de los pies."
                            fullDescription="El cuidado de tus pies. La función principal de una pedicura profesional es limpiar los pies en profundidad e hidratarlos.
                            Primero se cortan las uñas, se remueven las cutículas y se elimina el exceso de piel.
                            Aunque en líneas generales, la pedicura se especializa en el cuidado de los pies, podemos elegir diferentes tipos de pedicura.
                            Pedicura regular, permite eliminar la piel muerta y ciertas afecciones de la piel como callos y callosidades. Gracias a esta pedicura podemos prevenir ciertas enfermedades que afectan a las uñas como es el caso de las uñas encarnadas. Este tratamiento consiste en remojar los pies en un
                            recipiente que contiene agua caliente y sales, y luego frotar los pies con una piedra pómez a fín de eliminar la piel muerta de la zona del pie. Por último se aplica una crema hidratante y se masajea la pantorrilla y el pie.
                            Pedicura spa, este tratamiento es más largo y más costoso que la pedicura regular. La pedicura spa consiste en sumergir los pies en la cera de parafina, dejar que la cera se enfríe y luego desprender el producto. Se busca eliminar las células muertas de la piel. La función es exfoliar los pies, eliminar la piel muerta y por último humectar los pies y masajearlos.
                            Pedicura de piedra, permite relajar y ejercitar los músculos. En este tipo de pedicura las piedras calientes se frotan debajo del pie a fin de relajar los músculos. Se suele completar la sesión con masajes con aceite esenciales.
                            Ventajas: Mejorar la textura de la piel y disminuir la callosidad. Ayuda a desinflamar, drenar vlíquidos retenidos y liberar toxinas del cuerpo. Evita uñas encarnadas.Hidrata la piel. "
                        
                        />
                    </div>
                <div>
                    <router-link to="/portafolioServicios" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
                </div>
            </div>   
        </div> 
        
    </div> 
</template>

<script>
import Servicio from "@/components/Servicio.vue";
export default {
    components: { Servicio },
    data(){
        return {
            foto1: require("@/assets/images/semipermanente2.jpg"),
            foto2: require("@/assets/images/acrilicas.png"),
            foto3: require("@/assets/images/engel.png"),
            foto4: require("@/assets/images/manicure2.jpg"),
            foto5: require("@/assets/images/pedicure.jpg"),
    }
}
}
</script>