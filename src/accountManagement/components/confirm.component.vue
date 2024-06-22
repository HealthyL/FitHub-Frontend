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
    <pv-button class="confirmation-button" @click="onConfirm">Confirmar</pv-button>
    <pv-button class="confirmation-button" @click="onCancel">Cancelar</pv-button>
  </div>
</template>

<style>
.message{
  text-align: center;
}
.confirmation-button{
  margin-right:0.5em;
}

</style>