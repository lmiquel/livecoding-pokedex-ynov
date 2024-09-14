<script setup>
const emit = defineEmits(['clicked'])
const triggerClickEvent = () => emit('clicked')
</script>

<template>
  <v-tooltip text="Remove from my team" location="top">
    <template v-slot:activator="{ props }">
      <v-icon
        @click="triggerClickEvent"
        color="red"
        class="cursorPointer"
        v-bind="props"
        icon="mdi-minus-box"
      />
    </template>
  </v-tooltip>
</template>
