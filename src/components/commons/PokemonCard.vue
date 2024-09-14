<script setup>
import { ref, watch } from 'vue'
import { usePokemonTeamStore } from '@/stores/pokemon-team'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'

const props = defineProps({
  pokemon: {
    id: Number,
    name: String,
    img: String,
    sound: String
  },
  showLinkInfos: Boolean,
  showAddToTeam: Boolean,
  showRemoveFromTeam: Boolean
})

const pokemonTeamStore = usePokemonTeamStore()

const colorAddButton = ref(pokemonTeamStore.hasMaxPokemon ? '#f443364d' : 'red')

const addThisPokemonToTeam = () => {
  pokemonTeamStore.addPokemonToTeam(props.pokemon)
}
const removeThisPokemonFromTeam = () => {
  pokemonTeamStore.removePokemonFromTeam(props.pokemon)
}

const pokemonUrl = ref(`/pokemon/${props.pokemon.id || null}`)

// for the random pokemon view
watch(
  () => props.pokemon.id,
  (newPokemonId) => {
    pokemonUrl.value = `/pokemon/${newPokemonId}`
    colorAddButton.value = pokemonTeamStore.hasMaxPokemon ? '#f443364d' : 'red'
  }
)

watch(
  () => pokemonTeamStore.hasMaxPokemon,
  (hasMaxPokemon) => (colorAddButton.value = hasMaxPokemon ? '#f443364d' : 'red')
)
</script>

<template>
  <v-card class="mx-auto" width="350" height="500" theme="dark" border="md">
    <v-img height="350px" :src="props.pokemon.img" cover></v-img>

    <v-card-title class="titleCardBox">
      {{ capitalizeFirstLetter(props.pokemon.name) }}
      <div>
        <v-tooltip v-if="props.showLinkInfos" text="More infos" location="top">
          <template v-slot:activator="{ props }">
            <RouterLink :to="pokemonUrl">
              <v-icon v-bind="props" icon="mdi-information-box" />
            </RouterLink>
          </template>
        </v-tooltip>
        <v-tooltip v-if="props.showAddToTeam" text="Add to my team" location="top">
          <template v-slot:activator="{ props }">
            <v-icon
              @click="addThisPokemonToTeam"
              :color="colorAddButton"
              class="cursorPointer"
              v-bind="props"
              icon="mdi-plus-box"
            />
          </template>
        </v-tooltip>
        <v-tooltip
          v-if="props.showRemoveFromTeam && pokemonTeamStore.hasMaxPokemon"
          text="Remove from my team"
          location="top"
        >
          <template v-slot:activator="{ props }">
            <v-icon
              @click="removeThisPokemonFromTeam"
              color="red"
              class="cursorPointer"
              v-bind="props"
              icon="mdi-minus-box"
            />
          </template>
        </v-tooltip>
      </div>
    </v-card-title>

    <v-spacer />

    <v-card-text>
      <audio controls :src="props.pokemon.sound" v-if="props.pokemon.sound" />
      <p v-else>No sound found!</p>
    </v-card-text>
  </v-card>
</template>

<style>
.titleCardBox {
  display: flex;
  justify-content: space-between;
}

.cursorPointer:hover {
  cursor: pointer;
}
</style>
