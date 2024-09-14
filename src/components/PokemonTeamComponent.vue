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

<style>
.pkmList {
  display: flex;
  flex-wrap: wrap;
  max-width: 95%;
  margin: 32px;
  justify-content: center;
}

.pkmItemList {
  margin: auto;
}
</style>
