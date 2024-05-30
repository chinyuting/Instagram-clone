// import './assets/main.css'

import { createApp } from 'vue'
import axios from 'axios';
import { createPinia } from 'pinia'
import LoadingOverlay from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css';
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import "./assets/all.scss";

import VueAxios from 'vue-axios';

import './mock/mock'

const app = createApp(App)

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.component('LoadingOverlay', LoadingOverlay)
app.mount('#app');
app.config.globalProperties.$axios=axios;  


