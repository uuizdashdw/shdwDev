
//Layouts
import CategoryLayout from "@/components/layouts/CategoryLayout.vue";


//Views
import CategoryView from "@/views/CategoryView.vue";

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
        ]
    }
]