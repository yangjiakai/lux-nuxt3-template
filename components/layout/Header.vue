<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useAppStore } from "~/stores/app";
const appStore = useAppStore();
</script>

<template>
  <v-app-bar class="px-5">
    <template v-slot:prepend>
      <transition>
        <v-icon
          v-if="appStore.sidebar"
          @click="appStore.sidebar = !appStore.sidebar"
          >mdi-menu-open</v-icon
        >
        <v-icon
          v-else-if="!appStore.sidebar"
          @click="appStore.sidebar = !appStore.sidebar"
          >mdi-menu</v-icon
        >
      </transition>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
