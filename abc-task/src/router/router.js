import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@/views/QuizPageView.vue')
    },
    {
     path: '/calculate',
     name: 'calculate',
     component: () => import('@/views/CalculateView.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('@/views/ResultView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        return {path: '/'};
      }
    }
  ]
});

export default router;
