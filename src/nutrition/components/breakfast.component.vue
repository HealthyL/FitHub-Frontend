<script>
import {Nutrition} from "/src/nutrition/model/nutrition.entity.js";

export default {
  name: "breakfast-section",
  props: {
    nutrition : Nutrition,
  }
}
</script>
<template>
  <pv-card class="custom-card" style="width: 50rem; height: 17rem; overflow: hidden">
    <template #content>
      <div class="card-content">
        <div class="image-container">
          <img :alt="nutrition.title" :src="nutrition.image" class="card-image" />
        </div>
        <div class="card-details">
          <h2 class="card-title">{{nutrition.title}}</h2>
          <p> Ingredientes: {{ nutrition.ingredientes }}</p>
          <div class="card-button">
            <pv-button label="EDITAR" class="button-editar" />
            <pv-button label="ELIMINAR" class="button-editar" />
          </div>
        </div>
      </div>
    </template>
  </pv-card>
</template>


<style scoped>

.button-editar{
  margin-top:1%;
  margin-right:5%;
  background-color: #ffffff;
  border-color:black;
  color:black;
  font-size: 16px; /* Tamaño de fuente más grande */
  width: auto; /* Ancho automático */
  height: auto; /* Altura automática */
}
.custom-card {
  margin-top: 3rem;
  margin-right: 2%;
}

.card-content {
  align-items:center;
  font-family: "Nunito", sans-serif;
  display: flex;
}
img{
  width:290px;
  height:236px;
}
.image-container {
  margin-right: 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
  font-size: 25px;
}
</style>