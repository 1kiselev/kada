import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/pages/HomePage";
import CreatePage from "@/pages/CreatePage";
import WorkingGroup from "@/pages/WorkingGroup";


const routes = [
  {
    path: '/',
    component: HomePage
  },

  {
    path: '/create',
    component: CreatePage
  },
  {
    path: '/working_group',
    component: WorkingGroup
  },

    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
