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


app.mount('#app')
