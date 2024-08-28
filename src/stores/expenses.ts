import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
const toast = useToast()

interface ExpensesStore {
  transactionHistory: Transaction[]

  selectedTransactionIds: string[]

  isAllTransactionsSelected: boolean
}

export const useExpensesStore = defineStore('expenses', {
  state: (): ExpensesStore => ({
    transactionHistory: [
      {
        id: '1',
        date: '2024 08 20',
        merchant: '5',
        amount: -130,
        category: 'Food',
        description: 'coffe with friends',
        isSelected: false,
        isExpense: true
      },
      {
        id: '2',
        date: '2024 08 20',
        merchant: '5',
        amount: -35,
        category: 'Food',
        description: 'coffe',
        isSelected: false,
        isExpense: true
      },
      {
        id: '23',
        date: '2024 08 21',
        merchant: 'Salary',
        amount: 40000,
        description: '',
        isSelected: false,
        isExpense: false
      }
    ],
    selectedTransactionIds: [],
    isAllTransactionsSelected: false
  }),

  getters: {
    getTransactionHistory: (state) => {
      return state.transactionHistory
    },
    getSelectedTransactionIds: (state) => state.selectedTransactionIds,
    getAllExpencesAmount: (state) =>
      state.transactionHistory.reduce(
        (acc, transaction) =>
          transaction.isExpense && transaction.amount ? (acc += transaction.amount) : (acc += 0),
        0
      ),
    getAllIncome: (state) =>
      state.transactionHistory.reduce(
        (acc, transaction) =>
          !transaction.isExpense && transaction.amount ? (acc += transaction.amount) : (acc += 0),
        0
      ),
    getAllBalance: (state) =>
      state.transactionHistory.reduce(
        (acc, transaction) => (transaction.amount ? (acc += transaction.amount) : (acc += 0)),
        0
      )
  },

  actions: {
    saveTransactionsToLocalStorage() {
      localStorage.setItem('transactionHistory', JSON.stringify(this.transactionHistory))
    },
    loadFromLocalStorage() {
      const localStorageHistory = localStorage.getItem('transactionHistory')
      // localStorage is empty array only
      const regexp = /^\[\]$/
      if (localStorageHistory && !regexp.test(localStorageHistory)) {
        // if localStorage not only empty array
        this.transactionHistory = JSON.parse(localStorageHistory)
      }
    },
    deleteTransactions() {
      if (this.selectedTransactionIds.length) {
        this.transactionHistory = this.transactionHistory.filter((transaction) => {
          if (transaction.id) {
            return this.selectedTransactionIds.indexOf(transaction.id) === -1
          }
        })
      }

      this.selectedTransactionIds.length > 1
        ? toast.success('Selected transactions deleted')
        : toast.success('Selected transaction deleted')

      this.selectedTransactionIds.length = 0

      this.saveTransactionsToLocalStorage()

      this.isAllTransactionsSelected = false
    },
    selectAllTransactions() {
      this.transactionHistory.forEach((transaction) => {
        if (transaction.id) {
          return this.selectedTransactionIds.push(transaction.id)
        }
      })
    },
    clearAllTransactionsSelection() {
      this.selectedTransactionIds.length = 0
    },
    addTransaction(transaction: Transaction) {
      this.transactionHistory.push(transaction)
      this.saveTransactionsToLocalStorage()
      toast.success('Transaction created')
    }
  }
})
