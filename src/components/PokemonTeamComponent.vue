<script setup>
import { usePokemonTeamStore } from '@/stores/pokemon-team'
import PokemonFullData from './commons/PokemonFullData.vue'
import ButtonComponent from './generic-components/ButtonComponent.vue';

const pokemonTeamStore = usePokemonTeamStore()
const showRemoveFromTeam = true
</script>

<template>
  <v-container>
    <v-col>
      <v-row>
        <v-list v-if="pokemonTeamStore.hasPokemon" theme="dark" class="pkmList">
          <v-list-item
            v-for="({ pokemon, pokemonInfos }, i) in pokemonTeamStore.team"
            :key="`${i}${pokemon.name}`"
            class="pkmItemList"
          >
            <PokemonFullData :pokemon :pokemonInfos :showRemoveFromTeam />
          </v-list-item>
        </v-list>
        <p v-else>No Pokemon in your team yet!</p>
      </v-row>
      <v-row>
        <ButtonComponent v-if="pokemonTeamStore.hasPokemon" @clicked="pokemonTeamStore.removeAllPokemonFromTeam" text="REMOVE ALL POKEMON" />
      </v-row>
    </v-col>
  </v-container>
</template>
