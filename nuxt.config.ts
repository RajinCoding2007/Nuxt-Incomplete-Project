// https://nuxt.com/docs/api/configuration/nuxt-config

import locales from "./lang/lang";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
  ],
  build: { transpile: ["@fortawesome/vue-fontawesome"] },
  css: [
    "@/assets/styles/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:color";
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_functions.scss";
            @import "@/assets/styles/_mixins.scss";
          `,
        },
      },
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: "nord",
        "light-mode": "github-dark",
        "dark-mode": "github-dark",
      },
    },
  },
  colorMode: {
    preference: "light",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inter: true,
    },
  },
  i18n: {
    locales,
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    strategy: "prefix",
    vueI18n: "./i18n.config.ts",
  },
});
