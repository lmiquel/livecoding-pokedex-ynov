import { createRouter, createWebHistory } from 'vue-router'
import RandomPokemonView from '@/views/RandomPokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'randomPokemon',
      component: RandomPokemonView
    },
    {
      path: '/pokemon/:id',
      name: 'pokemonInfos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PokemonInfosView.vue')
    },
    {
      path: '/list',
      name: 'pokemonList',
      component: () => import('../views/PokemonListView.vue'),
      props: (route) => ({ query: route.query.offset })
    },
    {
      path: '/team',
      name: 'pokemonTeam',
      component: () => import('../views/PokemonTeamView.vue')
    }
  ]
})

export default router
