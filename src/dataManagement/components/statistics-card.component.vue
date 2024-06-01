<script>
import {DataManagementApiService} from "@/dataManagement/services/dataManagement-api.service.js";
import {fitExplorerEntity} from "@/dataManagement/model/fitExplorer.entity.js";

export default {
  name: "statistics-card",
  data() {
    return {
      users: [],
      selectedUser: null,
      statistics: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const dataService = new DataManagementApiService();

        // Get users data
        const usersResponse = await dataService.getDataUsers();
        this.users = usersResponse.data.map(user => {
          // Check if statistics is an array and take the first element
          const statistics = Array.isArray(user.statistics) ? user.statistics[0] : user.statistics;
          return new fitExplorerEntity(
              user.id, user.name, user.age, user.weight, user.height, user.email, statistics, user.objectiveId
          );
        });
        // Assuming the first user is the selected one for demonstration purposes
        if (this.users.length > 0) {
          this.selectedUser = this.users[0];
          this.statistics = this.selectedUser.statistics;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    printStatistics() {
      if (this.statistics && Object.keys(this.statistics).length > 0) {
        console.log(this.statistics);
      } else {
        console.log("No existen estadísticas");
      }
    }
  },
  mounted() {
    this.printStatistics();
  }
};
</script>
<template>
  <pv-card class="data-container">
    <template #title>
      <h3>{{ $t('statistics.subtitle') }}</h3>
    </template>
    <template #content>
      <template v-if="statistics && Object.keys(statistics).length > 0" class="statistics-list">
        <div class="statistics-content" v-for="(value, name) in statistics" :key="name">
          <span class="title-statistics">{{ $t(`statistics.${name}`) }}</span>
          <span class="text-statistics">{{ value }}</span>
        </div>
      </template>
    </template>
  </pv-card>
</template>

<style scoped>
h3 {
  color: #95a53a;
}

.data-container {
  width: 40%;
  max-width: 600px;
  background-color: rgba(236, 233, 233, 0.11);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 1.5rem;
  padding: 1em;
  display: flex;
  margin: 1em;
  justify-content: center;
}

.statistics-content {
  list-style-type: none;
  display: flex;
  justify-content: left;
}

.title-statistics {
  text-align: right;
  display: inline-block;
  color: #95a53a;
  font-weight: bold;
  width: 150px;
  font-size: 22px;
  line-height: 3;
}

.text-statistics {
  line-height: 3;
  text-align: left;
  display: inline-block;
  margin-left: 10px;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .data-container {
    width: 80%;
    padding: 1em;
  }
}
</style>