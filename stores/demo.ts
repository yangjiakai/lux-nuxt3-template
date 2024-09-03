import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    count2: 1,
  }),
  actions: {
    increment() {
      this.count++;
      this.count2++;
    },
  },
  persist: [
    {
      paths: ["count", "count2"],
      storage: persistedState.localStorage,
    },
  ],
  // persist:true
});
