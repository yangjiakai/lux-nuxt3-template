<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useCounterStore } from "~/stores/demo";

const counter = useCounterStore();
</script>

<template>
  <div class="pa-5">
    <v-btn color="success">text</v-btn>
    <div class="d-flex">
      <v-card
        class="ma-2"
        width="100"
        height="100"
        v-for="i in 12"
        :elevation="i"
        variant="outlined"
      ></v-card>
    </div>

    <v-card height="300" width="300">
      <PerfectScrollbar class="overflow-auto h-full">
        <h1 class="text-3xl font-bold underline" v-for="i in 15">AAAAA</h1>
      </PerfectScrollbar>
    </v-card>
    AAA

    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div>
      <p>Count: {{ counter.count }}</p>
      <button @click="counter.increment">Increment</button>
      <!-- button with icon -->
      <v-btn icon="mdi-heart"></v-btn>
      <Icon name="uil:github" style="color: black" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
