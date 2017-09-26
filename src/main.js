// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Hello.vue'
import List from './components/list.vue'
import Personal from './components/personal.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/list',
  component: List
}, {
  path: '/personal',
  component: Personal
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
