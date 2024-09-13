<script setup>
const links = [
  {
    name: 'Random pokemon',
    link: '/',
    icon: 'mdi-help'
  },
  {
    name: 'Pokemon list',
    link: '/list',
    icon: 'mdi-format-list-bulleted'
  }
]
</script>

<template>
  <v-list width="100%" class="navbar">
    <v-list-item v-for="link in links" :key="link.link" class="navbarLinks">
      <v-icon color="white" :icon="link.icon"></v-icon>
      <RouterLink color="white" :to="link.link">{{ link.name }}</RouterLink>
    </v-list-item>
  </v-list>
</template>

<style>
.navbar {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background-color: #f44336;
}

.navbarLinks {
  margin: auto;
  align-items: center;
  justify-content: center;
}
</style>
