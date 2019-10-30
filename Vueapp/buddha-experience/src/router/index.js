import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import TheData from '@/components/TheData'
import Scale from '@/components/Scale'
import TheBuddha from '@/components/TheBuddha'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'Home',
            component: Home
        },
        {
            path:'/the-data',
            name: 'TheData',
            component: TheData
        },
        {
            path:'/scale',
            name: 'Scale',
            component: Scale
        },
        {
            path:'/boeddha',
            name: 'Buddha',
            component: TheBuddha
        }
    ]
})
