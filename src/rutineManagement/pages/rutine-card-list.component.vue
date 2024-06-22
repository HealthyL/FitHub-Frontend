<script>
import { RutineApiService } from "../services/rutine-api.service";
import { RutineEntity } from "../model/rutine.entity";

export default {
  name: "rutine-card-list",
  data() {
    return {
      rutines: [],
    };
  },
  computed: {
    groupedRutines() {
      let groups = [];
      for (let i = 0; i < this.rutines.length; i += 3) {
        groups.push(this.rutines.slice(i, i + 3));
      }
      return groups;
    }
  },
  methods: {
    async loadRutines() {
      const response = await new RutineApiService().getAllRutines();
      this.rutines = response.data.map(rutineData => new RutineEntity(rutineData.id, rutineData.dia, rutineData.title, rutineData.image));
    }
  },
  created() {
    this.loadRutines();
  }
}
</script>

<template>
  <h1 class="titulo-rutine">{{ $t('toolbar.rutine') }}</h1>
  <pv-divider class="divider"></pv-divider>
  <div class="rutine-cards" style="width: 75%; margin: auto;">
    <div class="rutine-row" v-for="(rutineGroup, index) in groupedRutines" :key="'group-' + index">
      <div class="rutine-card" v-for="rutine in rutineGroup" :key="rutine.id" style="width: 25%;">
        <h2>{{ rutine.dia }}</h2>
        <h3>{{ rutine.title }}</h3>
        <img :src="rutine.image" alt="Rutine image" class="rutine-image">
      </div>
    </div>
  </div>
</template>

<style scoped>
.titulo-rutine{
  margin-left:3em;
  color:#c5d951;
}
.divider {
  margin: auto auto 3em;
  width: 90%;
}
.rutine-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2em;
}
.rutine-card {
  border: 1px solid #ccc;
  padding: 1em;
  border-radius:2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.rutine-image {
  width: 100%;
  height: auto;
}
  .divider {
    margin: auto auto 3em;
    width: 90%;
  }
</style>