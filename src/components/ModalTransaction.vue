<script setup lang="ts">
const props = defineProps<{
  inputFields: {
    fieldName: string
    textType: string
    isRequired: boolean
  }[]
  showDialog: boolean
}>()

import InputFloat from '@/components/InputFloat.vue'
import ButtonActions from '@/components/ButtonActions.vue'
import ButtonExpenseControl from '@/components/ButtonExpenseControl.vue'

const emit = defineEmits<{
  closeDialog: [value: boolean]
}>()

const closeDialog = () => {
  emit('closeDialog', false)
}
</script>
<template>
  <div class="dialog">
    <Transition :duration="550" name="dialog">
      <section v-if="showDialog" class="dialog-wrapper">
        <form>
          <fieldset>
            <div class="dialog-wrapper__close" @click="closeDialog()">
              <ButtonActions />
            </div>

            <legend>
              <slot name="header">Default header</slot>
            </legend>

            <p class="dialog-wrapper__group">
              <template v-for="input in props.inputFields" :key="input.filedName">
                <InputFloat
                  :text-label="input.fieldName"
                  :text-type="input.textType"
                  :is-required="input.isRequired"
                />
              </template>
            </p>
          </fieldset>

          <div class="dialog-wrapper__save" @click="$emit('closeDialog', false)">
            <ButtonExpenseControl button-text="Save" />
          </div>
        </form>
      </section>
    </Transition>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.dialog {
  & .dialog-wrapper {
    position: fixed;
    z-index: 2;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: rgb(0 0 0 / 50%);
    inset: 0;

    form {
      position: relative;
      padding: 1rem 5rem;
      border-radius: 0.5rem;
      background-color: #fff;
    }

    &__close {
      position: absolute;
      top: 0;
      right: 0;
      padding: pxtorem(5);
    }

    & legend {
      margin-bottom: pxtorem(22);
      font-size: pxtorem(22);
      font-weight: 600;
    }

    &__group {
      display: grid;
      margin-bottom: pxtorem(20);
      gap: 1.5rem;
    }

    &__save {
      float: right;
    }
  }

  & .dialog-enter-from,
  & .dialog-leave-to {
    opacity: 0;
  }

  & .dialog-enter-from form,
  & .dialog-leave-to form {
    opacity: 0;
    transform: translateY(-40px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  & .dialog-enter-active form,
  & .dialog-leave-active form {
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  & .dialog-enter-active form {
    transition-delay: 0.25s;
  }

  & .dialog-enter-active,
  & .dialog-leave-active {
    transition: opacity 0.3s ease;
  }

  & .dialog-leave-active {
    transition-delay: 0.5s;
  }
}
</style>
