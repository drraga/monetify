<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useExpensesStore } from '@/stores/expenses'

const expensesStore = useExpensesStore()
const { getTransactionHistory, selectedTransactionIds, isAllTransactionsSelected } =
  storeToRefs(expensesStore)

const { selectAllTransactions, clearAllTransactionsSelection } = expensesStore

const tableHeaders = ['date', 'merchant', 'amount', 'category', 'description']

const handleSelectAll = () => {
  if (isAllTransactionsSelected.value) {
    selectAllTransactions()
  } else {
    clearAllTransactionsSelection()
  }
}
</script>

<template>
  <table aria-label="expense list">
    <thead>
      <tr>
        <input type="checkbox" @change="handleSelectAll()" v-model="isAllTransactionsSelected" />

        <th v-for="header in tableHeaders" :key="header" :data-column-name="header">
          {{ header }}
        </th>
      </tr>
    </thead>

    <tbody>
      <template v-for="transaction in getTransactionHistory" :key="transaction.id">
        <tr :class="{ 'is-expence': transaction.isExpense }">
          <input type="checkbox" :value="transaction.id" v-model="selectedTransactionIds" />

          <td v-for="(section, j) in tableHeaders" :key="j" :data-column-name="section">
            {{ transaction[section] }} <span v-if="section === 'amount'">₽</span>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

table {
  & th {
    padding: pxtorem(2);
    text-align: start;
    text-transform: capitalize;
  }

  & tr {
    display: grid;
    padding: pxtorem(5) pxtorem(10);
    gap: pxtorem(5);

    // grid-template-columns: repeat(5, 1fr);
    grid-template-columns: pxtorem(22) pxtorem(120) repeat(4, 1fr);

    // grid-template-columns: 120px 2fr 0.5fr 0.5fr 1fr;

    & [data-column-name='amount'] {
      text-align: end;
    }
  }

  & tbody {
    display: grid;
    gap: pxtorem(5);

    & > tr {
      border-right: 4px solid getcolor('green.base');
      background-color: #fff;

      &.is-expence {
        border-right: 4px solid getcolor('red.base');
      }
    }
  }
}
</style>
