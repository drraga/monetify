interface Transaction {
  id?: string
  /** Source of income or Seller name */
  merchant: string
  /** Date of transaction */
  date: string
  /** Amount of earning or spending */
  amount: string | number
  /** Short category */
  category?: string
  /** Long description */
  description?: string
  /** Selection to delete flag */
  isSelected?: boolean
  /** Income or expense  flag*/
  isExpense?: boolean
}

interface TransactionInputEntity {
  fieldName: string
  textType: string
  label: string
  placeholder: string
  errorMessage: string | null
  pattern: RegExp | null
  minLength: number | null
  maxLength: number | null
  isRequired: boolean
}

/** Transaction input fields naming */
type TransactionInputFieldName = 'date' | 'merchant' | 'amount' | 'category' | 'description'

/** Error messages */
type ValidationErrors = Record<TransactionInputFieldName, string[]>
