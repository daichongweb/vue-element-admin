import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

// 防止多次点击同一个路由造成的错误
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 路由配置
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        { path: '/Home', component: () => import('@/components/used/Table'), name: 'Table' },
        { path: '/Form', component: () => import('@/components/used/Form'), name: 'Form' },
        { path: '/Calendar', component: () => import('@/components/used/Calendar'), name: 'Calendar' },
        { path: '/PostForm', component: () => import('@/components/data/PostForm'), name: 'PostForm' },
        { path: '/PostList', component: () => import('@/components/data/PostList'), name: 'PostList' },
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('@/components/start/Login')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/components/start/Login')
    },
    {
      path: '/404',
      name: 'notFound',
      component: () => import('@/components/layout/html/404')
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
})

