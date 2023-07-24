import "./index.css"
import "tailwindcss/tailwind.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/scss/index.scss";

import App from './App.vue'
import router from './router'

import mitt from 'mitt';

let emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(createPinia())
app.use(router)


import 'aos/dist/aos.css';

import VueCookies from 'vue-cookies';
app.use(VueCookies, {
    expires: '7d',
    path: "/admin",
    domain: "",
    secure: true,
    sameSite: "none"
});


import BackToCategory from "@/components/BackToCategory.vue";
app.component('BackToCategory', BackToCategory);


import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#1ABC9C',
}

app.use(VueSweetalert2, options);


app.mount('#app')
