<script setup>
import { ref, watch } from 'vue'
import { usePokemonTeamStore } from '@/stores/pokemon-team'

const tooltipText = ref('Add to my team')
const emit = defineEmits(['clicked'])
const triggerClickEvent = () => {
  emit('clicked')

  tooltipText.value = 'Ok!'
  setTimeout(() => (tooltipText.value = 'Add to my team'), 1200)
}

const pokemonTeamStore = usePokemonTeamStore()
const colorAddButton = ref(pokemonTeamStore.hasMaxPokemon ? '#f443364d' : 'red')

watch(
  () => pokemonTeamStore.hasMaxPokemon,
  (hasMaxPokemon) => (colorAddButton.value = hasMaxPokemon ? '#f443364d' : 'red')
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
