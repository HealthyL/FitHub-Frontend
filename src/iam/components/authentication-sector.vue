<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {useRouter} from "vue-router";


export default {
  name: "authentication-section",
  data() {
    return {
      router: useRouter(),
      authenticationStore: useAuthenticationStore()
    };
  },
  computed: {
    isSignedIn() {
      return this.authenticationStore.isSignedIn;
    },
    currentUsername() {
      return this.authenticationStore.currentUsername;
    },
  },
  methods: {
    onSignIn() {
      this.router.push({name: 'sign-in'});
    },
    onSignUp() {
      this.router.push({name: 'sign-up'});
    },
    onSignOut() {
      this.authenticationStore.signOut(this.router);
    }
  }
}
</script>

<template>
  <div>
    <div v-if="isSignedIn">
      <a class="welcome"> Welcome,
       <span>{{ currentUsername }}</span>
      </a>
      <a class="signout" @click="onSignOut">Sign Out</a>
    </div>
    <div v-else>
      <a class="signin" @click="onSignIn"> {{ $t('login.title') }}</a>
      <a class="signup" @click="onSignUp">{{ $t('signup.title') }}</a>
    </div>
  </div>
</template>

<style scoped>
  a{
    font-family:Nunito, sans-serif;
    text-decoration: none;
    font-weight:500 !important;
    margin-left:1.5em;
    border-radius:1.5em;
    cursor:pointer;
    color: #7E8940;
  }
  .welcome {
    background-color: white;
    border: 1px solid white;
    padding: 5px;
  }
  .signup{
    background-color: #ffffff;
    padding: 0.7em;
    color: #7E8940;
  }
  .signout {
    background-color: rgba(239, 82, 82, 0.65);
    padding: 5px;
    color:white;
  }
  span{
    font-weight:800 !important;
  }
</style>