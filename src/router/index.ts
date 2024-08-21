import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
// import ExpensesPage from '@/views/ExpensesPage.vue'

// TODO delete unnecessary imports

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: () => import('../views/ExpensesPage.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
