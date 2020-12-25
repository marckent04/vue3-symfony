import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import routes from 'vue-auto-routing'
import Home from '../pages/Home.vue'
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
