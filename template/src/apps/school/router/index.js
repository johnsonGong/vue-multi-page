import Vue from 'vue'
import Router from 'vue-router'
import Home from '@apps/school/pages/Home'
import Detail from '@apps/school/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})