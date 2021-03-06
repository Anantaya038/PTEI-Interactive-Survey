import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueCarousel from 'vue-carousel';
import VueSweetalert2 from 'vue-sweetalert2';
import './registerServiceWorker'

Vue.use(VueSweetalert2);
Vue.use(VueCarousel);
Vue.use(VueFormWizard)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
