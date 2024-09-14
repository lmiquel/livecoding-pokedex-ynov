<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getOnePokemonById } from '@/api-calls/get-one-pokemon-by-id'
import {
  getOnePokemonFormattedBasicData,
  getOnePokemonFormattedDetailledData
} from '@/api-calls/helpers/format-pokemon-data-for-display'
import PokemonFullData from './commons/PokemonFullData.vue'

const route = useRoute()

const pokemonCardInfos = ref({
  id: null,
  name: '',
  img: '',
  sound: ''
})

const pokemonDetailledInfos = ref({
  id: null,
  abilities: [],
  types: [],
  stats: []
})

const showAddToTeam = true

const setPokemonCardInfos = async (pokemon) =>
  (pokemonCardInfos.value = getOnePokemonFormattedBasicData(pokemon))
const setPokemonDetailledInfos = async (pokemon) =>
  (pokemonDetailledInfos.value = getOnePokemonFormattedDetailledData(pokemon))

onMounted(async () => {
  const pokemonId = route.params.id
  const pokemon = await getOnePokemonById(pokemonId)

  await setPokemonCardInfos(pokemon)
  await setPokemonDetailledInfos(pokemon)
})
</script>

<template>
  <PokemonFullData
    :pokemon="pokemonCardInfos"
    :pokemonInfos="pokemonDetailledInfos"
    :showAddToTeam
  />
</template>
