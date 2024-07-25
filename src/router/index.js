import VueRouter from 'vue-router'
import Vue from 'vue';
import routes from './routes';

import { titleController } from '@/utils';

if (!window.VueRouter) {
  Vue.use(VueRouter)
}


const router = new VueRouter({
  //配置
  mode: "history",
  routes,//路由匹配规则
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }

})


export default router;