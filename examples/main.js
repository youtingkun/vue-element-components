import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入组件库
import ytkComponent from './../packages/index'

Vue.use(ElementUI);
Vue.use(ytkComponent)


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
