<template>
  <nav class="Nav_Bar">
    <ul class="Nav_List">
      <li class="Nav_Item" v-for="item in Nav" :key="Nav.indexOf(item)">
        <NuxtLink
          :to="item.link"
          class="Nav_Link"
          :class="{
            active:
              $route.fullPath.startsWith(item.link) ||
              $route.fullPath.startsWith(item.link + '/'),
          }"
          >{{ item.text ?? "" }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.Nav_List {
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
}
.Nav_Link {
  display: flex;
  min-height: 4rem;
  padding: 0 1.25rem;
  max-width: 15rem;
  height: 100%;
  align-items: center;
}
</style>

<script setup>
const { Nav } = useAppConfig();
</script>
