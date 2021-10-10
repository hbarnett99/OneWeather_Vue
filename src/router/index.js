import {createRouter, createWebHistory} from 'vue-router';
import About from '@/views/About';
import Home from "@/views/Home";
import Stars from "@/views/Stars";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/stars',
    name: 'stars',
    component: Stars
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;