<script setup>
import { onMounted, ref } from 'vue'
import ButtonComponent from '@/components/generic-components/ButtonComponent.vue'
import PokemonCard from '@/components/commons/PokemonCard.vue'
import { getBasicDataPokemon } from '@/api-calls/get-one-pokemon-by-id'
import { getRandomPokemonNumber } from '@/helpers/get-random-pokemon-id'

const pokemon = ref({
  id: null,
  name: '',
  img: '',
  sound: ''
})
const showLinkCard = true

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
    <PokemonCard :pokemon="pokemon" :showLink="showLinkCard" />
    <ButtonComponent @clicked="getRandomPokemon" text="CHANGE POKEMON" />
  </v-container>
</template>
