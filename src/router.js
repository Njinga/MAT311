import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import unit1 from './views/unit1.vue'
import unit2 from './views/unit2.vue'
import unit3 from './views/unit3.vue'
import unit4 from './views/unit4.vue'
import unit5 from './views/unit5.vue'
import unit6 from './views/unit6.vue'
import unit7 from './views/unit5.vue'
import unit8 from './views/unit6.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/unit1',
            name: 'unit1',
            component: unit1
        },
        {
            path: '/unit2',
            name: 'unit2',
            component: unit2
        },
        {
            path: '/unit3',
            name: 'unit3',
            component: unit3
        },
        {
            path: '/unit4',
            name: 'unit4',
            component: unit4
        },
        {
            path: '/unit5',
            name: 'unit5',
            component: unit5
        },
        {
            path: '/unit6',
            name: 'unit6',
            component: unit6
        },
        {
            path: '/unit7',
            name: 'unit7',
            component: unit7
        },
        {
            path: '/unit8',
            name: 'unit8',
            component: unit8
        }
    ]
})
