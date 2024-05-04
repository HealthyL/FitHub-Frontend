<script>
import {Nutrition} from "../model/nutrition.entity.js";

export default {
  name: "dinner-section",
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
          <h2 class="card-title">{{nutrition.title}}</h2>
          <p> Ingredientes: {{ nutrition.ingredientes }}</p>
        </div>
      </div>
    </template>
  </pv-card>
</template>


<style scoped>
.custom-card {
  margin-top: 3rem;
  margin-left: 0rem;
  margin-bottom: 3rem;
  margin-right: 60px;
  flex-wrap: wrap;
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
  font-size: 25px;
}

</style>