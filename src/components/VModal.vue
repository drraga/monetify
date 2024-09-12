<script setup lang="ts">
import { inject } from 'vue'
import ButtonActions from '@/components/ButtonActions.vue'

const isModalOpen = inject('showModal')
const emit = defineEmits(['close'])
</script>

<template>
  <div role="dialog" aria-modal="true" class="dialog">
    <Transition :duration="550" name="dialog">
      <section v-if="isModalOpen" class="dialog-prewrapper">
        <div class="dialog-wrapper">
          <div class="dialog-wrapper__close" @click="emit('close')">
            <ButtonActions />
          </div>

          <slot />
        </div>
      </section>
    </Transition>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.dialog {
  .dialog-prewrapper {
    position: fixed;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: rgb(0 0 0 / 50%);
    inset: 0;

    & .dialog-wrapper {
      position: relative;

      &__close {
        position: absolute;
        z-index: 1;
        top: 0.5rem;
        right: 0.5rem;
      }
    }
  }

  & .dialog-enter-from,
  & .dialog-leave-to {
    opacity: 0;
  }

  & .dialog-enter-from form,
  & .dialog-leave-to form,
  & .dialog-enter-from .dialog-wrapper__close,
  & .dialog-leave-to .dialog-wrapper__close {
    opacity: 0;
    transform: translateY(-40px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  & .dialog-enter-active form,
  & .dialog-leave-active form,
  & .dialog-enter-active .dialog-wrapper__close,
  & .dialog-leave-active .dialog-wrapper__close {
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  & .dialog-enter-active form,
  & .dialog-enter-active .dialog-wrapper__close {
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
