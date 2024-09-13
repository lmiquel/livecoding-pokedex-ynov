<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PokemonCard from '../commons/PokemonCard.vue'
import { getOnePokemonById } from '@/api-calls/get-one-pokemon-by-id'
import PokemonDetailledInfosCard from '../commons/PokemonDetailledInfosCard.vue'
import {
  getOnePokemonFormattedBasicData,
  getOnePokemonFormattedDetailledData
} from '@/api-calls/helpers/format-pokemon-data-for-display'

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
