// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import PrimeVue from 'primevue/config';
// import Rating from 'primevue/rating';
// import 'primevue/resources/themes/saga-blue/theme.css';       //theme
// import 'primevue/resources/primevue.min.css';                 //core css
// import 'primeicons/primeicons.css';                           //icons

// const app = createApp(App);

// app.use(PrimeVue);
// app.component('Rating', Rating);

// app.mount('#app');

//createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

// Import styles
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);

app.mount('#app');