import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getDetailledDataPokemon } from '@/api-calls/get-one-pokemon-by-id'

export const usePokemonTeamStore = defineStore('pokemonTeam', () => {
  const team = ref([])
  const hasPokemon = computed(() => team.value.length)
  const hasMaxPokemon = computed(() => team.value.length === 6)

  const addPokemonToTeam = (pokemon) => {
    if (!hasMaxPokemon.value)
      getDetailledDataPokemon(pokemon.id).then((pokemonInfos) =>
        team.value.push({ pokemon, pokemonInfos })
      )
  }
  const removePokemonFromTeam = (pokemon) => {
    const pokemonToRemove = team.value.find((pokemonTeam) => pokemon === pokemonTeam.pokemon)
    const index = team.value.indexOf(pokemonToRemove)
    if (index > -1) team.value.splice(index, 1)
  }
  const removeAllPokemonFromTeam = () => {
    team.value = []
  }

  return { team, hasPokemon, hasMaxPokemon, addPokemonToTeam, removePokemonFromTeam, removeAllPokemonFromTeam }
}, {
  persist: true,
})
