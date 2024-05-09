// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Import your Home component
import Restaurants from '../views/Restaurants.vue'; // Import your Restaurants component
import Contact from '../views/Contact.vue'; // Import your Contact component
import FAQs from '../views/FAQs.vue'; // Import your FAQ component
import Wolfgang from '../views/Wolfgang.vue'; 
import China from '@/views/China.vue';
import Gallery from '@/views/Gallery.vue';
import Senju from '@/views/Senju.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/restaurants', component: Restaurants },
  { path: '/contact', component: Contact },
  { path: '/faq', component: FAQs },
  { path: '/wolfgang', component: Wolfgang },
  { path: '/china', component: China },
  { path: '/gallery', component: Gallery },
  { path: '/senju', component: Senju },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
