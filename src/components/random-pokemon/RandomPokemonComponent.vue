<script setup>
import { onMounted, ref } from 'vue'
import ButtonComponent from '@/components/generic-components/ButtonComponent.vue'
import PokemonCard from '@/components/commons/PokemonCard.vue'
import { getOnePokemonById } from '@/api-calls/get-one-pokemon-by-id'
import { getRandomPokemonNumber } from '@/helpers/get-random-pokemon-id'

const pokemon = ref({
  name: '',
  img: '',
  sound: ''
})

const setRandomPokemon = (randomPokemon) => (pokemon.value = randomPokemon)
const getRandomPokemon = async () => {
  const pkm = await getOnePokemonById(getRandomPokemonNumber())
  setRandomPokemon({
    name: pkm.name,
    img: pkm.sprites.front_default,
    sound: pkm.cries.legacy
  })
}

onMounted(() => getRandomPokemon())
</script>

<template>
  <v-container>
    <PokemonCard :pokemon="pokemon" />
    <ButtonComponent @clicked="getRandomPokemon" text="CHANGE POKEMON" />
  </v-container>
</template>
