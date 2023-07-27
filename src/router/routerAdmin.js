import AdminLayout from "@/admin/layout/AdminLayout.vue";
import AdminView from "@/admin/view/AdminView.vue";
import AdminHtmlView from "@/admin/view/AdminHtmlView.vue";
import AdminCssView from "@/admin/view/AdminCssView.vue";
import AdminJavascriptView from "@/admin/view/AdminJavascriptView.vue";
import AdminTypescriptView from "@/admin/view/AdminTypescriptView.vue";
import AdminFrameworkView from "@/admin/view/AdminFrameworkView.vue";
import AdminCsView from "@/admin/view/AdminCsView.vue";
import AdminTheoryView from "@/admin/view/AdminTheoryView.vue";

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
            },
            {
                path: '/admin/html',
                name: 'AdminHtmlView',
                component: AdminHtmlView
            },
            {
                path: '/admin/css',
                name: 'AdminCssView',
                component: AdminCssView,
            },
            {
                path: '/admin/javascript',
                name: 'AdminJavascriptView',
                component: AdminJavascriptView,
            },
            {
                path: '/admin/typescript',
                name: 'AdminTypescriptView',
                component: AdminTypescriptView,
            },
            {
                path: '/admin/framework',
                name: 'AdminFrameworkView',
                component: AdminFrameworkView,
            },
            {
                path: '/admin/cs',
                name: 'AdminCsView',
                component: AdminCsView,
            },
            {
                path: '/admin/theory',
                name: 'AdminTheoryView',
                component: AdminTheoryView,
            }
        ]

    }
]