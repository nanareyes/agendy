<template>
  <div>
    <div class="card h-100 pb-2">
      <img :src="src" class="card-img-top pb-2" />
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ shortDescription }}</p>
      </div>
      <b-button v-b-modal.modal-2 class="btn-action"> Ver Más</b-button>
    </div>

    <b-modal :id="id" :title="title" cancel-disabled="true">
      <div class="card">
        <img :src="src" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ fullDescription }}</p>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Servicio",
  props: {
    id: String,
    src: String,
    title: String,
    shortDescription: String,
    fullDescription: String,
  },
};
</script>
