import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/news'
  },
  {
    path: '/',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/:id',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/news',
    component: () => import ('../views/News.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
