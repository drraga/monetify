interface Transaction {
  id?: string
  /** Date of transaction */
  date: string
  /** Source of income or Seller name */
  merchant: string
  /** Amount of earning or spending */
  amount: number | null
  /** Short category */
  category?: string
  /** Long description */
  description?: string
  /** Selection to delete flag */
  isSelected?: boolean
  /** Income or expense  flag*/
  isExpense?: boolean
}

/** Поля input ля ввода транзакций */
type transactionInputFields = 'date' | 'merchant' | 'amount' | 'category' | 'description'
