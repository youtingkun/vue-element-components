// 导入按钮组件
import ytkButton from "./button";
import countDown from "./count-down";

// 存储组件列表
const components = [ytkButton, countDown];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = async function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // const { isUseElement } = opts;
  // if (isUseElement) {
  //     const elementUI = await import("element-ui");
  //     Vue.use(elementUI);
  // }
  // 遍历注册全局组件
  components.forEach((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ytkButton,
  countDown,
};
