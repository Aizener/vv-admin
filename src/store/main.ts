import { defineStore } from "pinia";

export const useMainStore = defineStore('mainStore', () => {
  const title = 'VVAdmin';
  return {
    title
  };
});