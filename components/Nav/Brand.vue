<template>
  <div class="Nav_Brand">
    <NuxtLink to="/" class="Home_Link">
      <img src="/Logo.svg" alt="Brand" class="Brand_Logo" />
      <span class="Brand_Text">{{ title }}</span>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.Brand_Logo {
  width: 1.75rem;
  height: 2rem;
}

.Home_Link {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.Brand_Text {
  margin-left: 1rem;
  background: $blue;
  background: -webkit-linear-gradient(to right, $blue 0%, $cyan 100%);
  background: -moz-linear-gradient(to right, $blue 0%, $cyan 100%);
  background: linear-gradient(to right, $blue 0%, $cyan 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 1.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
}
</style>
<script setup>
const { title } = useAppConfig();
</script>
