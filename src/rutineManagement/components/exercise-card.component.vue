<script>
import { ExerciseEntity } from "@/rutineManagement/model/exercise.entity.js";

export default {
  name: "exercise-card",
  props: {
    exercise: ExerciseEntity
  }
}
</script>

<template>
  <pv-card class="card-content">
    <template #header>
      <img :alt="exercise.name" :src="exercise.photoUrl">
    </template>
    <template #content>
      <h3>{{ exercise.name }}</h3>
      <p class="flex align-content-start flex-wrap mt-4">
        Sets: {{ exercise.sets }}
      </p>
      <p class="flex align-content-start flex-wrap mt-4">
        Reps: {{ exercise.reps }}
      </p>
      <p class="flex align-content-start flex-wrap mt-4">
        Weight: {{ exercise.weight }}
      </p>
    </template>
  </pv-card>
</template>

<style scoped>
.card-content {
  font-family: "Nunito", sans-serif;
  width: 100%;
  max-width: 350px;
  margin: 1em;
  align-items: center;
  border-radius: 2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: grey;
}

img {
  width: 100%;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
}
</style>