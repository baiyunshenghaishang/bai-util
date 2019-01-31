import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './Main'
import Validate from './Validate'
import Format from './Format'

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
    {
        path: '/format',
        component: Format,
    },
]

const router = new VueRouter({
    routes,
})

export default router
