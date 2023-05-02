<template>
  <div class="NUXT____PAGE">
    <Header />
    <Main>
      <ContentRenderer :value="data">
        <ContentRendererMarkdown :value="data" /> </ContentRenderer
    ></Main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.NUXT____PAGE {
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>

<script setup>
const { path } = useRoute();
const { data, error } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
}).then();
</script>
