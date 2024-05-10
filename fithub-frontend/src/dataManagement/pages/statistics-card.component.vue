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
    <h1 class="tittle-statistics">{{ $t('statistics.title') }}</h1>
    <pv-divider class="divider"></pv-divider>
    <div class="statistics-container">
      <img class="img-settings" src="https://github.com/aksoonie/fithub-db/assets/134560396/7c74d96b-7ea1-4c3f-9d00-c55efc7fecc1" alt="img-settings">
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
  </div>
</template>

<style scoped>
.data-container {
  max-width: 600px;
  background-color: rgba(191, 185, 185, 0.38);
  border-radius: 1.5rem;
  padding: 1.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.divider{
  margin: auto auto 3em;
  width:90%;
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
.statistics-container {
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