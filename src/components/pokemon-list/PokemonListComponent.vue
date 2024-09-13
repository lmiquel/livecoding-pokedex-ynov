<script setup>
import { getPokemonListFromApi } from '@/api-calls/get-pokemon-list-from-api'
import { onMounted, ref } from 'vue'
import PokemonCard from '../commons/PokemonCard.vue'
import ButtonComponent from '../generic-components/ButtonComponent.vue'
import { decrementNumberWithinRange } from '@/helpers/decrement-number-within-range'
import { incrementNumberWithinRange } from '@/helpers/increment-number-within-range'

const offset = ref(0)
const pokemonList = ref([])

const setPokemonList = (newPokemonList) => (pokemonList.value = newPokemonList)
const getPokemonList = async (offset) => {
  const pokemons = await getPokemonListFromApi(offset)
  setPokemonList(pokemons)
}

const onClickPrevious = () => {
  offset.value = decrementNumberWithinRange(offset.value, 10, 0)
  getPokemonList(offset.value)
}
const onClickNext = () => {
  offset.value = incrementNumberWithinRange(offset.value, 10, 1020)
  getPokemonList(offset.value)
}

onMounted(() => getPokemonList(offset.value))
</script>

<template>
  <v-container>
    <v-row align="center" justify="space-between">
      <v-col cols="auto">
        <ButtonComponent v-if="offset > 0" @clicked="onClickPrevious" text="PREVIOUS" />
      </v-col>
      <v-col cols="auto">
        <ButtonComponent v-if="offset < 1020" @clicked="onClickNext" text="NEXT" />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-list theme="dark" lines="one" class="pkmList">
        <v-list-item v-for="pokemon in pokemonList" :key="pokemon.name" class="pkmItemList">
          <PokemonCard :pokemon="pokemon" />
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<style>
.pkmList {
  display: flex;
  flex-wrap: wrap;
  max-width: 75%;
  margin: 32px;
  justify-content: center;
}

.pkmItemList {
  margin: auto;
}
</style>
