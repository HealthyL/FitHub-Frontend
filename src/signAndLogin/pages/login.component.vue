<script>
export default {
  name: "login-content",
  data() {
    return {
      username: null,
      password: null
    };
  }
}
</script>

<template>
  <div class="container">
    <div class="login">
      <h2 class="title">{{ $t('login.title') }}</h2>
      <p class="description">{{ $t('login.description') }}</p>
      <div>
        <pv-float-label class="p-float-label">
          <pv-input-text class="input" id="username" v-model="username" />
          <label class="label-input" for="username">{{ $t('login.username') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-input-text class="input" type="password" v-model="password" inputId="password" />
          <label for="password">{{ $t('login.password') }}</label>
          <span id="passwordError" class="error-message">{{ $t('login.error') }}</span>
        </pv-float-label>
      </div>
      <br>
      <div class="registration-question">
        <router-link :to="{ path: '/signup' }">
          <span class="route-to-registration">{{ $t('login.go-to-signup') }}</span>
        </router-link>
      </div>
      <pv-button class="btn-register">{{ $t('login.title') }}</pv-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 3em;
  display: flex;
  justify-content: center;
  height: 70vh;
  align-items: center;
}
.login {
  text-align: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
}
.login .title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #8BB500D6;
}
.route-to-registration {
  text-decoration: none;
  color: #95a53a;
}
.description {
  font-size: 20px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 20px;
}
.p-float-label {
  margin-bottom: 20px;
  width: 100%;
}
.input {
  width: 100% !important;
  height: 3em;
  border-radius: 5px;
}
.label-input {
  color: #666;
}
.error-message {
  position: absolute;
  top: 100%;
  left: 0;
  color: red;
  display: none;
  font-size: 14px;
  margin-top: 4px;
}
.registration-question {
  align-items: center;
  justify-content: center;
}
.btn-register {
  background-color: #C5D951FF;
  margin-top: 1.5em;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 2em;
  padding: 15px 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.btn-register:hover {
  background-color: #8BB500D6;
  transform: scale(1.1);
}
@media screen and (max-width: 768px) {
  .login {
    padding: 20px;
  }
  .title {
    font-size: 28px;
  }
  .description {
    font-size: 18px;
  }
  .btn-register {
    font-size: 16px;
    padding: 10px 20px;
  }
}
</style>
