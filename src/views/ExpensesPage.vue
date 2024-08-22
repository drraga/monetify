<script setup lang="ts">
import { ref } from 'vue'

import CardAccount from '@/components/CardAccount.vue'

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
  },
  {
    title: 'Expenses',
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
          <div class="accounts-total__wrapper">
            <template v-for="(_, index) in 1" :key="index">
              <CardAccount class="accounts-total__card" />
            </template>
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
  background-color: getcolor('green.darken2');
  block-size: 100vh;
  inline-size: pxtorem(230);
}

.content-wrapper {
  padding: pxtorem(20);
  margin: 0 0 0 pxtorem(230);
}

.content-header {
  display: grid;
  padding: 0 0 pxtorem(20);
  border-bottom: solid 1px #ebe6df;
  margin: 0 0 pxtorem(20);
  font-size: pxtorem(26);
  grid-template-columns: max-content max-content;
  place-content: center space-between;

  &__entry-toggle {
    padding: pxtorem(4) pxtorem(28) pxtorem(4) pxtorem(24);
    border: none;
    border-radius: pxtorem(32);
    background: getcolor('green.lighten2');
    color: #fff;
    cursor: pointer;
    font-family: inherit;
  }
}

.content__expense-list {
  position: relative;
}

.content__modal {
  position: absolute;
  display: flex;
  width: calc(100vi - pxtorem(230));
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: gray;
  inset: 0;
  opacity: 0.3;
}

.content__modal-wrapper {
  width: 300px;
  height: 300px;
  padding: 20px;
  background: aqua;
}

.accounts-total {
  overflow: hidden;
  border-radius: pxtorem(5);
  margin: 0 0 pxtorem(20);

  &__wrapper {
    display: flex;
    overflow: hidden;
    padding: 0 0 pxtorem(20);
    margin: 0 0 pxtorem(-20);
    gap: pxtorem(6);
    overflow-x: auto;
  }

  &__card {
    flex: 0 0 pxtorem(250);
  }
}
</style>
