<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getPokemonListFromApi } from '@/api-calls/get-pokemon-list-from-api'
import { decrementNumberWithinRange } from '@/utils/decrement-number-within-range'
import { incrementNumberWithinRange } from '@/utils/increment-number-within-range'
import ButtonComponent from './generic-components/ButtonComponent.vue'
import PokemonCard from './commons/PokemonCard.vue'

const route = useRoute()
const url = '/list?offset='

const offset = ref(parseInt(route.query.offset))
const previousLink = ref(`${url}${decrementNumberWithinRange(offset.value, 10, 0)}`)
const nextLink = ref(`${url}${incrementNumberWithinRange(offset.value, 10, 1020)}`)

const pokemonList = ref([])
const showLinkInfos = true
const showAddToTeam = true

const setPokemonList = (newPokemonList) => (pokemonList.value = newPokemonList)
const getPokemonList = async (offset) => {
  const pokemons = await getPokemonListFromApi(offset)
  setPokemonList(pokemons)
}

const setPreviousLink = (offset) =>
  (previousLink.value = `${url}${decrementNumberWithinRange(offset, 10, 0)}`)
const setNextLink = (offset) =>
  (nextLink.value = `${url}${incrementNumberWithinRange(offset, 10, 1020)}`)

watch(
  () => route.query.offset,
  (newOffset) => {
    const newOffsetInt = parseInt(newOffset)

    offset.value = newOffsetInt
    setPreviousLink(newOffsetInt)
    setNextLink(newOffsetInt)
    getPokemonList(newOffsetInt)
  }
)

onMounted(() => getPokemonList(offset.value))
</script>

<template>
  <v-container>
    <v-row align="center" justify="space-between">
      <v-col cols="auto">
        <RouterLink :to="previousLink">
          <ButtonComponent v-if="offset > 0" text="PREVIOUS" />
        </RouterLink>
      </v-col>
      <v-col cols="auto">
        <RouterLink :to="nextLink">
          <ButtonComponent v-if="offset < 1020" text="NEXT" />
        </RouterLink>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-list theme="dark" lines="one" class="pkmList">
        <v-list-item v-for="pokemon in pokemonList" :key="pokemon.name" class="pkmItemList">
          <PokemonCard :pokemon="pokemon" :showLinkInfos :showAddToTeam />
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
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
