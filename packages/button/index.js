import button from './src/button.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

button.install = function (Vue) {
    Vue.use(ElementUI);
    Vue.component(button.name, button)
}

export default button