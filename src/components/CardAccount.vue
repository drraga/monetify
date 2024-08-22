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
  padding: pxtorem(20);
  border-radius: pxtorem(5);
  background: getcolor('grey.base');
  color: #fff;

  &__header {
    display: grid;
    justify-content: space-between;
    grid-template-columns: max-content max-content;

    & i {
      width: pxtorem(20);
      height: pxtorem(20);
      cursor: pointer;
    }
  }

  & > p {
    margin: 0 0 pxtorem(30);
  }

  &__cash-flow {
    display: grid;
    font-size: pxtorem(14);
    gap: pxtorem(8);
    grid-template-columns: repeat(2, 1fr);

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
