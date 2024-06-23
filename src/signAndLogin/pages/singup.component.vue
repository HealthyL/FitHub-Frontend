<script>
import { AccountManagementApiService } from "@/accountManagement/services/accountManagement-api.service.js";
import { ObjectiveEntity } from "@/shared/model/objective.entity.js";
import { GenderEntity } from "@/shared/model/gender.entity.js";

export default {
  name: "settings-card",
  title: "Configuration",
  data() {
    return {
      accountManagementApiService: null,
      objectiveOptions: [],
      genderOptions: [],
      objective: null,
      gender: null,
      name: null,
      email: null,
      birthdate: null,
      password: null,
      confirmPassword: null
    };
  },
  created() {
    this.accountManagementApiService = new AccountManagementApiService();
    this.fetchObjectiveOptions();
    this.fetchGenderOptions();
  },
  methods: {
    async fetchObjectiveOptions() {
      try {
        const response = await this.accountManagementApiService.getObjectives();
        this.objectiveOptions = response.data.map(objective => new ObjectiveEntity(objective.id, objective.name));
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    },
    async fetchGenderOptions() {
      try {
        const response = await this.accountManagementApiService.getGenders();
        this.genderOptions = response.data.map(gender => new GenderEntity(gender.id, gender.name));
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="signup">
      <h2 class="title">{{ $t('signup.title') }}</h2>
      <p class="description">{{ $t('signup.description') }}</p>
      <div>
        <pv-float-label class="p-float-label">
          <pv-input-text class="input" v-model="name" />
          <label class="label-input" for="username">{{ $t('signup.username') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-input-text class="input" v-model="email" placeholder="pepito@example.com" />
          <label class="label-input" for="email">{{ $t('signup.email') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-calendar class="input" v-model="birthdate" dateFormat="dd/mm/yy" />
          <label class="label-input" for="birthdate">{{ $t('signup.birthdate') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-dropdown class="input" id="gender" v-model="gender" :options="genderOptions" optionLabel="name" />
          <label class="label-input" for="gender">{{ $t('signup.gender') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-dropdown class="input" id="objective" v-model="objective" :options="objectiveOptions" optionLabel="name" />
          <label class="label-input" for="goal">{{ $t('signup.objective') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-input-text class="input" type="password" v-model="password" inputId="password" />
          <label for="password">{{ $t('signup.password') }}</label>
        </pv-float-label>
      </div>
      <div>
        <pv-float-label class="p-float-label">
          <pv-input-text class="input" type="password" v-model="confirmPassword" inputId="confirm-password" />
          <label for="confirm-password">{{ $t('signup.confirm-password') }}</label>
        </pv-float-label>
      </div>
      <br>
      <div class="registration-question">
        <a>
          <router-link :to="{ path: '/login' }">
            <span class="route-to-registration">{{ $t('signup.go-to-login') }}</span>
          </router-link>
        </a>
      </div>
      <pv-button class="btn-register">{{ $t('signup.title') }}</pv-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 3em;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
.signup {
  text-align: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
}
.signup .title {
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
.go-to-registration {
  color: black;
  font-weight: 700;
}
pv-password {
  width: 100% !important;
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
  .signup {
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