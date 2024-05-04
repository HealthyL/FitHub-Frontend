<script>
export default {
  name: "app",
  title: "FitHub",
  data() {
    return {
      drawer: false,
      pages: [
        {label: "Configuracion", to: "/settings"},
        {label: "Estadisticas", to: "/statistics"},
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  }
}
</script>

<template>
  <header>
    <pv-toolbar class="toolbar-content" fixed>
      <template #start>
        <h2>FitHub </h2>
        <div class="flex-column">
          <router-link v-for="page in pages" :key="page.label"
                       v-slot="{ navigate, href }" :to="page.to" custom>
            <pv-button :href="href" class="p-button-text text-white"
                       @click="navigate">
              {{ page.label }}
            </pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <router-view></router-view>
</template>

<style scoped>
.toolbar-content{
  background-color: #c5d951;
  padding-left:4em;
}
h2{
  color:white;
}
</style>
