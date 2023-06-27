import HtmlLayout from "@/components/layouts/HtmlLayout.vue";

import HtmlView from "@/views/HtmlView.vue";

export default [
    {
        path: '/html',
        name: 'HtmlLayout',
        component: HtmlLayout,
        redirect: '/html',
        children: [
            {
                path: '/html',
                name: 'HtmlView',
                component: HtmlView,
            }
        ]
    }
]