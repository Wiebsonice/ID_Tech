import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TheData from '@/components/TheData'
import Scale from '@/components/Scale'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'Hello',
            component: HelloWorld
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
        }
    ]
})
