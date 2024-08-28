<script setup lang="ts">
const props = defineProps<{
  textLabel: string
  textType: string
  isRequired: boolean
  inputValue: string | number | null
}>()

const inputVal = defineModel('inputValue')
</script>
<template>
  <p class="float-input">
    <input :id="props.textLabel" :type="$props.textType" v-model="inputVal" />
    <label :class="{ required: props.isRequired, top: inputValue }">{{ props.textLabel }}</label>
  </p>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.float-input {
  position: relative;
  width: 100%;
  border-radius: 0.5rem;

  & label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    color: getcolor('grey.darken1');
    font-size: pxtorem(14);
    pointer-events: none;
    text-transform: capitalize;
    transform: translateY(-50%);
    transition: all 0.25s ease;

    &.required {
      &::after {
        content: ' *';
      }
    }

    &.top {
      top: -0.75rem;
      font-size: pxtorem(12);
    }
  }

  & input {
    width: 100%;
    padding: 0.5rem;
    border: solid 1px getcolor('grey.lighten2');
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border 0.25s ease;

    &:focus {
      border: solid 1px getcolor('black.lighten1');

      & + label {
        top: -0.75rem;
        font-size: pxtorem(12);
      }
    }

    &[type='date'] {
      & + label {
        top: -0.75rem;
        font-size: pxtorem(12);
      }
    }
  }
}
</style>
