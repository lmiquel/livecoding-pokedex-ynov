<script setup>
import { onMounted, ref } from 'vue'
import { getBasicDataPokemon } from '@/api-calls/get-one-pokemon-by-id'
import { getRandomPokemonNumber } from '@/helpers/get-random-pokemon-id'
import ButtonComponent from './generic-components/ButtonComponent.vue'
import PokemonCard from './commons/PokemonCard.vue'

const pokemon = ref({
  id: null,
  name: '',
  img: '',
  sound: ''
})
const showLinkInfos = true
const showAddToTeam = true

const setRandomPokemon = (randomPokemon) => (pokemon.value = randomPokemon)
const getRandomPokemon = async () => {
  const randomPokemonNumber = getRandomPokemonNumber()
  const randomPokemon = await getBasicDataPokemon(randomPokemonNumber)

  setRandomPokemon(randomPokemon)
}

onMounted(() => getRandomPokemon())
</script>

<template>
  <v-container>
    <PokemonCard :pokemon="pokemon" :showLinkInfos :showAddToTeam />
    <ButtonComponent @clicked="getRandomPokemon" text="CHANGE POKEMON" />
  </v-container>
</template>
