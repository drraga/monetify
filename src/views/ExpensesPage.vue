<script setup lang="ts">
import { ref } from 'vue'

import { storeToRefs } from 'pinia'
import { useExpensesStore } from '@/stores/expenses'
const expensesStore = useExpensesStore()
const { selectedTransactionIds } = storeToRefs(expensesStore)
const { deleteTransactions } = expensesStore

import CardAccount from '@/components/CardAccount.vue'
import ButtonExpenseControl from '@/components/ButtonExpenseControl.vue'
import ExpensList from '@/components/ExpensList.vue'

import ModalTransaction from '@/components/ModalTransaction.vue'

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

const modalInputFields = [
  {
    fieldName: 'Merchant',
    textType: 'text',
    isRequired: true
  },
  {
    fieldName: 'Date',
    textType: 'date',
    isRequired: true
  },
  {
    fieldName: 'Amount',
    textType: 'number',
    isRequired: true
  },
  {
    fieldName: 'Category',
    textType: 'text',
    isRequired: false
  },
  {
    fieldName: 'Description',
    textType: 'text',
    isRequired: false
  }
]

const isModalOpen = ref(false)

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

        <div class="content-header__actions">
          <Transition name="slide">
            <ButtonExpenseControl
              v-if="selectedTransactionIds.length"
              @click="deleteTransactions()"
              button-text="Delete"
              :is-red="true"
            />
          </Transition>

          <ButtonExpenseControl @click="isModalOpen = true" button-text="Create expense" />
        </div>
      </div>

      <div class="content__expense-list">
        <Teleport to="body">
          <ModalTransaction
            @close-dialog="(value: boolean) => (isModalOpen = value)"
            :input-fields="modalInputFields"
            :show-dialog="isModalOpen"
          >
            <template #header> Expenses </template>
          </ModalTransaction>
        </Teleport>

        <div class="accounts-total">
          <div class="accounts-total__wrapper">
            <template v-for="(_, index) in 1" :key="index">
              <CardAccount class="accounts-total__card" />
            </template>
          </div>
        </div>

        <div class="expense-table">
          <h3>History</h3>

          <ExpensList />
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

  &__actions {
    display: flex;
    gap: pxtorem(5);

    & .slide-enter-active,
    .slide-leave-active {
      transition: all 0.3s ease-out;
    }

    & .slide-enter-from {
      opacity: 0;
      transform: translateY(30px);
    }

    & .slide-leave-to {
      opacity: 0;
      transform: translateY(-30px);
    }
  }
}

.content__expense-list {
  position: relative;
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

.expense-table {
  padding: pxtorem(10);
  background-color: getcolor('grey.lighten1');

  & h3 {
    margin: 0 0 pxtorem(16);
    font-size: pxtorem(22);
  }
}
</style>
