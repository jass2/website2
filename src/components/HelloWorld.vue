<script setup lang="ts">
  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <v-row class="bg-background1">
    <v-col>
      What UP {{count}}
    </v-col>
  </v-row>
</template>

<style scoped>
</style>
