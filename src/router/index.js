import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Records from '@/views/Records'
import Rules from '@/views/Rules'
import Articles from '@/views/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/records',
      name: 'records',
      component: Records
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    }
  ]
})
