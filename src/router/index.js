import { createRouter, createWebHistory } from 'vue-router'

import Home from './routerHome';
import Html from './routerHtml';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ...Home,
      ...Html,
  ]
})

export default router
