<script>
export default {
  name: "signup-content",
  setup(){
    const gender = null;
    const genders = [
      { label: 'Male', value: 'M' },
      { label: 'Female', value: 'F' }
    ];
  }

}
</script>

<template>
  <div class="container">
    <div class="signup">
      <h2 class="title">{{ $t('signup.title') }}</h2>
      <p class="description">{{ $t('signup.description') }}</p>
      <div>
        <pv-float-label class="p-float-label">
          <pv-input-text class="input" v-model="value" />
          <label class="label-input" for="username">{{ $t('signup.username') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-input-text class="input" v-model="value" placeholder="pepito@example.com" />
          <label class="label-input" for="email">{{ $t('signup.email') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-calendar class="input" v-model="value" dateFormat="dd/mm/yy"/>
          <label class="label-input" for="birthdate">{{ $t('signup.birthdate') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-dropdown class="input" id="gender" v-model="gender" :options="genders" optionLabel="label" />
          <label class="label-input" for="gender">{{ $t('signup.gender') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-dropdown class="input" id="goal" v-model="goal" :options="goals" optionLabel="label" />
          <label class="label-input" for="goal">{{ $t('signup.goal') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-password class="input" v-model="value" inputId="password" :feedback="false" toggleMask/>
          <label for="password">{{ $t('signup.password') }}</label>
          <span id="passwordError" class="error-message" style="display: none; color: red;">La contraseña debe tener al menos 8 caracteres.</span>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-password class="input" v-model="value" inputId="password" :feedback="false" toggleMask style="width:20em;"/>
          <label for="password">{{ $t('signup.confirm-password') }}</label>
          <span id="passwordError" class="error-message" style="display: none; color: red;">La contraseña debe tener al menos 8 caracteres.</span>
        </pv-float-label>
      </div>
      <br>
      <div class="registration-question">
        <span class="go-to-registration">{{ $t('signup.confirm-password') }} </span>
        <a>
          <router-link :to="{ path: '/login' }" >
            <span class="route-to-registration"> {{ $t('signup.go-to-login') }} </span>
          </router-link>
        </a>
      </div>
      <pv-button class="btn-register">{{ $t('signup.title') }}</pv-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
.signup {
  text-align: center;
}
.signup .title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #8BB500D6;
}
.route-to-registration{
  text-decoration: none;
  color: #95a53a;
}
.description {
  font-size: 20px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 20px;
}
.p-float-label{
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.input{
  width: 20em !important;
  height: 3em;
  border-radius: 5px;
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
.registration-question{
  align-items: center;
  justify-content: center;
}
.go-to-registration{
  color: black;
  font-weight:700;
}
pv-password{
  width: 20em !important;
}
.btn-register {
  background-color: #C5D951FF;
  margin-top:1.5em;
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
  .signup {
    padding: 30px;
  }

  .title {
    font-size: 28px;
  }

  .description {
    font-size: 18px;
  }

  .signup input[type="email"],
  .signup input[type="password"] {
    font-size: 14px;
  }

  .btn-register {
    font-size: 16px;
    padding: 10px 20px;
  }
}

</style>