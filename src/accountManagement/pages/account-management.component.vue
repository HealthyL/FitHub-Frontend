<script>
import { ref } from 'vue';

export default {
  setup() {
    const photoUrl = ref('https://www.shutterstock.com/image-photo/cheerful-brunette-business-woman-student-260nw-2246174263.jpg');
    const name = ref('');
    const birthdate = ref(null);
    const dni = ref('');
    const gender = ref(null);
    const genders = ref([
      { label: 'Male', value: 'M' },
      { label: 'Female', value: 'F' }
    ]);
    const email = ref('');
    const phone = ref('');
    const plan = ref(null);
    const plans = ref([
      { label: 'Nutri Plan', value: 'nutri' },
      { label: 'Fit Plan', value: 'fit' },
      { label: 'Nutri Fit Plan', value: 'nutrifit' }
    ]);
    const goal = ref('');

    const uploadPhoto = () => {
      // Implement photo upload logic here
      alert('Upload photo clicked!');
    };

    return {
      photoUrl,
      name,
      birthdate,
      dni,
      gender,
      genders,
      email,
      phone,
      plan,
      plans,
      goal,
      uploadPhoto
    };
  },
  methods: {
    changePlan() {
      // Navigate to subscription-management page
      this.$router.push('/subscription-management');
    }
  }
};
</script>

<template>
  <h1 class="titulo-settings">{{ $t('My Account') }}</h1>
  <pv-divider class="divider"></pv-divider>
  <div class="profile">
    <div class="profile-section">
      <h3>PERSONAL DATA</h3>
      <div class="personal-data">
        <div class="photo-upload">
          <img :src="photoUrl" alt="Profile Photo" class="profile-photo"/>
          <pv-button icon="pi pi-camera" class="p-button-rounded p-button-secondary" @click="uploadPhoto"/>
        </div>
        <div class="personal-info">
          <div class="field">
            <label for="name">Name:</label>
            <pv-input-text id="name" v-model="name" />
          </div>
          <div class="field">
            <label for="birthdate">Birthdate:</label>
            <pv-calendar id="birthdate" v-model="birthdate" dateFormat="dd/mm/yy"/>
          </div>
          <div class="field">
            <label for="dni">DNI:</label>
            <pv-input-text id="dni" v-model="dni" />
          </div>
          <div class="field">
            <label for="gender">Gender:</label>
            <pv-dropdown id="gender" v-model="gender" :options="genders" optionLabel="label" />
          </div>
        </div>
      </div>
    </div>
    <div class="profile-section">
      <h3>BASIC INFORMATION</h3>
      <div class="basic-info">
        <div class="field">
          <label for="email">Email:</label>
          <pv-input-text id="email" v-model="email" />
        </div>
        <div class="field">
          <label for="phone">Phone:</label>
          <pv-input-text id="phone" v-model="phone" />
        </div>
        <div class="field">
          <label for="plan">Plan Type:</label>
          <pv-dropdown id="plan" v-model="plan" :options="plans" optionLabel="label" />
        </div>
        <div class="field">
          <label for="goal">Goal:</label>
          <pv-input-text id="goal" v-model="goal" rows="3" />
        </div>
      </div>
      <pv-button label="CHANGE PLAN" class="p-button-success" @click="changePlan" />
    </div>
  </div>
</template>

<style>
.titulo-settings {
  margin-left: 3em;
  color: #c5d951;
}
.profile {
  max-width: 900px;
  margin: auto;
  padding: 2em;
}

.profile-section {
  margin-bottom: 2em;
}

.personal-data {
  display: flex;
}

.photo-upload {
  margin-right: 2em;
  text-align: center;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5em;
}

.personal-info {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1em;
}

.basic-info {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1em;
}

.field {
  display: contents;
}

.field label {
  display: flex;
  align-items: center;
}

</style>