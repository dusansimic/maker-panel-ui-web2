import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMapMarkedAlt,
  faInfoCircle,
  faCogs,
  faFilter,
  faTachometerAlt,
  faPlus,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueApexCharts from 'vue-apexcharts'
import router from './router'

library.add({
  faMapMarkedAlt,
  faInfoCircle,
  faCogs,
  faFilter,
  faTachometerAlt,
  faPlus,
  faTrash
})

Vue.use(BootstrapVue)
Vue.component('ApexChart', VueApexCharts)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
