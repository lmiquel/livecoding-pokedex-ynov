<script setup>
import PokemonCard from './PokemonCard.vue'
import PokemonDetailledInfosCard from './PokemonDetailledInfosCard.vue'

const props = defineProps({
  pokemon: {
    id: Number,
    name: String,
    img: String,
    sound: String
  },
  pokemonInfos: {
    id: Number,
    abilities: Array,
    types: Array,
    stats: Array
  },
  showAddToTeam: Boolean,
  showRemoveFromTeam: Boolean
})
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <PokemonCard :pokemon="props.pokemon" :showAddToTeam :showRemoveFromTeam />
      </v-col>
      <v-col cols="auto">
        <PokemonDetailledInfosCard :pokemonInfos="props.pokemonInfos" />
      </v-col>
    </v-row>
  </v-container>
</template>
