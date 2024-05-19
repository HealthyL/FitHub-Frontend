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
      <template #title>{{ $t('settings.my-data') }}</template>
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
      <template #content>
        <h1 class="statistics-card-title">{{ $t('statistics.subtitle') }}</h1>
        <template v-if="statistics">
          <ul class="statistics-list">
            <li>
              <label class="title-statistics">{{ $t('statistics.proteins') }}</label> <label class="text-statistics">{{statistics.proteins}}</label>
            </li>
            <li>
              <label class="title-statistics">{{ $t('statistics.calories') }}</label> <label class="text-statistics">{{statistics.calories}}</label>
            </li>
            <li>
              <label class="title-statistics">{{ $t('statistics.fats') }}</label> <label class="text-statistics">{{statistics.fats}}</label>
            </li>
            <li>
              <label class="title-statistics">{{ $t('statistics.carbohydrates') }}</label> <label class="text-statistics">{{statistics.carbohydrates}}</label>
            </li>
            <li>
              <label class="title-statistics">{{ $t('statistics.satured-fats') }}</label> <label class="text-statistics">{{statistics.saturated_fats}}</label>
            </li>
          </ul>
        </template>
        <template v-else>
          {{ $t('statistics.disabled') }}
        </template>
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
  margin: auto auto 3em;
  width:90%;
}
.settings {
  display: flex;
  justify-content: center;
  align-items: center;
}

.statistics-card-title {
  color: #c5d951;
}
.statistics-list{
  list-style-type: none;
  font-size:18px;
}
.title-statistics {
  text-align: right;
  display: inline-block;
  color: #c5d951;
  width: 150px;
}
.text-statistics {
  text-align: left;
  display: inline-block;
  margin-left: 10px;
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
