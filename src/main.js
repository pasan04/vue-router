import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import AboutComponent from './components/AboutComponent'
import HomeComponent from './components/HomeComponent'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/about', component: AboutComponent},
        { path: '/home', component: HomeComponent}
    ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')
