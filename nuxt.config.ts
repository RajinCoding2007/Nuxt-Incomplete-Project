// https://nuxt.com/docs/api/configuration/nuxt-config
import locales from "./lang/lang";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:color";
            @import "@/assets/styles/_default_functions.scss";
            @import "@/assets/styles/functions.scss";
            @import "@/assets/styles/_default_variables.scss";
            @import "@/assets/styles/variables.scss";
            @import "@/assets/styles/_default_mixins.scss";
            @import "@/assets/styles/mixins.scss";
          `,
        },
      },
    },
  },
  css: ["@/assets/styles/main.scss"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  content: {
    highlight: {
      theme: {
        default: "github-light",
        "light-mode": "github-light",
        "dark-mode": "github-dark",
      },
    },
  },
  colorMode: {
    preference: "light",
  },

  googleFonts: {
    families: {
      Roboto: true,
      Inter: true,
    },
  },
  i18n: {
    locales: ["ar", "es", "en", "fr"],
    // locales: [
    //   {
    //     code: "en",
    //     name: "English (US)",
    //     files: ["en.js", "en-US.js"],
    //   },
    // ],
    // lazy: true,
    // langDir: "locales",
    strategy: "no_prefix",
    // vueI18n: "./i18n.config.ts",
  },
});
