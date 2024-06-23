<script>

export default {
  name: "confirm.component",
  props: ['show', 'message'],
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    }
  }
}
</script>

<template>
  <div v-if="show" class="confirm">
    <p class="message">{{ message }}</p>
    <pv-button class="confirmation-button" @click="onConfirm">{{$t('confirmation.confirm')}}</pv-button>
    <pv-button class="cancel-button" @click="onCancel">{{$t('confirmation.cancel')}}</pv-button>
  </div>
</template>

<style>
.message{
  text-align: center;
}
.confirmation-button{
  background-color: #C5D951FF;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  margin-right:0.5em;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.cancel-button{
  background-color: firebrick;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  margin-right:0.5em;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.confirmation-button:hover {
  background-color: #8BB500D6;
  transform: scale(1.1);
}
.cancel-button:hover {
  background-color: #7e1313;
  transform: scale(1.1);
}

</style>