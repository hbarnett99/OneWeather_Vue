import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About";
import Home from "@/views/Home";
import Stars from "@/views/Stars";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/stars/:lat/:lng",
    name: "stars",
    component: Stars,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
