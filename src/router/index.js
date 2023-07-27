import { createRouter, createWebHistory } from 'vue-router'

import Home from './routerHome';
import Category from './routerCategory';
import Visitor from './routerVisitor';
// import DetailCategory from './routerDetailCategory';

import Admin from './routerAdmin';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ...Home,
      ...Category,
      ...Visitor,
      // ...DetailCategory,
      ...Admin,
  ]
})

export default router

router.beforeEach(async (to) => {
    const adminPage = ['/admin','/admin/html','/admin/css','/admin/javascript','/admin/typescript','/admin/framework','/admin/cs','/admin/theory'];

    const adminRequired = adminPage.includes(to.path);

    const admin = document.cookie.includes('adminId');

    if(adminRequired && admin === false) {
        return '/home';
    }
})