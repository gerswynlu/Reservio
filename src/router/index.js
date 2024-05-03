// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Import your Home component
import Restaurants from '../components/Restaurants.vue'; // Import your Restaurants component
import Contact from '../components/Contact.vue'; // Import your Contact component
import FAQ from '../components/FAQs.vue'; // Import your FAQ component

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
