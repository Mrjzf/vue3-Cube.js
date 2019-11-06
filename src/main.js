import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './cube-ui'
import './registerServiceWorker'
import 'amfe-flexible'

Vue.config.productionTip = false

// 设置路由变化修改页面title
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
