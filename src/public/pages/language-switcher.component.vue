<script>
export default {
  name: "language-switcher",
  data(){
    return {
      languages:['en','es'],
      local:'en'
    }
  }
}
</script>

<template>
  <pv-select-button v-model="$i18n.locale" :options="languages" class="toggle-button-language uppercase" ></pv-select-button>
</template>

<style scoped>
</style>