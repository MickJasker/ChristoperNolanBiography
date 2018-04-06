import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/LandingPage'
import Momento from '@/components/momento'
import Interstellar from '@/components/interstellar'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/Momento',
            name: 'Momento',
            component: Momento
        },{
            path: '/Interstellar',
            name: 'Interstella',
            component: Interstellar
        },{
            path: '/Momento',
            name: 'Momento',
            component: Momento
        },
    ]
})
