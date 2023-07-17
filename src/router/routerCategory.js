
//Layouts
import CategoryLayout from "@/components/layouts/CategoryLayout.vue";

//Views
import CategoryView from "@/views/CategoryView.vue";


import DetailCategory from './routerDetailCategory';
import DetailCategoryLayout from "@/components/layouts/DetailCategoryLayout.vue";


export default [
    {
        path: '/categoryLayout',
        name: 'CategoryLayout',
        component: CategoryLayout,
        redirect: '/category',
        children: [
            {
                path: '/category',
                name: 'CategoryView',
                component: CategoryView,
            },
            {
                path: '/category/detail',
                name: 'DetailCategoryLayout',
                component: DetailCategoryLayout,
                children: [
                    ...DetailCategory
                ]
            }
        ]
    },
]