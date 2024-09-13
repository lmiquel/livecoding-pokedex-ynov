import RandomPokemonView from '@/views/RandomPokemonView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'randomPokemon',
      component: RandomPokemonView
    },
    {
      path: '/list',
      name: 'pokemonList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PokemonListView.vue')
    },
    {
      path: '/pokemon/:id',
      name: 'pokemonInfos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PokemonInfosView.vue')
    }
  ]
})

export default router
