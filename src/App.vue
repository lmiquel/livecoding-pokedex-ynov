<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/navigation/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <body>
    <main>
      <RouterView />
    </main>
  </body>
</template>

<style scoped></style>
