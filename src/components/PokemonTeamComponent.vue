<script setup>
import { usePokemonTeamStore } from '@/stores/pokemon-team'
import PokemonFullData from './commons/PokemonFullData.vue'

const pokemonTeamStore = usePokemonTeamStore()
const showRemoveFromTeam = true
</script>

<template>
  <v-list theme="dark" class="pkmList">
    <v-list-item
      v-for="({ pokemon, pokemonInfos }, i) in pokemonTeamStore.team"
      :key="`${i}${pokemon.name}`"
      class="pkmItemList"
    >
      <PokemonFullData :pokemon :pokemonInfos :showRemoveFromTeam />
    </v-list-item>
  </v-list>
</template>
