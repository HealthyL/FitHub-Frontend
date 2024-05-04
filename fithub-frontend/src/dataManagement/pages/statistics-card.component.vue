<script>
import {DataManagementApiService} from "@/dataManagement/services/dataManagement-api.service.js";

export default {
  name: "statistics-card",
  title: "Statistics",
  data() {
    return {
      dataManagementApiService: null,
      statistics:null,
      proteins:null,
      calories:null,
      fats:null,
      carbohydrates:null,
      saturated_fats:null,
    }
  },
  created() {
    this.dataManagementApiService = new DataManagementApiService();
    this.fetchUserStatistics();
  },
  methods: {
    async fetchUserStatistics() {
      try {
        const { data } = await this.dataManagementApiService.getDataUsers();
        this.statistics = data[0].statistics;
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    },
  }
}

</script>
<template>
  <div class="statistics">
    <h1 class="tittle-statistics">Estadística de datos</h1>
    <pv-divider class="divider"></pv-divider>
    <div class="statistics-container">
      <img class="img-settings" src="https://github.com/aksoonie/fithub-db/assets/134560396/7c74d96b-7ea1-4c3f-9d00-c55efc7fecc1" alt="img-settings">
      <pv-card class="data-container">
        <template #title>Estadísticas</template>
        <template #content class="statistics-content">
          <p class="statistics-text">
            <template v-if="statistics">
              Proteínas <label>{{statistics.proteins}}</label><br>
              Calorías {{statistics.calories}}<br>
              Grasas {{statistics.fats}}<br>
              Carbohidratos {{statistics.carbohydrates}}<br>
              Grasas Saturadas {{statistics.saturated_fats}}
            </template>
            <template v-else>
              No hay estadísticas disponibles.
            </template>
          </p>
        </template>
      </pv-card>
    </div>
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
.statistics-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-settings {
  width:30%;
  flex: 0 0 auto;
  margin-right: 4em;
}
.tittle-statistics{
  margin-left:2em;
  color:#c5d951;
}

@media screen and (max-width: 768px) {
  .statistics-container {
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