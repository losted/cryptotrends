import Vue from 'vue'
import Router from 'vue-router'
import CryptoTop100 from '@/components/CryptoTop100'
import XRPTrends from '@/components/XRPTrends'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CryptoTop100',
            component: CryptoTop100,
            props: { activeIndex: 1 }
        },
        {
            path: '/xrp-trends',
            name: 'XRPTrends',
            component: XRPTrends,
            props: { activeIndex: 2 }
        },
        {
            path: '/info',
            name: 'Info',
            component: Info,
            props: { activeIndex: 3 }
        }
    ]
})
