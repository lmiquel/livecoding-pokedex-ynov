<script setup>
import { ref, watch } from 'vue'
import { usePokemonTeamStore } from '@/stores/pokemon-team'

const emit = defineEmits(['clicked'])

const pokemonTeamStore = usePokemonTeamStore()
const colorAddButton = ref(pokemonTeamStore.hasMaxPokemon ? '#f443364d' : 'red')
const tooltipText = ref(pokemonTeamStore.hasMaxPokemon ? 'Team is full' : 'Add to my team')

const triggerClickEvent = () => {
  emit('clicked')

  if (!pokemonTeamStore.hasMaxPokemon) tooltipText.value = 'Ok!'
  setTimeout(() => {
    if (pokemonTeamStore.hasMaxPokemon) {
      tooltipText.value = 'Team is full'
    } else {
      tooltipText.value = 'Add to my team'
    }
  }, 1200)
}

watch(
  () => pokemonTeamStore.hasMaxPokemon,
  (hasMaxPokemon) => {
    colorAddButton.value = hasMaxPokemon ? '#f443364d' : 'red'
    pokemonTeamStore.hasMaxPokemon ? 'Team is full' : 'Add to my team'
  }
)
</script>

<template>
  <v-tooltip :text="tooltipText" location="top">
    <template v-slot:activator="{ props }">
      <v-icon
        @click="triggerClickEvent"
        :color="colorAddButton"
        class="cursorPointer"
        v-bind="props"
        icon="mdi-plus-box"
      />
    </template>
  </v-tooltip>
</template>
