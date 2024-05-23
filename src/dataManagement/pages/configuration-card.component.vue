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
      users: [],
      userId: 1,
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
    this.fetchObjectiveOptions();
    this.fetchUserData();
    this.fetchUserStatistics();
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
    async fetchUserStatistics() {
      try {
        const { data } = await this.dataManagementApiService.getDataUsers();
        this.statistics = data[0].statistics;
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    }
  }
};
</script>
<template>
  <h1 class="titulo-settings">{{ $t('settings.data-settings') }}</h1>
  <pv-divider class="divider"></pv-divider>
  <div class="settings">
    <pv-card class="data-container">
      <template #title>
        <h3>{{ $t('settings.my-data') }}</h3>
      </template>
      <template #content class="objective-content">
        <p class="objective-text">{{ $t('settings.objective') }}</p>
        <pv-dropdown class="dropdown-objective" v-model="objective" :options="objectiveOptions" optionLabel="name" :placeholder="$t('settings.select-objective')"  /><br>
        <div class="datos-user-number flex-auto">
          <label for="weight-label" class="block mb-2"> {{ $t('settings.weight') }} </label>
          <pv-input-number class="input-number" v-model="weight" inputId="weight-label" mode="decimal" showButtons :min="35.30" :max="200" decimalSeparator="." />
        </div>
        <div class="datos-user-number flex-auto">
          <label for="height-label" class="block mb-2"> {{ $t('settings.height') }} </label>
          <pv-input-number class="input-number" v-model="height" inputId="height-label" mode="decimal" showButtons :min="130" :max="200"/>
        </div>
      </template>
      <template #footer>
        <div class="button-update">
          <pv-button class="botoncito">{{$t('settings.update')}}</pv-button>
        </div>
      </template>
    </pv-card>
    <pv-card class="data-container">
      <template #title>
        <h3>{{ $t('statistics.subtitle') }}</h3>
      </template>
      <template #content>
        <template v-if="statistics" class="statistics-list">
          <p class="title-statistics">{{ $t('statistics.proteins') }}</p> <p class="text-statistics">{{statistics.proteins}}</p>
          <p class="title-statistics">{{ $t('statistics.calories') }}</p> <p class="text-statistics">{{statistics.calories}}</p>
          <p class="title-statistics">{{ $t('statistics.fats') }}</p> <p class="text-statistics">{{statistics.fats}}</p> <br>
          <p class="title-statistics">{{ $t('statistics.carbohydrates') }}</p> <p class="text-statistics">{{statistics.carbohydrates}}</p>
          <p class="title-statistics">{{ $t('statistics.satured-fats') }}</p> <p class="text-statistics">{{statistics.saturated_fats}}</p>
        </template>
        <template v-else>
          {{ $t('statistics.disabled') }}
        </template>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
h3{
  color: #95a53a;
}
.data-container{
   width: 30%;
  max-width: 600px;
  background-color: rgba(236, 233, 233, 0.11);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 1.5rem;
  padding:1em;
  display: flex;
  margin:1em;
  justify-content: center;
}

.divider{
  margin: auto auto 3em;
  width:90%;
}
.settings {
  display: flex;
  justify-content: center;
  align-items: center;
  /* para que los elementos hijos tengan la misma altura */
  align-items: stretch;
}
.statistics-list{
  list-style-type: none;
  line-height: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  line-height: 2;
}
.title-statistics {
  text-align: right;
  display: inline-block;
  color:  #95a53a;
  font-weight: bold;
  width: 150px;
  font-size:20px;
}
.text-statistics {
  text-align: left;
  display: inline-block;
  margin-left: 10px;
  font-size:20px;
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
.titulo-settings{
  margin-left:3em;
  color:#c5d951;
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
