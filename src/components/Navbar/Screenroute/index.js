import {createRouter, createWebHistory} from 'vue-router';
import Home from '../../Screen/Home.vue';
import Portofolio from '../../Screen/Portofolio.vue'
import AboutMe from '../../Screen/AboutMe';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            alias: '/',
            component: Home
        },
        {
            path: '/portofolio',
            name: 'Portofolio',
            component: Portofolio
        },
        {
            path: '/aboutme',
            name: 'About Me',
            component: AboutMe
        }
    ]
})

export default router
