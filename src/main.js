import Vue from 'vue';
import App from './App.vue';
import store from './store';
import currency from './currency';
import vueResource from 'vue-resource';

Vue.use(vueResource);
//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.filter('currency', currency);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
