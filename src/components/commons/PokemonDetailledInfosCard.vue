<script setup>
import { capitalizeFirstLetter } from '@/helpers/capitalize-first-letter'

const props = defineProps({
  pokemonInfos: {
    id: Number,
    abilities: Array,
    types: Array,
    stats: Array
  }
})
</script>

<template>
  <v-card class="mx-auto" width="350" height="500" theme="dark" border="md">
    <v-card-title> Types: </v-card-title>
    <v-list class="listDetailledInfos">
      <v-list-item v-for="type in props.pokemonInfos.types" :key="type">
        {{ capitalizeFirstLetter(type) }}
      </v-list-item>
    </v-list>
    <v-divider />

    <v-card-title> Abilities: </v-card-title>
    <v-list class="listDetailledInfos">
      <v-list-item v-for="ability in props.pokemonInfos.abilities" :key="ability">
        {{ capitalizeFirstLetter(ability) }}
      </v-list-item>
    </v-list>
    <v-divider />

    <v-card-title> Base stats: </v-card-title>
    <v-list class="listDetailledInfos">
      <v-list-item v-for="stat in props.pokemonInfos.stats" :key="stat.base_stat">
        {{ capitalizeFirstLetter(stat.name_stat) }}: {{ stat.base_stat }}
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style>
.listDetailledInfos {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
