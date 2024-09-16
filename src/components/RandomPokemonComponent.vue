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
const isLoading = ref(false)

const setRandomPokemon = (randomPokemon) => (pokemon.value = randomPokemon)
const getRandomPokemon = async () => {
  isLoading.value = !isLoading.value
  const randomPokemonNumber = getRandomPokemonNumber()
  const randomPokemon = await getBasicDataPokemon(randomPokemonNumber)

  setRandomPokemon(randomPokemon)
  isLoading.value = !isLoading.value
}

const showLinkInfos = true
const showAddToTeam = true

onMounted(() => getRandomPokemon())
</script>

<template>
  <v-container>
    <v-skeleton-loader v-if="isLoading" type="card" style="height: 500px; width: 350px;" />
    <PokemonCard v-else :pokemon="pokemon" :showLinkInfos :showAddToTeam />
    <ButtonComponent @clicked="getRandomPokemon" text="CHANGE POKEMON" />
  </v-container>
</template>
