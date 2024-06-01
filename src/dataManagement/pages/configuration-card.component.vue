<script>
import {fitExplorerEntity} from "@/dataManagement/model/fitExplorer.entity.js";
import {DataManagementApiService} from "@/dataManagement/services/dataManagement-api.service.js";
import UserDataCard from "@/dataManagement/components/user-data-card.component.vue";
import StatisticsCard from "@/dataManagement/components/statistics-card.component.vue";

export default {
  name: "settings-card",
  components: {StatisticsCard, UserDataCard},
  title: "Configuration",
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
  <h1 class="titulo-settings">{{ $t('settings.data-settings') }}</h1>
  <pv-divider class="divider"></pv-divider>
  <div class="settings">
    <user-data-card></user-data-card>
    <statistics-card></statistics-card>
  </div>
</template>

<style scoped>
.divider {
  margin: auto auto 3em;
  width: 90%;
}

.settings {
  display: flex;
  justify-content: center;
  align-items: center;
}
.titulo-settings {
  margin-left: 3em;
  color: #c5d951;
}

@media screen and (max-width: 768px) {
  .settings {
    flex-direction: column;
  }
}
</style>