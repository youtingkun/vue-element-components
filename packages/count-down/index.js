import countDown from "./src/count-down.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

countDown.install = function(Vue) {
  Vue.use(ElementUI);
  Vue.component(countDown.name, countDown);
};

export default countDown;
