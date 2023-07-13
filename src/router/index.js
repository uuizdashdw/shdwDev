import { createRouter, createWebHistory } from 'vue-router'

import Home from './routerHome';
import Category from './routerCategory';
import Visitor from './routerVisitor';
import Html from './routerHtml';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ...Home,
      ...Category,
      ...Visitor,
      ...Html,
  ]
})

export default router