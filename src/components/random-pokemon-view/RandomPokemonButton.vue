<script setup>
import { getRandomInt } from '@/helpers/get-random-int'
import { onMounted } from 'vue'

const emit = defineEmits(['randomPokemon'])

const getRandomPokemonNumber = () => getRandomInt(1025)
const getRandomPokemon = () =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomPokemonNumber()}`)
    .then((res) => res.json())
    .then((data) => {
      const randomPokemon = {
        name: data.name,
        img: data.sprites.front_default,
        sound: data.cries.legacy
      }
      emit('randomPokemon', randomPokemon)
    })

onMounted(() => {
  getRandomPokemon()
})
</script>

<template>
  <v-container>
    <v-row align="center" justify="center"
      ><v-col cols="auto">
        <v-btn color="red" @click="getRandomPokemon">CHANGE POKEMON</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
