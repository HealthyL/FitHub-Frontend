<script>
import {DataManagementApiService} from "@/dataManagement/services/dataManagement-api.service.js";
import {fitExplorerEntity} from "@/dataManagement/model/fitExplorer.entity.js";

export default {
  name: "user-data-card",
  data() {
    return {
      users: [],
      objectives: [],
      selectedUser: null,
      objectiveOptions: [],
      name:null,
      age: null,
      email: null,
      objective: null,
      weight: null,
      height: null
    };
  },
  created() {
    this.fetchData();
  },
  methods:{
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

        // Get objectives data
        const objectivesResponse = await dataService.getObjectives();
        this.objectives = objectivesResponse.data;
        this.objectiveOptions = this.objectives.map(objective => objective.name);

        // Assuming the first user is the selected one for demonstration purposes
        if (this.users.length > 0) {
          this.selectedUser = this.users[0];
          this.objective = this.selectedUser.objectiveId;
          this.weight = this.selectedUser.weight;
          this.height = this.selectedUser.height;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async updateData() {
      try {
        const dataService = new DataManagementApiService();
        const updatedUserData = {
          ...this.selectedUser,
          weight: this.weight,
          height: this.height,
          objectiveId: this.objective,

        };
        await dataService.updateUserData(this.selectedUser.id, updatedUserData);
        console.log("Data updated successfully");
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  },
  watch: {
    objective(newObjective) {
      if (this.selectedUser) {
        this.selectedUser.objectiveId = newObjective;
      }
    },
    weight(newWeight) {
      if (this.selectedUser) {
        this.selectedUser.weight = newWeight;
      }
    },
    height(newHeight) {
      if (this.selectedUser) {
        this.selectedUser.height = newHeight;
      }
    }
  }
}
</script>

<template>
  <pv-card class="data-container">
    <template #title>
      <h3>{{ $t('settings.my-data') }}</h3>
    </template>
    <template #content class="objective-content">
      <div class="datos-user-number">
        <label class="title-statistics">{{ $t('settings.weight') }}</label><br>
        <pv-input-number class="input-number" v-model="weight" inputId="weight-label" mode="decimal" showButtons :min="35.30" :max="200" decimalSeparator="." />
      </div>
      <div class="datos-user-number">
        <label class="title-statistics">{{ $t('settings.height') }}</label><br>
        <pv-input-number class="input-number" v-model="height" inputId="height-label" mode="decimal" showButtons :min="130" :max="200"/>
      </div>
      <div class="dropdown-objective">
        <label class="title-statistics">{{ $t('settings.objective') }}</label> <br>
        <pv-dropdown v-model="objective" :options="objectiveOptions" :placeholder="objective"></pv-dropdown>
      </div>

    </template>
    <template #footer>
      <div class="button-update">
        <pv-button class="botoncito" @click="updateData">{{ $t('settings.update') }}</pv-button>
      </div>
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
.dropdown-objective {
  background: white;
  padding: 2px;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.datos-user-number {
  margin-bottom: 1rem;
}

.button-update {
  display: flex;
  justify-content: center;
}

.botoncito {
  background-color: #c5d951;
}
@media screen and (max-width: 768px) {
  .data-container {
    width: 80%;
    padding: 1em;
  }
}
</style>