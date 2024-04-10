//import './assets/main.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';

//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './routers/routers.js';

import Dropdown from 'primevue/dropdown'
import Divider from 'primevue/divider'
import Card from 'primevue/card';
import Tree from 'primevue/tree';
import Toast from 'primevue/toast';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.component('Dropdown', Dropdown)
app.component('Divider', Divider)
app.component('Card', Card)
app.component('Tree', Tree)
app.component('Toast', Toast)
app.use(vuetify)
app.mount('#app')

