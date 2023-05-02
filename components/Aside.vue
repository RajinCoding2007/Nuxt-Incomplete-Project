<template>
  <pre>{{ aside }}</pre>
  <pre>{{ locales }}</pre>
</template>

<script setup>
const { locales } = useI18n();

const { path } = useRoute();
const { aside: asideMeta } = useAppConfig();

const routes = await queryContent().find();
const aside = await getAside(path, asideMeta, routes);
</script>
