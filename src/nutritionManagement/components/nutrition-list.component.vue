<script>
import LunchComponent from "./lunch.component.vue";
import LunchSection from "./lunch.component.vue";
import DinnerComponent from "./dinner.component.vue";
import DinnerSection from "./dinner.component.vue";
import BreakfastComponent from "./breakfast.component.vue";
import BreakfastSection from "./breakfast.component.vue";
import {NutritionApiService} from "@/nutritionManagement/services/nutrition-api.service.js";

export default {
  name: "nutrition-list",
  components: { DinnerSection, DinnerComponent, BreakfastSection, BreakfastComponent,LunchComponent,LunchSection},
  data() {
    return {
      title: "nutrition",
      desayunos: [],
      almuerzos: [],
      cenas: [],

      desayunos_Service: null,
      almuerzos_Service: null,
      cenas_Service: null,

      activeSection: 'desayunos'
    }
  },
  created() {
    this.desayunos_Service = new NutritionApiService();
    this.almuerzos_Service = new NutritionApiService();
    this.cenas_Service = new NutritionApiService();

    this.fetchNutritions();
  },
  methods: {
    fetchNutritions() {
      this.desayunos_Service.getAllDesayunos()
          .then(response => {
            this.desayunos = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      this.almuerzos_Service.getAllAlmuerzos()
          .then(response => {
            this.almuerzos = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      this.cenas_Service.getAllCenas()
          .then(response => {
            this.cenas = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },
    changeSection(section) {
      this.activeSection = section;
    }
  }
}
</script>
<template>
  <h1>Alimentacion</h1>
  <div class="card flex justify-content-left flex-wrap gap-3">
    <!--utilizamos el evento @click-->
    <pv-button label="Desayunos" text raised
               :class="activeSection === 'desayunos' ? 'selected-button' : 'unselected-button'"
               @click="changeSection('desayunos')"/>
    <pv-button label="Almuerzos" severity="secondary" text raised
               :class="activeSection === 'almuerzos' ? 'selected-button' : 'unselected-button'"
               @click="changeSection('almuerzos')"/>
    <pv-button label="Cenas" severity="success" text raised
               :class="activeSection === 'cenas' ? 'selected-button' : 'unselected-button'"
               @click="changeSection('cenas')"/>
  </div>
  <!-- Mostrar la sección desayunos -->
  <div v-if="activeSection === 'desayunos'" class="desayunos-content">
    <div class="desayunos-box-cards">
      <breakfast-section v-for="nutrition in desayunos" :key="nutrition.id" :nutrition="nutrition"></breakfast-section>
    </div>
  </div>
  <!-- Mostrar la sección almuerzos -->
  <div v-if="activeSection === 'almuerzos'" class="almuerzos-content">
      <div class="almuerzos-box-cards">
        <lunch-section v-for="nutrition in almuerzos" :key="nutrition.id" :nutrition="nutrition"></lunch-section>
      </div>
    <pv-button label="AGREGAR" class="button-editar" />
  </div>
  <!-- Mostrar la sección cenas -->
  <div v-if="activeSection === 'cenas'" class="cenas-content">
    <div class="cenas-box-cards">
      <dinner-section v-for="nutrition in cenas" :key="nutrition.id" :nutrition="nutrition"></dinner-section>
    </div>
  </div>
</template>

<style scoped>
.cenas-content,.desayunos-content,.almuerzos-content{
  margin-left:2%;
  font-family: "Nunito", sans-serif;
}
.cenas-box-cards,.desayunos-box-cards,.almuerzos-box-cards{
  display: flex;
  flex-wrap: wrap;
}
.button-editar{
  margin:3%;
  width:20%;
  background-color: #a1ac62;
  color: #ffffff;
  font-size: 16px; /* Tamaño de fuente más grande */
  height: auto; /* Altura automática */
}

.selected-button {
  margin-left:2%;
  background-color: #c5d951;
  color: white;
  border-radius: 20px;
  border-color: #afc148;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
}

.unselected-button {
  margin-left:2%;
  background-color: white;
  color: #b0b0b0;
  border: 2px solid #b0b0b0;
  border-radius: 20px;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  border-color: #afc148;

}

h1 {
  color: #1a1a1a;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  margin-top:2%;
}
</style>