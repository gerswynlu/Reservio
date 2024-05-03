// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Import your Home component
import Restaurants from '../views/Restaurants.vue'; // Import your Restaurants component
import Contact from '../views/Contact.vue'; // Import your Contact component
import FAQ from '../views/FAQ.vue'; // Import your FAQ component

const routes = [
  { path: '/', component: Home },
  { path: '/restaurants', component: Restaurants },
  { path: '/contact', component: Contact },
  { path: '/faq', component: FAQ }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
