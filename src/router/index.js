import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/LandingPage'
import Momento from '@/components/momento'
import Interstellar from '@/components/interstellar'
import Insomnia from '@/components/insomnia'
import BatmanB from '@/components/batmanBegins'
import Prestige from '@/components/prestige'
import DarkKnight from '@/components/darkKnight'
import Inception from '@/components/inception'
import Rises from '@/components/darkKnightRises'
import Dunkirk from '@/components/dunkirk'

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
        },
        {
            path: '/Interstellar',
            name: 'Interstella',
            component: Interstellar
        },
        {
            path: '/Insomnia',
            name: 'Insomnia',
            component: Insomnia
        },
        {
            path: '/BatmanBegins',
            name: 'BatmanBegins',
            component: BatmanB
        },
        {
            path: '/Prestige',
            name: 'Prestige',
            component: Prestige
        },
        {
            path: '/TheDarkKnight',
            name: 'DarkKnight',
            component: DarkKnight
        },
        {
            path: '/Inception',
            name: 'Inception',
            component: Inception
        },
        {
            path: '/TheDarkKnightRises',
            name: 'Rises',
            component: Rises
        },
        {
            path: '/Dunkirk',
            name: 'Dunkirk',
            component: Dunkirk
        },
    ]
})
