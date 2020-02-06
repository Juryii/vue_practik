import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from "./filters/date.filter";
import 'materialize-css/dist/js/materialize.min'
import Vuelidate from "vuelidate/src";
import messagePlugin from './utils/message.plugin'
Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
