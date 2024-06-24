<script>
import { ExerciseApiService } from "@/rutineManagement/services/exercise-api.service.js";
import ExerciseCard from "@/rutineManagement/components/exercise-card.component.vue";
import { RutineEntity } from "@/rutineManagement/model/rutine.entity.js";
import { ExerciseEntity } from "@/rutineManagement/model/exercise.entity.js";

export default {
  name: "exercises-card-list",
  components: {
    ExerciseCard,
  },
  data() {
    return {
      exercises: [],
      exercisesService: new ExerciseApiService(),
      rutineId: null,
      rutineOptions: []
    }
  },
  created() {
    this.fetchRutineOptions();
    this.fetchExercises();
  },
  methods: {
    async fetchRutineOptions() {
      try {
        const response = await this.exercisesService.getRutine();
        this.rutineOptions = response.data.map
        (rutineData => new RutineEntity(
            rutineData.id, rutineData.name));
      } catch (error) {
        console.error('Error fetching rutine data:', error);  // Error handling
      }
    },

    async fetchExercises() {
      try {
        const response = await this.exercisesService.getExercises();
        this.exercises = response.data.map(exerciseData =>
            new ExerciseEntity(exerciseData.id, exerciseData.name,
                exerciseData.photoUrl,
                exerciseData.sets, exerciseData.reps, exerciseData.weight,
                exerciseData.rutineId));
      } catch (error) {
        console.error('Error fetching exercise data:', error);  // Error handling
      }
    },
    resetFilter() {
      this.rutineId = null;
    }
  },
  computed: {
    filteredExercises() {
      if (this.rutineId !== null) {
        const filtered =
            this.exercises.filter(exercise =>
                exercise.rutineId === this.rutineId);
        console.log('Filtered Exercises:', filtered);
        return filtered;
      }
      return this.exercises.filter(exercise => exercise.rutineId === 1);
    },
    selectedRutine() {
      if (this.rutineId !== null) {
        return this.rutineOptions.find(option => option.id === this.rutineId);
      }
      return this.rutineOptions.find(option => option.id === 1);
    }
  }
}
</script>

<template>
  <h1 class="titulo-settings">Rutinas</h1>
  <pv-divider class="divider"></pv-divider>
  <div class="filters">
    <!-- Botones para seleccionar la rutina -->
    <div class="button-container">
      <pv-button class="buttons" v-for="(option, index) in rutineOptions"
                 :key="option.id"
                 @click="rutineId = option.id">
        Día {{ index + 1 }}
      </pv-button>
    </div>
  </div>
  <h2 class="subtittleRutine" v-if="selectedRutine">
    Día {{ rutineOptions.indexOf(selectedRutine) + 1 }}: {{ selectedRutine.name }}
  </h2>
  <div class="product-card-list">
    <exercise-card
        v-for="exercise in filteredExercises"
        :key="exercise.id"
        :exercise="exercise"
    />
  </div>
</template>

<style scoped>
.subtittleRutine{
  font-family: "Nunito", sans-serif;
  align-items: center;
  color: #a6b644;
  margin-left: 43%;
  font-size: 29px;
  width: auto;
}
.buttons{
  font-family: "Nunito", sans-serif;
  background-color: #ffffff;
  border: 1px solid black; /* Define el grosor y color del borde */
  color: black;
  font-size: 16px;
  height: auto;
  margin-left: 5%;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  border-radius: 2em;
  width: 6em;
}
.buttons:hover{
  background-color: #d1d1d1;
  transform: scale(1.1);
}
.button-container{
  font-family: "Nunito", sans-serif;
  display: flex;
  justify-content: center;
  margin-bottom: 1%;
  width: auto;
}
.titulo-settings {
  font-family: "Nunito", sans-serif;
  margin-left: 3em;
  color: #c5d951;
}
.divider {
  margin: auto auto 3em;
  width: 90%;
}
.product-card-list {
  margin-bottom: 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.filters{

  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  align-items: center;
}
</style>