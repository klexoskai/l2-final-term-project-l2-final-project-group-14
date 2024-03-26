//import './assets/main.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';


//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown'

const app = createApp(App)
app.use(PrimeVue)
app.component('Dropdown', Dropdown)
app.mount('#app')

