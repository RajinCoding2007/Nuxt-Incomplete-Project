<template>
  <header class="Header_Nav">
    <NavBrand />
    <NavBar />
    <NavTools />
  </header>
</template>

<style lang="scss" scoped>
.Header_Nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid rgb($gray);
  padding: 0 3rem;
}
</style>
