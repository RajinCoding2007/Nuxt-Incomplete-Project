<template>
  <div class="Theme">
    <button class="Toggle_Theme" @click="toggleTheme">
      <div class="Switch"></div>
      <!-- <div class="Dark"></div> -->
    </button>
  </div>
</template>

<style lang="scss" scoped>
.Theme {
  display: block;
  height: 3.5rem;
  line-height: 1.5rem;
  padding: 1rem 0.75rem;
}
.Toggle_Theme {
  height: 1.5rem;
  width: 2.6rem;
  /* opacity: 0; */
  /* background: var(--color-400); */
  background: rgb($bg-400);
  display: flex;
  justify-content: flex-start;
  padding: 0.1rem;
  border-radius: 1.5rem;
  position: relative;
  border: 0.1rem solid rgb($color-400);
}
.Switch {
  height: 1.1rem;
  width: 1.1rem;
  background: rgb($bg-300);
  display: inline-block;
  border-radius: 1.1rem;
  /* position: absolute; */
  /* top: 0.1rem; */
  background-repeat: no-repeat;
  background-size: 0.8rem 0.8rem;
  background-position: center;
}

.light-mode .Switch {
  background-image: url("/Light.svg");
}

.dark-mode .Switch {
  background-image: url("/Dark.svg");
}

.light-mode .Toggle_Theme {
  justify-content: flex-start;
}

.dark-mode .Toggle_Theme {
  justify-content: flex-end;
}
</style>
<script setup>
function toggleTheme() {
  useColorMode().preference === "light"
    ? (useColorMode().preference = "dark")
    : (useColorMode().preference = "light");
}
</script>
