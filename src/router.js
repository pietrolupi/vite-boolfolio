import { createRouter, createWebHashHistory } from "vue-router";
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Error404 from './pages/Error404.vue';


const router = createRouter({
  
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/progetti",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/chi-sono",
      name: "About",
      component: About,
    },
    {
      path: "/contatti",
      name: "Contacts",
      component: Contacts,
    },

    //rotta 404 da mettere SEMPRE come ultimo elemento
    {
      path: '/:pathMatch(.*)*',
      component: Error404,
    }
  ]
});

export { router };