import Vue from 'vue';
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import App from './App.vue';
import router from './router/router';
import store from './store';
import vuetify from './plugins/vuetify';

const socket = io('http://localhost:8080/');

Vue.use(VueSocketIOExt, socket);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
