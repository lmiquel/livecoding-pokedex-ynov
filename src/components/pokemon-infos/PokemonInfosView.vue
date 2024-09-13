<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PokemonCard from '../commons/PokemonCard.vue'
import {
  getOneFormattedPokemonById,
  getPokemonDetailledInfosById
} from '@/api-calls/get-one-pokemon-by-id'
import PokemonDetailledInfosCard from '../commons/PokemonDetailledInfosCard.vue'

const route = useRoute()

const pokemonCardInfos = ref({
  id: null,
  name: '',
  img: '',
  sound: ''
})
const showLinkcard = false

const pokemonDetailledInfos = ref({
  id: null,
  abilities: [],
  types: [],
  stats: []
})

const setPokemonCardInfos = async (pokemonId) =>
  (pokemonCardInfos.value = await getOneFormattedPokemonById(pokemonId))
const setPokemonDetailledInfos = async (pokemonId) =>
  (pokemonDetailledInfos.value = await getPokemonDetailledInfosById(pokemonId))

onMounted(async () => {
  const pokemonId = route.params.id
  await setPokemonCardInfos(pokemonId)
  await setPokemonDetailledInfos(pokemonId)
})
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <PokemonCard :pokemon="pokemonCardInfos" :showLink="showLinkcard" />
      </v-col>
      <v-col cols="auto">
        <PokemonDetailledInfosCard :pokemonInfos="pokemonDetailledInfos" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
