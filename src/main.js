import Vue from 'vue';
import io from 'socket.io-client';
import moment from 'moment';
import VueSocketIOExt from 'vue-socket.io-extended';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/router';
import store from './store';

const socket = io('http://localhost:8080/');

Vue.use(VueSocketIOExt, socket);
Vue.prototype.moment = moment;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
