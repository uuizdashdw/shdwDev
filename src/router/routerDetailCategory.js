import HtmlView from "@/views/HtmlView.vue";
import CssView from "@/views/CssView.vue";
import JavascriptView from "@/views/JavascriptView.vue";
import TypescriptView from "@/views/TypescriptView.vue";
import FrameworkView from "@/views/FrameworkView.vue";
import CsView from "@/views/CsView.vue";
import TheoryView from "@/views/TheoryView.vue";


export default [
    {
        path: '/category/detail/html',
        name: 'HtmlView',
        component: HtmlView,
    },
    {
        path: '/category/detail/css',
        name: 'CssView',
        component: CssView,
    },
    {
        path: '/category/detail/javascript',
        name: 'JavascriptView',
        component: JavascriptView,
    },
    {
        path: '/category/detail/typescript',
        name: 'TypescriptView',
        component: TypescriptView,
    },
    {
        path: '/category/detail/framework',
        name: 'FrameworkView',
        component: FrameworkView,
    },
    {
        path: '/category/detail/cs',
        name: 'CsView',
        component: CsView,
    },
    {
        path: '/category/detail/theory',
        name: 'TheoryView',
        component: TheoryView,
    }
]