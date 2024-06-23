<script>
import {Nutrition} from "../model/nutrition.entity.js";

export default {
  name: "lunch-section",
  props: {
    nutrition : Nutrition,
  }
}
</script>

<template>
  <pv-card class="custom-card" style="width: 50rem; height: 13rem; overflow: hidden">
    <template #content>
      <div class="card-content">
        <div class="image-container">
          <img :alt="nutrition.title" :src="nutrition.image" class="card-image" />
        </div>
        <div class="card-details">
          <h2 class="card-title">{{ nutrition.title }}</h2>
          <p>{{ nutrition.descripcion }}</p>
          <a :href="nutrition.link">Ver mÃ¡s</a>
        </div>
      </div>
    </template>
  </pv-card>
</template>


<style scoped>
.custom-card {
  margin-top: 3rem;
  margin-right: 2%;
  flex-wrap: wrap;
}
.card-image{
  width: 10rem;
  height: 100%;
}
.card-content {
  font-family: "Nunito", sans-serif;
  display: flex;
  align-items: center;
}

.image-container {
  margin-right: 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

</style>