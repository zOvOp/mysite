import "nprogress/nprogress.css"
import NotFound from "@/views/NotFound.vue"
import { start, done, configure } from "nprogress"

configure({
  trickleSpeed: 20,
  showSpinner: false
})

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

function getPageComponent(pageCompResolve) {
  return async () => {
    start()
    if (process.env.NODE_ENV === 'development') {
      await delay(2000)
    }
    const comp = await pageCompResolve()
    done()
    return comp
  }
}

export default [
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() => import(/* webpackChunKName:"home"*/"@/views/Home")),
    meta: {
      title: "首页",
    },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() => import(/* webpackChunKName:"about"*/"@/views/About")),
    meta: {
      title: "关于我",
    },
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() => import(/* webpackChunKName:"blog"*/"@/views/Blog")),
    meta: {
      title: "文章",
    },
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() => import(/* webpackChunKName:"blog"*/"@/views/Blog")),
    meta: {
      title: "文章",
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() => import(/* webpackChunKName:"BlogDetail"*/"@/views/Blog/Detail")),
    meta: {
      title: "文章详情",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() => import(/* webpackChunKName:"project"*/"@/views/Project")),
    meta: {
      title: "项目&效果",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() => import(/* webpackChunKName:"message"*/"@/views/Message")),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  },
];
