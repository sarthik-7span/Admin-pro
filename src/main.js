import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';
import './assets/style.css';

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history', // Optional: Specify the routing mode (hash or history)
});

Vue.config.productionTip = false


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
