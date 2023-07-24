import AdminLayout from "@/admin/layout/AdminLayout.vue";
import AdminView from "@/admin/view/AdminView.vue";

export default [
    {
        path: '/adminLayout',
        name: 'AdminLayout',
        component: AdminLayout,
        children: [
            {
                path: '/admin',
                name: 'AdminView',
                component: AdminView
            }
        ]

    }
]