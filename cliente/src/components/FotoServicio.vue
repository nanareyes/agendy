<template>

    <div class="card h-100" style="width: 18rem;">
        <img :src="src" class="card-img-top" alt="...">

        <div class="card-body">
            <p class="card-text">{{description}}</p>
        </div>
    </div>




</template>

<script>
export default {
    name: 'FotoServicio',
    props: {
        src: String,
        description: String,
    },
}
</script>

