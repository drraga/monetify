<script setup lang="ts">
const props = defineProps({
  buttonText: {
    text: String,
    default: ''
  },
  isRed: {
    value: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="button-expense" :class="{ 'is-red': isRed }">{{ props.buttonText }}</button>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.button-expense {
  padding: pxtorem(4) pxtorem(20);
  border: none;
  border-radius: pxtorem(32);
  background: getcolor('green.lighten2');
  color: #fff;
  cursor: pointer;
  font-family: inherit;

  &.is-red {
    background: getcolor('red.lighten1');
  }
}
</style>
