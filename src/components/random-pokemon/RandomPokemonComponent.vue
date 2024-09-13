<script setup>
import { onMounted, ref } from 'vue'
import ButtonComponent from '@/components/generic-components/ButtonComponent.vue'
import PokemonCard from '@/components/commons/PokemonCard.vue'
import { getOnePokemon } from '@/api-calls/get-one-pokemon'
import { getRandomPokemonNumber } from '@/helpers/get-random-pokemon-id'

const pokemon = ref({
  name: '',
  img: '',
  sound: ''
})

const setRandomPokemon = (randomPokemon) => {
  pokemon.value = randomPokemon
}
const getRandomPokemon = async () => {
  const data = await getOnePokemon(getRandomPokemonNumber())
  setRandomPokemon({
    name: data.name,
    img: data.sprites.front_default,
    sound: data.cries.legacy
  })
}

onMounted(() => {
  getRandomPokemon()
})

const textButton = 'CHANGE POKEMON'
</script>

<template>
  <v-container>
    <PokemonCard :pokemon="pokemon" />
    <ButtonComponent @clicked="getRandomPokemon" :text="textButton" />
  </v-container>
</template>
