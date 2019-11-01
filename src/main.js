// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './components/layout/css/common/app.scss';

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

// 路由钩子
router.beforeEach((to, from, next) => {
  if (to.path == '/Login') {
    sessionStorage.removeItem('user');
  }

  let user = sessionStorage.getItem('user');
  if (!user && to.path != '/Login') {
    next({ path: '/Login' })
  } else {
    next()
  }
})