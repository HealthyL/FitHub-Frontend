<script>
import {DataManagementApiService} from "@/dataManagement/services/dataManagement-api.service.js";

export default {
  name: "settings-card",
  title: "Configuration",
  data() {
    return {
      dataManagementApiService: null,
      objectiveOptions: [],
      weight:null,
      height:null,
      objective:null,
      users: []
    }
  },
  created() {
    this.dataManagementApiService = new DataManagementApiService();
    this.fetchObjectiveOptions();
    this.fetchUserData();
  },
  methods: {
    async fetchObjectiveOptions() {
      try {
        const response = await this.dataManagementApiService.getObjectives();
        this.objectiveOptions = response.data;
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    },
    async fetchUserData() {
      try {
        const { data } = await this.dataManagementApiService.getDataUsers();
        this.weight = data[0].weight;
        this.height = data[0].height;
        this.objective=data[0].objective;
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    },
  }
};
</script>
<template>
  <h1 class="titulo-settings">Configuracion de datos</h1>
  <pv-divider class="divider"></pv-divider>
  <div class="settings">
    <img class="img-settings" src="https://github.com/aksoonie/fithub-db/assets/134560396/7c74d96b-7ea1-4c3f-9d00-c55efc7fecc1" alt="img-settings">
    <pv-card class="data-container">
      <template #title>Mis datos</template>
      <template #content class="objective-content">
        <p class="objective-text">Objetivo </p>
        <pv-dropdown class="dropdown-objective" v-model="objective" :options="objectiveOptions" optionLabel="name" placeholder="Selecciona un objetivo" /><br>
        <div class="datos-user-number flex-auto">
          <label for="weight-label" class="block mb-2"> Peso </label>
          <pv-input-number class="input-number" v-model="weight" inputId="weight-label" mode="decimal" showButtons :min="35.30" :max="200" decimalSeparator="." />
        </div>
        <div class="datos-user-number flex-auto">
          <label for="height-label" class="block mb-2"> Altura </label>
          <pv-input-number class="input-number" v-model="height" inputId="height-label" mode="decimal" showButtons :min="130" :max="200"/>
        </div>
      </template>
      <template #footer>
        <div class="button-update">
          <pv-button  class="botoncito" label="Actualizar" />
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.data-container{
  width:40%;
  max-width: 600px;
  background-color: rgba(191, 185, 185, 0.38);
  border-radius: 1.5rem;
  padding:2em;
  display: flex;
  justify-content: center;
}
.divider{
  margin:auto;
  margin-bottom:3em;
  width:90%;
}
.settings {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-settings {
  width:30%;
  flex: 0 0 auto;
  margin-right: 4em;
}
.dropdown-objective {
  background: white;
  padding: 2px;
  border-radius: 10px;
  margin-bottom: 1rem;
}
.datos-user-number{
  margin-bottom: 1rem;
}
.button-update{
  display: flex;
  justify-content: center;
}
.botoncito{
  background-color: #c5d951;
}


@media screen and (max-width: 768px) {
  .settings {
    flex-direction: column;
  }
  .img-settings {
    margin-right: 0;
    margin-bottom: 1em;
  }
  .data-container {
    width: 80%;
    padding: 1em;
  }
}
</style>
