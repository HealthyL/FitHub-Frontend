<template>
  <div class="card">
    <pv-toolbar class="toolbar">
      <template #start>
        <div class="flex align-items-center gap-2">
          <pv-button text plain style="background-color: transparent;" :class="{ 'selected': activeSection === 'account' }" @click="selectSection('account')">
            <i class="pi pi-user"></i>
            <span class="label">Mi cuenta</span>
          </pv-button>
          <pv-button text plain style="background-color: transparent;" :class="{ 'selected': activeSection === 'routine' }" @click="selectSection('routine')">
            <i class="pi pi-list"></i>
            <span class="label">Rutina</span>
          </pv-button>
          <pv-button text plain style="background-color: transparent;" :class="{ 'selected': activeSection === 'nutrition' }" @click="selectSection('nutrition')">
            <i class="pi pi-apple"></i>
            <span class="label">Nutrición</span>
          </pv-button>
          <pv-button text plain style="background-color: transparent;" :class="{ 'selected': activeSection === 'settings' }" @click="selectSection('settings')">
            <i class="pi pi-cog"></i>
            <span class="label">Configuración</span>
          </pv-button>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeSection = ref('account');

const selectSection = (section) => {
  activeSection.value = section;
};
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: center;
  border-radius: 0rem;
  padding: 0rem 0rem 0rem 1.5rem;
  margin-left: 0px;
  color: white;
  background-color: #c5d951;
  font-family: 'Nunito', sans-serif;
  width: 106rem;
  height: 8rem;
}

.label {
  display: inline-block;
  vertical-align: middle;
  font-size: 18px; /* Ajusta el tamaño del texto según sea necesario */
}

.selected {
  font-weight: bold;
  color: #505930;
}
</style>
