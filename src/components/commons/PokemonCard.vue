<script setup>
import { capitalizeFirstLetter } from '@/helpers/capitalize-first-letter'

const props = defineProps({
  pokemon: {
    id: Number,
    name: String,
    img: String,
    sound: String
  },
  showLink: Boolean
})

const pokemonUrl = `/pokemon/${props.pokemon.id || null}`
</script>

<template>
  <v-card class="mx-auto" width="350" height="500" theme="dark" border="md">
    <v-img height="350px" :src="props.pokemon.img" cover></v-img>

    <v-card-title class="titleCardBox">
      {{ capitalizeFirstLetter(props.pokemon.name) }}
      <v-tooltip v-if="props.showLink" text="More infos">
        <template v-slot:activator="{ props }">
          <RouterLink :to="pokemonUrl">
            <v-icon v-bind="props" icon="mdi-plus-box" />
          </RouterLink>
        </template>
      </v-tooltip>
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
