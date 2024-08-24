import { defineStore } from 'pinia'

interface ExpensesStore {
  transactionHistory: {
    id: string
    /** Date of transaction */
    date: string
    /** Source of income or Seller name */
    merchant?: string
    /** Amount of earning or spending */
    amount: number
    /** Short category */
    category?: string
    /** Long description */
    description?: string
    /** Selection to delete flag */
    isSelected: boolean
    /** Income or expense  flag*/
    isExpense: boolean
  }[]

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
        description: 'coffe',
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
    getTransactionHistory: (state) => state.transactionHistory,
    getSelectedTransactionIds: (state) => state.selectedTransactionIds,
    getAllExpencesAmount: (state) =>
      state.transactionHistory.reduce(
        (acc, transaction) => (transaction.isExpense ? (acc += transaction.amount) : (acc += 0)),
        0
      ),
    getAllIncome: (state) =>
      state.transactionHistory.reduce(
        (acc, transaction) => (!transaction.isExpense ? (acc += transaction.amount) : (acc += 0)),
        0
      ),
    getAllBalance: (state) =>
      state.transactionHistory.reduce((acc, transaction) => (acc += transaction.amount), 0)
  },

  actions: {
    deleteTransactions() {
      if (this.selectedTransactionIds.length) {
        this.transactionHistory = this.transactionHistory.filter(
          (transaction) => this.selectedTransactionIds.indexOf(transaction.id) === -1
        )
      }
      this.selectedTransactionIds.length = 0

      this.isAllTransactionsSelected = false
    },
    selectAllTransactions() {
      this.transactionHistory.forEach((transaction) =>
        this.selectedTransactionIds.push(transaction.id)
      )
    },
    clearAllTransactionsSelection() {
      this.selectedTransactionIds.length = 0
    }
  }
})
