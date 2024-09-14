<script setup>
import { usePokemonTeamStore } from '@/stores/pokemon-team'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'
import ShowLinkButton from './pokemon-card-components/ShowLinkButton.vue'
import AddPokemonToTeamButton from './pokemon-card-components/AddPokemonToTeamButton.vue'
import RemovePokemonFromTeamButton from './pokemon-card-components/RemovePokemonFromTeamButton.vue'

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
const addThisPokemonToTeam = () => {
  pokemonTeamStore.addPokemonToTeam(props.pokemon)
}
const removeThisPokemonFromTeam = () => {
  pokemonTeamStore.removePokemonFromTeam(props.pokemon)
}
</script>

<template>
  <v-card class="mx-auto" width="350" height="500" theme="dark" border="md">
    <v-img height="350px" :src="props.pokemon.img" cover></v-img>

    <v-card-title class="titleCardBox">
      {{ capitalizeFirstLetter(props.pokemon.name) }}
      <div>
        <ShowLinkButton v-if="props.showLinkInfos" :id="pokemon.id" />
        <AddPokemonToTeamButton v-if="props.showAddToTeam" @clicked="addThisPokemonToTeam" />
        <RemovePokemonFromTeamButton
          v-if="props.showRemoveFromTeam"
          @clicked="removeThisPokemonFromTeam"
        />
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
</style>
