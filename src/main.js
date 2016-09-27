import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vueResource from 'vue-resource';

Vue.use(vueResource);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
