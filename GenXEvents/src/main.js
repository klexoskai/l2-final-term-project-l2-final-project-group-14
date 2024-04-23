import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/routers.js';
import PrimeVue from 'primevue/config'; // Import PrimeVue config

// Import PrimeVue components
import Dropdown from 'primevue/dropdown';
import Divider from 'primevue/divider';
import Card from 'primevue/card';
import Tree from 'primevue/tree';
import Toast from 'primevue/toast';

// Import PrimeVue CSS files
import 'primevue/resources/themes/aura-light-amber/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Import MDB Vue UI Kit CSS file
import 'mdb-vue-ui-kit/css/mdb.min.css';

const app = createApp(App);

// Use PrimeVue plugin
app.use(PrimeVue);

// Register global PrimeVue components
app.component('Dropdown', Dropdown);
app.component('Divider', Divider);
app.component('Card', Card);
app.component('Tree', Tree);
app.component('Toast', Toast);

// Use Vue Router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
