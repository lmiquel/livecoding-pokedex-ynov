<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPokemonListFromApi } from '@/api-calls/get-pokemon-list-from-api'
import PokemonCard from './commons/PokemonCard.vue'

const route = useRoute()
const router = useRouter()

const offset = ref(parseInt(route.query.offset))
const pokemonList = ref([])
const isLoading = ref(false)

const setPokemonList = (newPokemonList) => (pokemonList.value = newPokemonList)
const getPokemonList = async (offset) => {
  isLoading.value = !isLoading.value
  const pokemons = await getPokemonListFromApi(offset)
  setPokemonList(pokemons)
  isLoading.value = !isLoading.value

}

const currentPage = ref(1)
const pagesLength = Math.ceil(1025 / 10)

const updatePage = (pageIndex) => {
  router.push({ path: 'list', query: { offset: (pageIndex - 1) * 10 } })
  currentPage.value = pageIndex;
}

const showLinkInfos = true
const showAddToTeam = true

watch(
  () => route.query.offset,
  (newOffset) => {
    const newOffsetInt = parseInt(newOffset)

    offset.value = newOffsetInt
    getPokemonList(newOffsetInt)
  }
)

onMounted(() => {
  updatePage(currentPage.value);
  getPokemonList(offset.value)
})
</script>

<template>
  <v-container>
    <v-pagination v-model="currentPage" :length="pagesLength" @update:model-value="updatePage" />

    <v-row align="center" justify="center">
      <v-list theme="dark" lines="one" class="pkmList">
        <v-list-item v-for="pokemon in pokemonList" :key="pokemon.name" class="pkmItemList">
          <v-skeleton-loader v-if="isLoading" type="card" style="height: 500px; width: 350px;" />
          <PokemonCard v-else :pokemon="pokemon" :showLinkInfos :showAddToTeam />
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>
