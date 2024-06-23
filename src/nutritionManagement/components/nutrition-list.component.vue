<script>
import BreakfastSection from "./breakfast.component.vue";
import LunchSection from "./lunch.component.vue";
import DinnerSection from "./dinner.component.vue";
import { NutritionApiService } from "@/nutritionManagement/services/nutrition-api.service.js";

export default {
  name: "nutrition-list",
  components: { DinnerSection, BreakfastSection, LunchSection },
  data() {
    return {
      title: "nutrition",
      desayunos: [],
      almuerzos: [],
      cenas: [],

      desayunos_Service: null,
      almuerzos_Service: null,
      cenas_Service: null,


      newNutritionA: { title: '', descripcion: '', image: '', link: '' },
      newNutritionB: { title: '', ingredientes: '', image: '' },

      editNutritionId: null,
      dialogVisible: false,
      activeSection: 'desayunos'
    };
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
    },
    editNutrition(nutrition) {
      this.newNutritionB = { ...nutrition };
      this.editNutritionId = nutrition.id;
      this.dialogVisible = true;
    },
    addNutrition(){
      const newNutritionA = { ...this.newNutritionA };
      if (this.activeSection === 'almuerzos') {
        this.almuerzos_Service.addAlmuerzo(newNutritionA).then(() => this.fetchNutritions());
      }
      this.newNutritionA = { title: '',  descripcion: '',image: '', link: '' };
    },
    updateNutrition(){
      const updatedNutrition = { title: this.newNutritionA.title, descripcion: this.newNutritionA.descripcion, image: this.newNutritionA.image, link: this.newNutritionA.link };
      if (this.activeSection === 'almuerzos') {
        this.almuerzos_Service.updateAlmuerzo(this.editNutritionId, updatedNutrition).then(() => this.fetchNutritions());
      }
      this.newNutritionA = { title: '', descripcion: '', image: '', link: '' };
      this.editNutritionId = null;
    },
    saveEdit() {
      const updatedNutrition = { title: this.newNutritionB.title, ingredientes: this.newNutritionB.ingredientes, image: this.newNutritionB.image };
      if (this.activeSection === 'desayunos') {
        this.desayunos_Service.updateDesayuno(this.editNutritionId, updatedNutrition).then(() => this.fetchNutritions());
      } else if (this.activeSection === 'cenas') {
        this.cenas_Service.updateCena(this.editNutritionId, updatedNutrition).then(() => this.fetchNutritions());
      }
      this.dialogVisible = false;
      this.newNutritionB = { title: '', ingredientes: '', image: '' };
      this.editNutritionId = null;
    },
    deleteNutrition(id) {
      if (this.activeSection === 'desayunos') {
        this.desayunos_Service.deleteDesayuno(id).then(() => this.fetchNutritions());
      } else if (this.activeSection === 'cenas') {
        this.cenas_Service.deleteCena(id).then(() => this.fetchNutritions());
      }
    }
  }
};
</script>

