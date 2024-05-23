<script>
import LanguageSwitcher from "@/public/pages/language-switcher.component.vue";
export default {
  name: "app",
  components: {LanguageSwitcher},
  title: "FitHub",
  data() {
    return {
      sidebarVisible: false
    }
  },
  methods:{
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  }
}
</script>

<template>
  <pv-sidebar v-model:visible="sidebarVisible">
    <template #container="{ closeCallback }" class="side-bar-container">
      <div class="flex flex-column h-full">
        <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
        <span>
          <pv-button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="close-button h-2rem w-2rem"></pv-button>
        </span>
        </div>
        <div class="language-switcher-sidebar">
          <language-switcher></language-switcher>
        </div>
        <div class="sidebar-route-path-link overflow-y-auto">
          <a>
            <router-link :to="{ path: '/my-account' }" >
              <i class="pi pi-user"></i>
              <span class="font-medium" @click="closeCallback">{{ $t('toolbar.myaccount') }} </span>
            </router-link>
          </a>
          <a>
            <router-link :to="{ path: '/rutine' }" >
              <i class="pi pi-calendar"></i>
              <span class="font-medium" @click="closeCallback">{{ $t('toolbar.rutine') }} </span>
            </router-link>
          </a>
          <a>
            <router-link :to="{ path: '/nutrition' }" >
              <i class="pi pi-apple"></i>
              <span class="font-medium" @click="closeCallback">{{ $t('toolbar.nutrition') }} </span>
            </router-link>
          </a>
          <a>
            <router-link :to="{ path: '/products' }" >
              <i class="pi pi-list"></i>
              <span class="font-medium" @click="closeCallback">{{ $t('toolbar.products') }} </span>
            </router-link>
          </a>
          <a>
            <router-link :to="{ path: '/settings' }" >
              <i class="pi pi-cog"></i>
              <span class="font-medium" @click="closeCallback">{{ $t('toolbar.settings') }} </span>
            </router-link>
          </a>
        </div>
      </div>
    </template>
  </pv-sidebar>
  <pv-toolbar class="toolbar-container">
    <template #start>
      <div class="toolbar-content1 flex align-items-center">
        <pv-button class="sidebar-button" icon="pi pi-bars" @click="toggleSidebar"/>
        <img class="logo-toolbar" src="https://github.com/aksoonie/fithub-db/assets/134560396/5b192cd5-6101-4d98-b975-228b48c009c6" alt="logo">
      </div>
      <div class="toolbar-content">
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
  .sidebar-button{
    display:none;
  }
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
  .toolbar-container a{
    text-decoration: none;
    margin-left:1.5em;
    border-radius:1.5em;
    color: #7E8940;
  }
  .logo-toolbar{
    width:3em;
    margin: 0.5rem;
  }
  .sidebar-button{
    background-color: #7E8940;
    margin-left:1.5em;
  }
  .toolbar-content {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .toolbar-content{
    display: flex;
    align-items: center;
  }
  .close-button{
    color:white;
    background: #7E8940;
  }
  .language-switcher-wrapper {
    margin-left:2em;
    margin-right:2em;
  }
  .overflow-y-auto {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
  .sidebar-route-path-link a, .language-switcher-sidebar{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #7E8940;
    margin: 0.5rem;
    padding: 0.5rem;
  }
  @media (max-width: 1086px){
    .toolbar-content{
      display: none;
    }
    .sidebar-button{
      display:flex;
    }
  }
</style>
