import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Medical from '@/views/Medical.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/medical',
            name: 'medical',
            component: Medical
        },
        {
            path: '/gene',
            name: 'gene',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '@/views/Gene.vue')
        },
        {
            path: '/family',
            name: 'family',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '@/views/Family.vue')
        },
    ]
})
