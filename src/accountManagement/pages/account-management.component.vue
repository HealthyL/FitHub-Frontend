<script>
import ConfirmComponent from "@/accountManagement/components/confirm.component.vue";
import {AccountManagementApiService} from "@/accountManagement/services/accountManagement-api.service.js";
import {ObjectiveEntity} from "@/accountManagement/model/objective.entity.js";
import {GenderEntity} from "@/accountManagement/model/gender.entity.js";
import {userEntity} from "@/accountManagement/model/user.entity.js";

export default {
  name: "settings-card",
  title: "Configuration",
  components: {
    ConfirmComponent,
  },
  data() {
    return {
      accountManagementApiService: null,
      objectiveOptions: [],
      genderOptions: [],
      name:null,
      email:null,
      birthdate:null,
      objective:null,
      gender:null,
      password:null,
      users: [],
      userId: null,
      showConfirm: false,
    }
  },
  created() {
    this.accountManagementApiService = new AccountManagementApiService();
    this.fetchObjectiveOptions();
    this.fetchGenderOptions();
    this.fetchUserData();
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
    },
    async fetchUserData() {
      try {
        const {data} = await this.accountManagementApiService.getDataUsers();
        const user = new userEntity(data[0].id, data[0].name, data[0].email, data[0].birthdate, data[0].gender, data[0].objective, data[0].password);
        if (user) {
          this.userId = user.id;
          this.name = user.name;
          this.email = user.email;
          this.birthdate = user.birthdate;
          this.gender = user.gender;
          this.objective = user.objective;
          this.password = user.password;
        } else {
          console.error('Usuario no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    },
    async updateUser() {
      try {
        const userData = {
          name : this.name,
          email : this.email,
          birthdate : this.birthdate.toISOString().slice(0, 10),
          gender : this.gender,
          objective : this.objective,
          password : this.password
        };
        await this.accountManagementApiService.updateUser(this.userId, userData);
      } catch (error) {
        console.error('Error al actualizar los datos', error);
      }
    },
    onConfirm() {
      this.updateUser();
      this.showConfirm = false;
    },
    onCancel() {
      this.showConfirm = false;
    }
  }
};
</script>

<template>
<h1 class="titulo-account">{{ $t('toolbar.myaccount') }}</h1>
  <pv-divider class="divider"></pv-divider>
<div class="profile">
  <div class="profile-section">
    <div class="personal-data">
      <div class="personal-info">
        <div class="field">
          <label for="name">Name </label>
          <pv-input-text class="p-inputtext" id="name" v-model="name" />
        </div>
        <div class="field">
          <label for="email">Email </label>
          <pv-input-text class="p-inputtext" id="email" v-model="email" />
        </div>
        <div class="field">
          <label for="birthdate">Birthdate </label>
          <pv-calendar class="p-calendar" id="birthdate" v-model="birthdate" dateFormat="yy-mm-dd"/>
        </div>
        <div class="field">
          <label for="objective">Objective </label>
          <pv-dropdown class="p-dropdown" id="objective" v-model="objective" :options="objectiveOptions" optionLabel="name" :placeholder="objective" />
        </div>
        <div class="field">
          <label for="password">Password </label>
          <pv-input-text class="p-inputtext" id="password" v-model="password"/>
        </div>
      </div>
      <div class="button-update">
        <pv-button class="botoncito" @click="showConfirm = true" v-show="!showConfirm">{{$t('settings.update')}}</pv-button>
        <ConfirmComponent class="confirmation-update-button" :show="showConfirm" message="¿Estás seguro?" @confirm="onConfirm" @cancel="onCancel" />
      </div>
    </div>
  </div>
</div>
</template>

<style>
.titulo-account {
  margin-left: 3em;
  color: #c5d951;
}
.divider {
  margin: auto auto 3em;
  width: 90%;
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
}

.profile-section {
  width: 100%;
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
}

.profile-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #c5d951;
}

.personal-data {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.personal-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
}

.field label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #c5d951;
}

.field .p-inputtext,
.field .p-dropdown,
.field .p-calendar {
  width: 100%;
  border-radius: 5px;
}

.button-update {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.botoncito {
  background-color: #C5D951FF;
  margin-top:1.5em;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.botoncito:hover {
  background-color: #8BB500D6;
  transform: scale(1.1);
}

.confirmation-update-button {
  margin-left: 1rem;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .titulo-settings {
    font-size: 1.5rem;
  }

  .divider {
    width: 80%;
  }

  .profile-section {
    padding: 1.5rem;
  }

  .profile-section h3 {
    font-size: 1.25rem;
  }

  .field .p-inputtext,
  .field .p-dropdown,
  .field .p-calendar {
    font-size: 0.9rem;
  }

  .botoncito {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .titulo-settings {
    font-size: 1.25rem;
  }

  .divider {
    width: 100%;
  }

  .profile-section {
    padding: 1rem;
  }

  .profile-section h3 {
    font-size: 1rem;
  }

  .field label {
    font-size: 0.9rem;
  }

  .botoncito {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
}

</style>