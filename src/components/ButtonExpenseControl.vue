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
  padding: pxtorem(16) pxtorem(20);
  border: none;
  border-radius: 1rem;
  background: getcolor('green.lighten2');
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 50%);
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow ease 0.25s;

  &:hover {
    background: getcolor('green.darken1');
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 25%);
    transform: translateY(-1px);
  }

  &:active {
    background: getcolor('green.darken1');
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 25%);
    transform: translateY(1px);
  }

  &.is-red {
    background: getcolor('red.lighten1');
  }
}
</style>
