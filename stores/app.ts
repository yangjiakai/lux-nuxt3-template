import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    theme: "dark",
    sidebar: true,
  }),
  actions: {},
  persist: true,
});
