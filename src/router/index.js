import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/list'
import Personal from '@/components/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
