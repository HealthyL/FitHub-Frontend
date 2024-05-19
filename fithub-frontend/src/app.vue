<script>
import LanguageSwitcher from "@/public/pages/language-switcher.component.vue";

export default {
  name: "app",
  components: {LanguageSwitcher},
  title: "FitHub"
}
</script>

<template>
  <pv-toolbar class="toolbar-container">
    <template #start>
      <div class="toolbar-content1 flex align-items-center">
        <img class="logo-toolbar" src="https://github.com/aksoonie/fithub-db/assets/134560396/5b192cd5-6101-4d98-b975-228b48c009c6" alt="logo">
      </div>
      <div class="toolbar-content2">
        <a>
          <router-link :to="{ path: '/my-account' }" >
            <i class="pi pi-user"></i>
            <span class="font-medium">{{ $t('toolbar.myaccount') }} </span>
          </router-link>
        </a>
        <a>
          <router-link :to="{ path: '/rutine' }" >
            <i class="pi pi-calendar"></i>
            <span class="font-medium">{{ $t('toolbar.rutine') }} </span>
          </router-link>
        </a>
        <a>
          <router-link :to="{ path: '/nutrition' }" >
            <i class="pi pi-apple"></i>
            <span class="font-medium">{{ $t('toolbar.nutrition') }} </span>
          </router-link>
        </a>
        <a>
          <router-link :to="{ path: '/products' }" >
            <i class="pi pi-list"></i>
            <span class="font-medium">{{ $t('toolbar.products') }} </span>
          </router-link>
        </a>
        <a>
          <router-link :to="{ path: '/settings' }" >
            <i class="pi pi-cog"></i>
            <span class="font-medium">{{ $t('toolbar.settings') }} </span>
          </router-link>
        </a>
        <div class="language-switcher-wrapper">
          <language-switcher></language-switcher>
        </div>
      </div>
    </template>
  </pv-toolbar>
  <router-view></router-view>
</template>

<style scoped>
  .logo-toolbar{
    height:2.5em;
  }
  span{
    font-size:large;
  }
  .pi{
    color: #7E8940;
    margin:0.3em;
  }
  .toolbar-container{
    height:5em;
    display:inline-block;
    width:100%;
    background-color: #c5d951;

  }
  a{
    text-decoration: none;
    margin-left:1.5em;
    border-radius:1.5em;
    color: #7E8940;
  }
  .logo-toolbar{
    width:3em;
    margin: 0.5rem;
  }
  .title-toolbar {
    color: white;
  }
  .toolbar-content2 {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .toolbar-content1{
    display: flex;
    align-items: center;
  }
  .language-switcher-wrapper {
    margin-left:2em;
    margin-right:2em;
  }
</style>
