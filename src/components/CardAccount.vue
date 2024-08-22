<script setup lang="ts">
import HTMLIconPen from '@/assets/icons/HTMLIconPen.vue'
</script>

<template>
  <div class="account">
    <div class="account__header">
      <h3>Balance:</h3>

      <i>
        <HTMLIconPen />
      </i>
    </div>

    <p>123 ₽</p>

    <div class="account__cash-flow">
      <p class="account__cash-flow--income">
        Income
        <br />
        <span>123 ₽</span>
      </p>

      <p class="account__cash-flow--expense">
        Expense
        <br />
        <span>345 ₽</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.account {
  padding: pxToRem(20);
  background: getcolor('grey.base');
  border-radius: pxToRem(5);
  color: #fff;

  &__header {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;

    & i {
      width: pxToRem(20);
      height: pxToRem(20);
      cursor: pointer;
    }
  }

  & > p {
    margin: 0 0 pxToRem(30);
  }

  &__cash-flow {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: pxToRem(8);
    font-size: pxToRem(14);

    &--income {
      border-right: 1px dashed #fff;
      & span {
        color: getcolor('green.base');
      }
    }

    &--expense {
      & span {
        color: getcolor('red.base');
      }
    }
  }
}
</style>
