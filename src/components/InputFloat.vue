<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{
  inputContent: TransactionInputEntity
  isAutofocused: boolean
}>()

const isFieldValidating = ref(false) // flag to show errors only after blur or input

const inputContent = props.inputContent
const inputVal = defineModel('inputValue')

const inputField = ref<HTMLInputElement | null>(null)

const localError = ref('')

const focusInput = () => {
  if (props.isAutofocused && inputField.value) {
    inputField.value.focus() // Set focus on 1st input
  }
}

onMounted(() => {
  focusInput()
  isFieldValidating.value = false // Reset state of error msg display
})
</script>
<template>
  <p class="float-input">
    <label :class="{ required: inputContent.isRequired, top: inputValue }">{{
      inputContent.label
    }}</label>

    <input
      ref="inputField"
      v-model="inputVal"
      :class="{ required: inputContent.isRequired, 'have-error': !!localError }"
      :id="inputContent.label"
      :type="inputContent.textType"
      :area-describedby="`${inputContent.label}-validation`"
      @blur="isFieldValidating = true"
      @input="isFieldValidating = true"
    />
    <!-- :step="inputContent.textType === 'number' ? 0.01 : ''" -->

    <span
      v-if="isFieldValidating"
      :id="`${inputContent.label}-validation`"
      class="float-input__validation-msg"
      aria-live="assertive"
    >
      <slot name="error-message">{{ localError }}</slot>
    </span>
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

  &:has(input:focus) label {
    /* style label when input focused */
    top: -0.75rem;
    color: getcolor('black.lighten1');
    font-size: 12px;
  }

  &:has(input[type='date']) label {
    top: -0.75rem;
    font-size: pxtorem(12);
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
    }

    &.have-error {
      border: solid 1px getcolor('red.lighten1');
    }
  }

  &__validation-msg {
    position: absolute;
    right: 0.75rem;
    bottom: -1.2rem;
    color: getcolor('red.lighten1');
    font-size: pxtorem(13);
  }
}
</style>
