<script setup>
const { path: tempPath } = useRoute();
const { locales, locale, defaultLocale, strategy, setLocale } = useI18n();
const path = getLocalizedPath(
  tempPath,
  locales,
  locale,
  defaultLocale,
  strategy
);
const routes = await queryContent().find();
const data = queryFile(path, routes);
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => {
    return i !== locale.value;
  });
});
console.log(availableLocales.value);
</script>

<template>
  <NuxtLayout :name="data?.layout ? data?.layout : 'default'">
    {{ locale }} {{ strategy }}
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale"
      :to="switchLocalePath(locale)"
      @click.prevent.stop="setLocale(locale)"
      style="display: block"
      >{{ locale }}</NuxtLink
    >
    <ContentDoc :path="path">
      <template #empty>
        <NotFoundEmpty :path="path" :type="'empty'" />
      </template>
      <template #not-found>
        <NotFoundEmpty :path="path" :type="'not-found'" />
      </template>
    </ContentDoc>
  </NuxtLayout>
</template>
