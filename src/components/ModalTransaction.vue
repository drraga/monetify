<script setup lang="ts">
import { ref, computed } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

import {
  object,
  string,
  number,
  trim,
  pipe,
  optional,
  boolean,
  nonEmpty,
  isoDate,
  safeParse,
  transform,
  union,
  type InferOutput
} from 'valibot'

import InputFloat from '@/components/InputFloat.vue'
import VModal from '@/components/VModal.vue'
import ButtonExpenseControl from '@/components/ButtonExpenseControl.vue'

import { nanoid } from 'nanoid'

import { useToast } from 'vue-toastification'
const toast = useToast()

const SchemaTransaction = object({
  id: optional(string()),
  merchant: pipe(string(), nonEmpty('Enter merchant'), trim()),
  date: pipe(string(), nonEmpty('Enter date'), isoDate('Incorrect date format')),
  amount: pipe(string(), nonEmpty('Enter amount'), trim()),
  category: pipe(string(), trim()),
  description: pipe(string(), trim()),
  isSelected: optional(boolean()),
  isExpense: optional(boolean())
})

type Transaction = InferOutput<typeof SchemaTransaction>

const props = defineProps<{
  formContent: TransactionInputEntity[]
  showDialog: boolean
}>()

const emit = defineEmits<{
  closeDialog: [value: boolean]
  transactionSubmitted: [value: Transaction]
}>()

const closeDialog = () => {
  emit('closeDialog', false)
  clearTransactionInputFields()
}

const assembleTransaction = (validatedInputFields: Transaction): Transaction => {
  return {
    id: nanoid(),
    ...validatedInputFields
  }
}

const assembleValuesFromInputs = computed<Transaction>(() => {
  const amountDecimalTransformed =
    !isNaN(Number(transactionInputFields.value.amount)) &&
    String(transactionInputFields.value.amount).trim() !== ''
      ? String(Math.round(Number(transactionInputFields.value.amount) * 100) / 100)
      : ''

  return {
    merchant: transactionInputFields.value.merchant.trim(),
    date: transactionInputFields.value.date,
    amount: amountDecimalTransformed,
    category: (transactionInputFields.value.category || '').trim(),
    description: (transactionInputFields.value.description || '').trim(),
    isSelected: false,
    isExpense: Number(transactionInputFields.value.amount) < 0
  }
})

const transactionInputFields = ref<Transaction>({
  merchant: '',
  date: '',
  amount: '',
  category: '',
  description: ''
})

const errorMessagesForInput = computed<ValidationErrors>(() => {
  const resultObject: ValidationErrors = {} as ValidationErrors
  const resultParse = safeParse(SchemaTransaction, assembleValuesFromInputs.value)

  if (!resultParse.success) {
    resultParse.issues.forEach((el) => {
      const inputFieldName = el.path?.[0]?.key as TransactionInputFieldName
      const errorMessage = el.message

      ;(resultObject[inputFieldName] ??= []).push(errorMessage)
    })
  }

  return resultObject
})

const clearTransactionInputFields = () => {
  transactionInputFields.value.merchant = ''
  transactionInputFields.value.date = ''
  transactionInputFields.value.amount = ''
  transactionInputFields.value.category = ''
  transactionInputFields.value.description = ''
}

const onSubmit = () => {
  const resultParse = safeParse(SchemaTransaction, assembleValuesFromInputs.value)

  if (!resultParse.success) {
    toast.error('Fields with * are compulsory')
    return
  } else {
    emit('transactionSubmitted', assembleTransaction(resultParse.output))
    closeDialog()
  }
}
</script>

<template>
  <VModal @close="() => closeDialog()">
    <form
      @submit.prevent="onSubmit"
      v-on-click-outside="closeDialog"
      aria-label="New transaction"
      aria-describedby="Enter new transaction"
      class="transaction"
    >
      <fieldset class="transaction__group">
        <legend>Expenses</legend>

        <p class="transaction__group-inputs">
          <template v-for="(input, indx) in props.formContent" :key="input.fieldName">
            <InputFloat
              :input-content="input"
              :is-autofocused="indx === 0"
              v-model:inputValue="
                transactionInputFields[input.fieldName as TransactionInputFieldName]
              "
            >
              <template #error-message>{{
                errorMessagesForInput?.[input.fieldName as TransactionInputFieldName]?.[0]
              }}</template>
            </InputFloat>
          </template>
        </p>
      </fieldset>

      <div class="transaction__save">
        <ButtonExpenseControl button-text="Save" />
      </div>
    </form>
  </VModal>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.transaction {
  position: relative;
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;

  &__group {
    margin: 0 0 1.5rem;

    & legend {
      margin-bottom: pxtorem(22);
      font-size: pxtorem(22);
      font-weight: 600;
    }
  }

  &__group-inputs {
    display: grid;
    gap: 2rem;
  }

  &__save {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
