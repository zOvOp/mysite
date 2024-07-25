//入口文件
// import "./mock"
import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import store from "./store"

import showMessage from "./utils/showMessage";
import "@/eventBus"

Vue.prototype.$showMessage = showMessage

store.dispatch("setting/fetchSetting")

// 注册全局指令
import vLoading from "@/directives/loading"
Vue.directive("loading", vLoading)
import vLazy from "@/directives/lazy"
Vue.directive("lazy", vLazy)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')