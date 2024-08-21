<script setup lang="ts">
import { ref } from 'vue'

const sidePaneElements = [
  {
    title: 'Dashboard',
    svg: ''
  },
  {
    title: 'Accounts',
    svg: ''
  },
  {
    title: 'Transactions',
    svg: ''
  }
]

const isModalOpen = ref(false)
const toggleModal = () => (isModalOpen.value = !isModalOpen.value)

const currencies = {
  RUB: '₽',
  USD: '$'
}
const totalBalance = ref({
  amount: 200000,
  currency: 'RUB'
})
const expenses = ref([
  {
    date: '',
    merchantName: '5',
    amount: 300,
    currency: 'RUB',
    category: '',
    description: ''
  }
])
</script>

<template>
  <div class="expense">
    <div class="sidepane">
      <div class="sidepane__header">
        <p>user name</p>
      </div>

      <nav class="sidepane__nav">
        <ul>
          <li v-for="page in sidePaneElements" :key="page.title">
            <a :href="page.title.toLowerCase()">
              <p>{{ page.title }}</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="content-wrapper">
      <div class="content-header">
        <h1>Expenses</h1>
        <button @click="toggleModal()" class="content-header__entry-toggle">Create expense</button>
      </div>

      <div class="content__expense-list">
        <div v-if="isModalOpen" class="content__modal">
          <div class="content__modal-wrapper">
            <label for="">
              <input type="text" />
            </label>

            <label for="">
              <input type="text" />
            </label>
          </div>
        </div>

        <div class="accounts-total">
          <div class="account">
            <h3>Your balance:</h3>
            <p>{{ totalBalance.amount }} {{ currencies[totalBalance.currency] }}</p>
          </div>
        </div>

        <div>
          <h3>History</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.sidepane {
  position: fixed;
  left: 0;
  block-size: 100vh;
  inline-size: pxToRem(230);
  background-color: getcolor('green.darken2');
}

.content-wrapper {
  margin: 0 0 0 230px;
  padding: 20px;
}

.content-header {
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-content: center;
  border-bottom: solid 1px #ebe6df;
  font-size: pxToRem(26);
  padding: 0 0 pxToRem(20);

  &__entry-toggle {
    font-family: inherit;
    padding: pxToRem(4) pxToRem(28) pxToRem(4) pxToRem(24);
    border: none;
    border-radius: pxToRem(32);
    cursor: pointer;
    color: #fff;
    background: getcolor('green.lighten2');
  }
}

.content__expense-list {
  position: relative;
}

.content__modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  opacity: 0.3;
  inset: 0;
  width: calc(100vi - pxToRem(230));
  height: 100vh;
}
.content__modal-wrapper {
  padding: 20px;
  background: aqua;
  width: 300px;
  height: 300px;
}

.accounts-total {
  &::after {
    border-bottom: 1px solid #ebe6df;
  }
}
</style>
