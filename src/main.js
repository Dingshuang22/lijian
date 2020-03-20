// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './plugins/vuex'

Vue.config.productionTip = false

// 引入axios
import axios from './plugins/ajax'
Vue.prototype.$axios = axios;

// 引入样式
import '@/styles/index.scss'

// 引入element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import { Button, Select ,Pagination,Loading} from 'element-ui';
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
