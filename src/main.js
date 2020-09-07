
/***************************************vue引入：****************************/
import Vue from "vue";
import Vuex from "vuex";


/***************************************vant组件引入：****************************/
import Vant from "vant"; // 引入vant组件库
import "vant/lib/index.css"; // 引入vant样式

/***************************************element组件引入****************************/
import ElementUI from 'element-ui';  //引入emement组件库
import 'element-ui/lib/theme-chalk/index.css';  // 引入element样式
import { Message } from 'element-ui';

/***************************************本地组件或者样式引入：****************************/
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "../src/utils/dynamicAxios";
import changeFontSize from "./setHtmlFontSize";
import { responseCode } from "../src/utils/responseCode"; // 引入后端返回code码
import css from "./css/index.css";// 引入自定义公共样式

/***************************************外部包引入：****************************/
import touch from "vue-directive-touch"; // 滑动：长按，左右划等
import "lib-flexible"; // 引入 flexible用于适配不同屏幕移动端显示
import echarts from "echarts"; // 引入echarts用于图表展示
import vConsole from 'vconsole' // 引入手机调试神器

// vue页面组件使用：
Vue.use(Vuex);
Vue.use(touch);
Vue.use(Vant);
Vue.use(ElementUI);


// vue页面属性使用：
Vue.config.productionTip = false; // 为true时加载后控制台多现实一行文字，说明是开发模式
Vue.prototype.$axios = axios; // 全局挂载axios
Vue.prototype.$echarts = echarts; // 全局挂载echarts

Vue.prototype.$responseCode = responseCode; // 全局挂载返回的code码
Vue.prototype.$message = Message; // 顶部提示设置位vue方法

Vue.prototype.$changeFontSize = new changeFontSize(); // 全局挂载修改字体大小的js
Vue.prototype.$vConsole = new vConsole(); // 全局使用this.$vConsole
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");



