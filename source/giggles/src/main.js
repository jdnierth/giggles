// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './plugins/router';
// Required otherwise first load doesn't work
import VueResource from './plugins/vue-resource';

import Nav from '../node_modules/bootstrap-vue/es/components/nav';
import Navbar from '../node_modules/bootstrap-vue/es/components/navbar';

Vue.use(Nav);
Vue.use(Navbar);

import Menu from '@/components/shared/Menu';
import Footer from '@/components/shared/Footer';
import FunList from '@/components/FunList';
import Pagination from '@/components/shared/Pagination';

Vue.config.productionTip = false;

Vue.component('app-menu', Menu);
Vue.component('app-footer', Footer);
Vue.component('app-fun', FunList);
Vue.component('app-pagination', Pagination);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
