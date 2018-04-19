import Vue from 'vue'
import Router from 'vue-router'
import Home from '@apps/teacher/pages/Home'
import Detail from '@apps/teacher/pages/Detail'

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
