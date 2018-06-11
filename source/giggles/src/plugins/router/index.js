import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Fun from '@/components/fun/Fun';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/fun-list/:page',
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
      name: 'Fun',
      component: Fun
    },
    {
      path: '*',
      redirect: '/fun-list/1'
    }
  ],
  mode: 'history'
});
