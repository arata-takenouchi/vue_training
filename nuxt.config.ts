import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  pinia: {
    storeDirs: ['./stores/**', './custom-folder/stores/**']
  },
})