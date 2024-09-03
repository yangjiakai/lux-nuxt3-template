<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
</script>
<template>
  <v-app>
    <Sidebar />
    <Header />
    <Footer />
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
