<template>
  <div class="card">
    <pv-toolbar class="toolbar">
      <template #start>
        <div>
          <pv-button
              text
              plain
              style="background-color: transparent;"
              :class="{ 'selected': activeSection === 'account' }"
              @click="selectSection('account')">
            <i class="pi pi-user"></i>
            <span class="label">Mi cuenta</span>
          </pv-button>
          <pv-button
              text
              plain
              style="background-color: transparent;"
              :class="{ 'selected': activeSection === 'routine' }"
              @click="selectSection('routine')">
            <i class="pi pi-list"></i>
            <span class="label">Rutina</span>
          </pv-button>
          <pv-button
              text
              plain
              style="background-color: transparent;"
              :class="{ 'selected': activeSection === 'nutrition' }"
              @click="selectSection('nutrition')"
          >
            <i class="pi pi-apple"></i>
            <span class="label">Nutrición</span>
          </pv-button>
          <pv-button
              text
              plain
              style="background-color: transparent;"
              :class="{ 'selected': activeSection === 'settings' }"
              @click="selectSection('settings')"
          >
            <i class="pi pi-cog"></i>
            <span class="label">Configuración</span>
          </pv-button>
        </div>
      </template>
    </pv-toolbar>
    <div v-if="activeSection === 'account'">

    </div>
    <div v-if="activeSection === 'routine'">
    </div>
    <div v-if="activeSection === 'nutrition'">
      <nutrition-list></nutrition-list>
    </div>
    <div v-if="activeSection === 'settings'">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NutritionList from "../../nutrition/components/nutrition-list.component.vue";

const activeSection = ref('nutrition');

const selectSection = (section) => {
  activeSection.value = section;
};
</script>

<style scoped>
.toolbar {
  justify-content: center;
  background-color: #c5d951;
  font-family: 'Nunito', sans-serif;
  width: 100%;
  height: 8rem;
}

.label {
  font-size: 140%;
  margin-right:10px;
}

.selected {
  font-weight: bold;
  color: #505930;
}
</style>
