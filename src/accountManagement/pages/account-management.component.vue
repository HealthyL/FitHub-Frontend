<script>
export default {
  name: "account-management",
  title: "Account Management"
}
</script>

<template>
  <h1 class="titulo-settings">{{ $t('my-account.title') }}</h1>
  <pv-divider class="divider"></pv-divider>
</template>

<style scoped>
.titulo-settings{
  margin-left:3em;
  color:#c5d951;
}
.divider{
  margin: auto auto 3em;
  width:90%;
}
</style>