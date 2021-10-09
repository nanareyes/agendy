<template>
  <div>
    <div class="card pb-2">
      <img :src="src" class="card-img-top" />
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ shortDescription }}</p>
      </div>
      <b-button v-b-modal.modal-1 class="btn-action"> Ver Más</b-button>
    </div>

    <b-modal id="modal-1" :title="title" cancel-disabled="true">
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
    src: String,
    title: String,
    shortDescription: String,
    fullDescription: String,
  },
};
</script>
