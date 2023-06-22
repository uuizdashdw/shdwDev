import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import homeLayout from "@/components/layouts/HomeLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeLayout',
      component: homeLayout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
        }
      ]
    },

  ]
})

export default router
