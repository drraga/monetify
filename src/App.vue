<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import { useExpensesStore } from '@/stores/expenses'
const expenses = useExpensesStore()
const { loadFromLocalStorage } = expenses

onMounted(() => {
  loadFromLocalStorage()
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav></nav>
    </div>
  </header>

  <RouterView />
</template>
