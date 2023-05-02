export default defineI18nConfig((nuxt) => ({
  legacy: false,
  fallbackLocale: "fr",
  missingWarn: false,
  fallbackWarn: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Wlcome",
    },
    fr: {
      welcome: "Bienvenue",
    },
  },
}));
