<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import GithubCard from "./GithubCard.vue";

import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
const mainMenu = ref([
  // 首页
  {
    text: "Home",

    link: "/",
    icon: "solar:home-bold-duotone",
  },
  {
    text: "Chat",
    link: "/chat",
    icon: "solar:filters-bold-duotone",
  },

  {
    text: "Test",
    link: "/test",
    icon: "solar:ruler-pen-bold-duotone",
  },
  {
    text: "Config",
    link: "/config",
    icon: "solar:settings-bold-duotone",
  },
  // 登录
  {
    text: "Login",
    link: "auth/login",
    icon: "solar:login-bold-duotone",
  },
]);
</script>

<template>
  <v-navigation-drawer
    v-model="appStore.sidebar"
    elevation="10"
    location="left"
  >
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->
    <template v-slot:prepend>
      <RouterLink to="/">
        <v-card height="100" class="logo-card">
          <h1 class="logo-text h-full">
            <Icon class="mr-2" width="40" name="solar:plain-bold-duotone" />
            <span>Lux-UI</span>
          </h1>
        </v-card>
      </RouterLink>
    </template>

    <!-- ---------------------------------------------- -->
    <!---Menu Area -->
    <!-- ---------------------------------------------- -->
    <v-list>
      <v-list-item
        v-for="item in mainMenu"
        :value="item.text"
        :to="item.link"
        color="primary"
      >
        <template v-slot:prepend>
          <Icon class="mx-2 mr-5" width="20" :name="item.icon" />
        </template>
        <v-list-item-title
          v-text="item.text"
          class="font-weight-bold"
        ></v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- ---------------------------------------------- -->
    <!---Bottom Area -->
    <!-- ---------------------------------------------- -->
    <template v-slot:append>
      <GithubCard />
    </template>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.logo-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: rgba(var(--v-theme-primary));
}
</style>
