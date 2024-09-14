<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  id: Number
})

const pokemonUrl = ref(`/pokemon/${props.id || null}`)

// for the random pokemon view
watch(
  () => props.id,
  (newPokemonId) => {
    pokemonUrl.value = `/pokemon/${newPokemonId}`
  }
)
</script>

<template>
  <v-tooltip text="More infos" location="top">
    <template v-slot:activator="{ props }">
      <RouterLink :to="pokemonUrl">
        <v-icon v-bind="props" icon="mdi-information-box" />
      </RouterLink>
    </template>
  </v-tooltip>
</template>
