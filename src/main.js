import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue'; // Adjust the import path for App.vue
import router from './router'; // Adjust the import path for your router configuration

createApp(App) // Create a new Vue app instance with App.vue as the root component
  .use(router) // Use the router configuration
  .mount('#app'); // Mount the app to the '#app' element in index.html
