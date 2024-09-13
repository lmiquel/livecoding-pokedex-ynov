<script setup>
const props = defineProps({
  text: String
})

const emit = defineEmits(['clicked'])
const triggerClickEvent = () => emit('clicked')
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn color="red" @click="triggerClickEvent">{{ props.text }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
