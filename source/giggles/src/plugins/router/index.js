import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import FunDetail from '@/components/fun/FunDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:page',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/fun/:id',
      name: 'FunDetail',
      component: FunDetail
    }
  ],
  mode: 'history'
})
