import { createMemoryHistory, createRouter } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import FetchPage from '../pages/FetchPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/fetch', component: FetchPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
