//import './assets/main.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';

//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './routers/routers.js';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app');
import Dropdown from 'primevue/dropdown'
app.component('Dropdown', Dropdown)