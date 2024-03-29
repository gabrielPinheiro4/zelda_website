import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jogos',
    name: 'jogos',
    component: () => import('../views/JogosView.vue')
  },
  {
    path: '/jogos_link/:titulo/:desc/:ano/:dev/:pub',
    name: 'jogos_link',
    component: () => import('../views/JogosLinkView.vue')
  },
  {
    path: '/personagens',
    name: 'personagens',
    component: () => import('../views/CharactersView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
