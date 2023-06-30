
//Layout
import VisitorLayout from "@/components/layouts/VisitorLayout.vue";

//View
import VisitorView from "@/views/VisitorView.vue";

export default [
    {
        path: '/visitor',
        name: 'VisitorLayout',
        component: VisitorLayout,
        redirect: '/visitor',
        children: [
            {
                path: '/visitor',
                name: 'VisitorView',
                component: VisitorView,
            }
        ]
    }
]