import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../Screen/Home.vue';
import Portofolio from '../../Screen/Portofolio.vue'
import AboutMe from '../../Screen/AboutMe';

const routes = [
    {
        path: '/home',
        alias: '/',
        component: Home,
        meta: {
            title: 'Home',
        }
    },
    {
        path: '/portofolio',
        name: 'Portofolio',
        component: Portofolio,
        meta: {
            title: 'Portofolio',
        }
    },
    {
        path: '/aboutme',
        name: 'About Me',
        component: AboutMe,
        meta: {
            title: 'About Me',
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return
        } else {
            return {
                x: 0,
                y: 0,
                behavior: "smooth"
            }
        }
    }
})

router.beforeEach((to, from, next) => {
    let documentTitle = `${to.meta.title} | ${process.env.VUE_APP_TITLE}`
    if (to.params.title) {
        documentTitle = `${to.params.title} | ${process.env.VUE_APP_TITLE}`
    }
    document.title = documentTitle
    next();
})

export default router
