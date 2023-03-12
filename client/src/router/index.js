import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/pages/HomePage";
import CreatePage from "@/pages/CreatePage";


const routes = [
  {
    path: '/',
    component: HomePage
  },

  {
    path: '/create',
    component: CreatePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
