<script>
import { NutritionEntity } from "@/nutritionManagement/model/nutrition.entity.js";

export default {
  name: "nutrition-card",
  props: {
    nutrition: NutritionEntity
  },
  methods: {
    editNutrition() {
      this.$emit('update', this.nutrition);
    },
    deleteNutrition() {
      this.$emit('delete', this.nutrition.id);
    }
  }
}
</script>

<template>
  <pv-card class="custom-card" style="width: 50rem; height: 17rem; overflow: hidden">
    <template #content>
      <div class="card-content">
        <div class="image-container">
          <img :alt="nutrition.name" :src="nutrition.photoUrl" class="card-image" />
        </div>
        <div class="card-details">
          <h2 class="card-title">{{ nutrition.name }}</h2>
          <p> Ingredientes: {{ nutrition.description }}</p>
          <div class="card-button">
            <pv-button label="Editar" class="button-editar" @click="editNutrition" />
            <pv-button label="Eliminar" class="button-eliminar" @click="deleteNutrition" />
          </div>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.button-editar {
  margin-right: 5%;
  background-color: #C5D951FF;
  margin-top:1.5em;
  color: #ffffff;
  font-size: 18px;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.button-editar:hover{
  background-color: #8BB500D6;
  transform: scale(1.1);
}
.button-eliminar {
  background-color: firebrick;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  margin-right:0.5em;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.button-eliminar:hover{
  background-color: #7e1313;
  transform: scale(1.1);
}
.custom-card {
  margin-right: 2%;
  margin-bottom: 1%;
}

.card-content {
  align-items: center;
  font-family: "Nunito", sans-serif;
  display: flex;
}

img {
  width: 290px;
  height: 236px;
}

.image-container {
  margin-right: 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
  font-size: 25px;
}
</style>