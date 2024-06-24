<script>
import NutritionCard from "../components/nutrition-card.component.vue";
import { NutritionApiService } from "@/nutritionManagement/services/nutrition-api.service.js";
import { NutritionEntity } from "@/nutritionManagement/model/nutrition.entity.js";
import { ClassificationEntity} from "@/nutritionManagement/model/classification.entity.js";

export default {
  name: "nutritions-card-list",
  components: { NutritionCard },
  data() {
    return {
      nutritions: [],
      nutritionsService: new NutritionApiService(),
      classificationId: null,
      classificationOptions: [],
      newNutrition: new NutritionEntity(null, '', '', '', null),  // For creating new nutrition items
      selectedNutrition: new NutritionEntity(null, '', '', '', null),  // For editing existing nutrition items
      showAddNutritionModal: false,  // Controla la visibilidad del modal para agregar
      showEditNutritionModal: false  // Controla la visibilidad del modal para editar
    };
  },
  created() {
    this.fetchClassificationOptions();
    this.fetchNutritions();
  },
  methods: {
    async fetchClassificationOptions() {
      try {
        const response = await this.nutritionsService.getClassification();
        this.classificationOptions = response.data.map(classificationData =>
            new ClassificationEntity(classificationData.id, classificationData.name)
        );
      } catch (error) {
        console.error('Error fetching classification data:', error);  // Error handling
      }
    },
    async fetchNutritions() {
      try {
        const response = await this.nutritionsService.getNutritions();
        this.nutritions = response.data.map(nutritionData =>
            new NutritionEntity(nutritionData.id, nutritionData.name, nutritionData.description, nutritionData.photoUrl, nutritionData.classificationId)
        );
      } catch (error) {
        console.error('Error fetching nutrition data:', error);  // Error handling
      }
    },
    async addNutrition() {
      try {
        const response = await this.nutritionsService.createNutrition(this.newNutrition);
        this.nutritions.push(new NutritionEntity(response.data.id, response.data.name, response.data.description, response.data.photoUrl, response.data.classificationId));
        this.newNutrition = new NutritionEntity(null, '', '', '', null); // Reset form
        this.showAddNutritionModal = false; // Close modal
      } catch (error) {
        console.error('Error adding nutrition:', error);  // Error handling
      }
    },
    async openEditNutritionModal(nutrition) {
      this.selectedNutrition = { ...nutrition };
      this.showEditNutritionModal = true;
    },
    async editNutrition() {
      try {
        const response = await this.nutritionsService.updateNutrition(this.selectedNutrition);
        const index = this.nutritions.findIndex(nutrition => nutrition.id === this.selectedNutrition.id);
        if (index !== -1) {
          this.nutritions.splice(index, 1, new NutritionEntity(response.data.id, response.data.name, response.data.description, response.data.photoUrl, response.data.classificationId));
        }
        this.selectedNutrition = new NutritionEntity(null, '', '', '', null); // Reset form
        this.showEditNutritionModal = false; // Close modal
      } catch (error) {
        console.error('Error editing nutrition:', error);  // Error handling
      }
    },
    async deleteNutrition(nutritionId) {
      try {
        await this.nutritionsService.deleteNutrition(nutritionId);
        this.nutritions = this.nutritions.filter(nutrition => nutrition.id !== nutritionId);
      } catch (error) {
        console.error('Error deleting nutrition:', error);  // Error handling
      }
    }
  },
  computed: {
    filteredNutritions() {
      if (this.classificationId !== null) {
        return this.nutritions.filter(nutrition => nutrition.classificationId === this.classificationId);
      }
      return this.nutritions.filter(nutrition => nutrition.classificationId === 1);
    }
  }
};
</script>

