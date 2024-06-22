<script>
export default {
  name: "page-not-found",
  title:"Page not found",
  computed: {
    route() {
      return this.$route.fullPath;
    }
  }
}

</script>

<template>
  <div class="content-page-not-found">
    <h2>{{$t('page-not-found.title')}}</h2>
    <p> {{ route }} {{$t('page-not-found.sub-title')}}</p>
    <router-link class="button" to="/my-account">{{$t('page-not-found.button')}}</router-link>
  </div>
</template>

<style scoped>
.content-page-not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
h2{
  color:#c5d951;
}
.button{
  margin-top: 1em;
  border-radius: 2em;
  padding: 0.5em 1em;
  background-color: #c5d951;
  color:white;
  text-decoration:none;
}
</style>