<template>
  <i class="button-action">
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m11.25 4.75-6.5 6.5m0-6.5 6.5 6.5" />
    </svg>
  </i>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.button-action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  cursor: pointer;

  & svg {
    width: pxtorem(20);
    fill: none;
    stroke: getcolor('grey.darken1');
    stroke-width: pxtorem(2);
    transition:
      stroke 0.25s ease,
      transform 0.25s ease;
  }

  &:hover {
    & svg {
      stroke: getcolor('red.lighten1');
      transform: rotate(45deg);
    }
  }
}
</style>
