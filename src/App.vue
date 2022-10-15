<template>
   <v-app class="bg-background1">
    <v-navigation-drawer color="primary" app>
    <v-list class="bg-primary">
    <v-list-item @click.native="$router.push('/foo')" class="bg-accent">
    <v-list-item-title >
    Jason's website
    </v-list-item-title>
    </v-list-item>
     <v-list-item color="primary" style="background-color: whitesmoke">
    <v-list-item-title>
    Jason's Links
    </v-list-item-title>
    </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="secondary">
    <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="fill-height bg-background1">

      <!-- Provides the application the proper gutter -->
      <v-container fluid class="bg-background2">
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>
   </v-app>
</template>

<script setup>
</script>


<style scoped>
 

</style>