<template>
  <h1 class="titulo-nutrition">{{ $t('toolbar.nutrition') }}</h1>
  <pv-divider class="divider"></pv-divider>
  <div class="card flex justify-content-left flex-wrap gap-3">
    <pv-button label="Desayunos" text raised :class="activeSection === 'desayunos' ? 'selected-button' : 'unselected-button'" @click="changeSection('desayunos')"/>
    <pv-button label="Almuerzos" severity="secondary" text raised :class="activeSection === 'almuerzos' ? 'selected-button' : 'unselected-button'" @click="changeSection('almuerzos')"/>
    <pv-button label="Cenas" severity="success" text raised :class="activeSection === 'cenas' ? 'selected-button' : 'unselected-button'" @click="changeSection('cenas')"/>
  </div>

  <!-- Mostrar la sección desayunos -->
  <div v-if="activeSection === 'desayunos'" class="desayunos-content">

    <!-- Dialogo para editar nutrición -->
    <pv-dialog v-model:visible="dialogVisible" modal header="Editar Nutrición" :style="{ width: '25rem' }">
      <div class="flex items-center gap-4 mb-4">
        <label for="title" class="font-semibold w-24">Título</label>
        <pv-input-text id="title" v-model="newNutritionB.title" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="ingredientes" class="font-semibold w-24">Ingredientes</label>
        <pv-input-text id="ingredientes" v-model="newNutritionB.ingredientes" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="image" class="font-semibold w-24">URL de Imagen</label>
        <pv-input-text id="image" v-model="newNutritionB.image" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-end gap-2">
        <pv-button class="button-cancelar" label="Cancelar" @click="dialogVisible = false"></pv-button>
        <pv-button class="button-guardar" label="Guardar" @click="saveEdit"></pv-button>
      </div>
    </pv-dialog>

    <div class="desayunos-box-cards">
      <breakfast-section v-for="nutrition in desayunos" :key="nutrition.id" :nutrition="nutrition"
                         @edit-nutrition="editNutrition" @delete-nutrition="deleteNutrition"></breakfast-section>
    </div>
  </div>
  <!-- Mostrar la sección almuerzos -->
  <div v-if="activeSection === 'almuerzos'" class="almuerzos-content">
    <div class="content-agregar">
      <pv-input-text class="box-agregar" v-model="newNutritionA.title" placeholder="Tittle"/>
      <pv-input-text class="box-agregar" v-model="newNutritionA.descripcion" placeholder="Description" />
      <pv-input-text class="box-agregar" v-model="newNutritionA.image" placeholder="Image URL" />
      <pv-input-text class="box-agregar" v-model="newNutritionA.link" placeholder="Link" />
    </div>
    <pv-button label="AGREGAR" class="button-agregar" @click="editNutritionId ? updateNutrition() : addNutrition()" />
    <div class="almuerzos-box-cards">
      <lunch-section v-for="nutrition in almuerzos" :key="nutrition.id" :nutrition="nutrition"></lunch-section>
    </div>
  </div>
  <!-- Mostrar la sección cenas -->
  <div v-if="activeSection === 'cenas'" class="cenas-content">
    <div class="cenas-box-cards">

      <!-- Dialogo para editar nutrición -->
      <pv-dialog v-model:visible="dialogVisible" modal header="Editar Nutrición" :style="{ width: '25rem' }">
        <div class="flex items-center gap-4 mb-4">
          <label for="title" class="font-semibold w-24">Título</label>
          <pv-input-text id="title" v-model="newNutritionB.title" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-4">
          <label for="ingredientes" class="font-semibold w-24">Ingredientes</label>
          <pv-input-text id="ingredientes" v-model="newNutritionB.ingredientes" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
          <label for="image" class="font-semibold w-24">URL de Imagen</label>
          <pv-input-text id="image" v-model="newNutritionB.image" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex justify-end gap-2">
          <pv-button class="button-cancelar" label="Cancelar" @click="dialogVisible = false"></pv-button>
          <pv-button class="button-guardar" label="Guardar" @click="saveEdit"></pv-button>
        </div>
      </pv-dialog>

      <dinner-section v-for="nutrition in cenas" :key="nutrition.id" :nutrition="nutrition"
                      @edit-nutrition="editNutrition" @delete-nutrition="deleteNutrition"></dinner-section>
    </div>
  </div>

</template>



<style scoped>
.titulo-nutrition {
  margin-left: 3em;
  color: #c5d951;
}
.divider {
  margin: auto auto 3em;
  width: 90%;
}
.button-cancelar {
  margin: 3%;
  width: 30%;
  background-color: #ae4c4c;
  color: #ffffff;
  font-size: 16px;
  height: auto;
}
.button-guardar {
  margin: 3%;
  width: 30%;
  background-color: #3a7539;
  color: #ffffff;
  font-size: 16px;
  height: auto;
}
.button-agregar {
  margin-top: 1%;
  margin-right: 5%;
  background-color: #a6b644;
  border-color: black;
  color: white;
  font-size: 16px;
  width: auto;
  height: auto;
}
.cenas-content, .desayunos-content, .almuerzos-content {
  margin-left: 2%;
  font-family: "Nunito", sans-serif;
}
.cenas-box-cards, .desayunos-box-cards, .almuerzos-box-cards {
  display: flex;
  flex-wrap: wrap;
}
.box-agregar {
  display: flex;
  margin-left: 2%;
  margin-top: 2%;
}
.content-agregar {
  display: flex;
  flex-wrap: wrap;
}
.button-editar {
  margin: 3%;
  width: 20%;
  background-color: #a1ac62;
  color: #ffffff;
  font-size: 16px;
  height: auto;
}
.selected-button {
  margin-left: 2%;
  background-color: #c5d951;
  color: white;
  border-radius: 20px;
  border-color: #afc148;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
}
.unselected-button {
  margin-left: 2%;
  background-color: white;
  color: #b0b0b0;
  border: 2px solid #b0b0b0;
  border-radius: 20px;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  border-color: #afc148;
}
</style>