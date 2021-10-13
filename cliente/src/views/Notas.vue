<template>
    <div>
        <h1>Notas</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Fecha</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in notas" :key="index">
            <th scope="row">{{item._id}}</th>
            <td>{{item.nombre}}</td>
            <td>{{item.descripcion}}</td>
            <td>{{item.date}}</td>
            <td>
              <b-button class="btn-warning btn-sm mx-2" @click="activarEdicion(item._id)">Actualizar</b-button>
              <b-button class="btn-danger btn-sm mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      notas: [],
    };
  },
  created(){
    this.listarNotas();
  },
  methods:{
    listarNotas(){
      this.axios.get('notas')
      .then((response) => {
        // console.log(response.data)
        this.notas = response.data;
      })
      .catch((e)=>{
        console.log('error' + e);
      })
    }
  }
};
</script>