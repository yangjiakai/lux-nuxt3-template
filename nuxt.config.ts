import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },

  css: ["~/assets/css/tailwind.css", "~/assets/scss/main.scss"],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "vue3-perfect-scrollbar/nuxt",
    "@pinia/nuxt", // needed
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/icon",
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  } as any,
});
