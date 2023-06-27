
// Layouts
import HomeLayout from "@/components/layouts/HomeLayout.vue";


// Views

import HomeView from "@/views/HomeView.vue";

export default [
    {
        path: '/',
        name: 'HomeLayout',
        component: HomeLayout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'HomeView',
                component: HomeView,
            }
        ]
    }
]