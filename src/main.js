import './assets/main.css'
import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const app = createApp(App)

app
    .use(axios)
    .use(Toast)
    .use(createPinia())
    .mount('#app')
