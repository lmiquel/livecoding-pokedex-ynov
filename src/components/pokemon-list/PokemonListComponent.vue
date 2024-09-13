<script setup>
import { getPokemonListFromApi } from '@/api-calls/get-pokemon-list-from-api'
import { onMounted, ref, watch } from 'vue'
import PokemonCard from '../commons/PokemonCard.vue'
import ButtonComponent from '../generic-components/ButtonComponent.vue'
import { decrementNumberWithinRange } from '@/helpers/decrement-number-within-range'
import { incrementNumberWithinRange } from '@/helpers/increment-number-within-range'
import { useRoute } from 'vue-router'

const route = useRoute()

const offset = ref(parseInt(route.query.offset))
const previousLink = ref(`/list?offset=${decrementNumberWithinRange(offset.value, 10, 0)}`)
const nextLink = ref(`/list?offset=${incrementNumberWithinRange(offset.value, 10, 1020)}`)

const pokemonList = ref([])
const showLinkCards = true

const setPokemonList = (newPokemonList) => (pokemonList.value = newPokemonList)
const getPokemonList = async (offset) => {
  const pokemons = await getPokemonListFromApi(offset)
  setPokemonList(pokemons)
}

const setPreviousLink = (offset) =>
  (previousLink.value = `/list?offset=${decrementNumberWithinRange(offset, 10, 0)}`)
const setNextLink = (offset) =>
  (nextLink.value = `/list?offset=${incrementNumberWithinRange(offset, 10, 1020)}`)

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
          <PokemonCard :pokemon="pokemon" :showLink="showLinkCards" />
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
