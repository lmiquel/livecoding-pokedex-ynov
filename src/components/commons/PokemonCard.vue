<script setup>
import { capitalizeFirstLetter } from '@/helpers/capitalize-first-letter'

const props = defineProps({
  pokemon: {
    name: String,
    img: String,
    sound: String
  }
})
</script>

<template>
  <v-card class="mx-auto" width="350" height="500" theme="dark">
    <v-img height="350px" :src="props.pokemon.img" cover></v-img>

    <v-card-title>
      {{ capitalizeFirstLetter(props.pokemon.name) }}
    </v-card-title>

    <v-spacer></v-spacer>

    <v-card-text>
      <audio controls v-if="props.pokemon.sound" :src="props.pokemon.sound"></audio>
      <p v-else>No sound found!</p>
    </v-card-text>
  </v-card>
</template>
