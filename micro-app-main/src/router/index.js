import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const frameOut = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue')
  }
]

const frameIn = [
  {
    path: '/app/*',
    name: 'App',
    component: () => import('@/pages/layout/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/layout/index.vue'),
    redirect: '/main',
    children: [
      {
        path: 'main',
        name: 'Main',
        component: () => import(/* webpackChunkName: "main" */ '@/views/home.vue')
      }
    ]
  }
]

// 缓存原型上的push函数
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

// 给原型对象上的push指定新函数函数
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  // 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
  if (onComplete === undefined && onAbort === undefined) {
    return originPush.call(this, location, onComplete, onAbort).catch(() => {})
  } else {
    // 如果有指定任意回调函数, 通过call调用源push函数处理
    originPush.call(this, location, onComplete, onAbort)
  }
}

// replace同理处理
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete === undefined && onAbort === undefined) {
    return originReplace.call(this, location, onComplete, onAbort).catch(() => {})
  } else {
    originReplace.call(this, location, onComplete, onAbort)
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: frameOut.concat(frameIn)
})

export default router
