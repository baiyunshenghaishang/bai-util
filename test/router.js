import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './Main'
import Validate from './Validate'

Vue.use(VueRouter)

export const routes = [
    {
        path: '',
        redirect: '/main',
    },
    {
        path: '/main',
        component: Main,
    },
    {
        path: '/validate',
        component: Validate,
    },
]

const router = new VueRouter({
    routes,
})

export default router
