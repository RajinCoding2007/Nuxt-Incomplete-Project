<template>
  <div class="Home">
    <h1>Home</h1>
    <input
      type="text"
      v-model="search"
      placeholder="Search"
      class="input_box"
    />
    <p>Search term - {{ search }}</p>
    <div v-for="post in matchingPosts">
      <NuxtLink :to="post._path" style="display: block">
        <h1>{{ post.title }}</h1>
        <p>{{ post._content }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Home {
  width: 25%;
  margin: auto;
  text-align: center;
  word-wrap: break-word;
}
.input_box {
  color: rgb($bg-100);
  background-color: rgb($color-100);
}
</style>

<script setup>
const search = ref("");
const { data: posts } = await useAsyncData("post", () =>
  queryContent("/").find()
);

const matchingPosts = computed(() => {
  return posts.value.filter((post) =>
    post._content
      .toLowerCase()
      .includes(search.value.toLowerCase().replace(/\s+/g, " ").trim())
  );
});
</script>
