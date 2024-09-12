<script setup>
import { ref } from 'vue'
import RandomPokemonButton from '@/components/random-pokemon-view/RandomPokemonButton.vue'
import RandomPokemonCard from '@/components/random-pokemon-view/RandomPokemonCard.vue'

const pokemon = ref({
  name: '',
  img: '',
  sound: ''
})

const setRandomPokemon = (randomPokemon) => {
  pokemon.value = randomPokemon
}
</script>

<template>
  <main>
    <RandomPokemonCard :pokemon="pokemon" />
    <RandomPokemonButton @randomPokemon="setRandomPokemon" />
  </main>
</template>
