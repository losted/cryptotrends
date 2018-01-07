// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/App'
import router from './router'
import CryptoTop100 from '@/components/CryptoTop100'
import XRPTrends from '@/components/XRPTrends'
import Info from '@/components/Info'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App, 'crypto-top100': CryptoTop100, XRPTrends, Info, Element }
})