<template>
  <h1 class="titulo-settings">Alimentacion</h1>
  <pv-divider class="divider"></pv-divider>
  <div class="filters">

    <!-- Botones para seleccionar la rutina -->
    <div class="button-container">
      <pv-button class="buttons" v-for="(option, index) in classificationOptions" :key="option.id" @click="classificationId = option.id">
        {{ option.name }}
      </pv-button>
    </div>
  </div>
  <div class="conteiner_agregar">
    <pv-button label="Agregar" class="button-agregar" @click="showAddNutritionModal = true" />
  </div>
  <div class="product-card-list">
    <nutrition-card v-for="nutrition in filteredNutritions" :key="nutrition.id" :nutrition="nutrition" @update="openEditNutritionModal(nutrition)" @delete="deleteNutrition" />
  </div>

  <!-- Modal para agregar nueva nutrición -->
  <div v-if="showAddNutritionModal" class="modal">
    <div class="modal-content">
      <h2>Agregar Nueva Nutrición</h2>
      <form @submit.prevent="addNutrition">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input v-model="newNutrition.name" type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="description">Descripción</label>
          <pv-textarea v-model="newNutrition.description" id="description" required></pv-textarea>
        </div>
        <div class="form-group">
          <label for="photoUrl">URL de la Foto</label>
          <input v-model="newNutrition.photoUrl" type="url" id="photoUrl" required>
        </div>
        <div class="form-group">
          <label for="classification">Clasificación</label>
          <select v-model="newNutrition.classificationId" id="classification" required>
            <option v-for="option in classificationOptions" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
        <div class="form-actions">
          <pv-button type="submit" class="button-agregar">Agregar</pv-button>
          <pv-button type="button" class="button-cancelar" @click="showAddNutritionModal = false">Cancelar</pv-button>
        </div>
      </form>
    </div>
  </div>

  <!-- Modal para editar nutrición -->
  <div v-if="showEditNutritionModal" class="modal">
    <div class="modal-content">
      <h2>Editar Nutrición</h2>
      <form @submit.prevent="editNutrition">
        <div class="form-group">
          <label for="editName">Nombre</label>
          <input v-model="selectedNutrition.name" type="text" id="editName" required>
        </div>
        <div class="form-group">
          <label for="editDescription">Descripción</label>
          <pv-textarea v-model="selectedNutrition.description" id="editDescription" required></pv-textarea>
        </div>
        <div class="form-group">
          <label for="editPhotoUrl">URL de la Foto</label>
          <input v-model="selectedNutrition.photoUrl" type="url" id="editPhotoUrl" required>
        </div>
        <div class="form-group">
          <label for="editClassification">Clasificación</label>
          <select v-model="selectedNutrition.classificationId" id="editClassification" required>
            <option v-for="option in classificationOptions" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
        <div class="form-actions">
          <pv-button type="submit" class="button-agregar">Guardar</pv-button>
          <pv-button type="button" class="button-cancelar" @click="showEditNutritionModal = false">Cancelar</pv-button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 2em;
  border-radius: 10px;
  width: 500px;
}
.form-group {
  margin-bottom: 1em;
}
.form-group label {
  display: block;
  margin-bottom: 0.5em;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
}
.button-cancelar {
  font-family: "Nunito", sans-serif;
  margin-left: 1em;
  border-radius: 2em;
  background-color: firebrick;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.button-cancelar:hover{
  background-color: #7e1313;
  transform: scale(1.1);
}
.button-agregar {
  font-family: "Nunito", sans-serif;
  background-color: #ffffff;
  border: 2px solid black; /* Define el grosor y color del borde */
  color: black;
  font-size: 16px;
  width: auto;
  height: 100%;
  margin-left: 50%;
  border-radius: 2em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.button-agregar:hover{
  background-color: #d1d1d1;
  transform: scale(1.1);
}
.buttons{
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  background-color: #a6b644;
  color: white;
  border-radius: 2em;
  font-size: 22px;
  width: auto;
  height: 100%;
  margin-left: 5%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.buttons:hover{
  background-color: #737e38;
  transform: scale(1.1);
}
.button-container{
  border-color: #666666;
  font-family: "Nunito", sans-serif;
  display: flex;
  justify-content: center;
  margin-bottom: 1%;
  width: 100%;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1%;
}

.filters{
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}
</style>
