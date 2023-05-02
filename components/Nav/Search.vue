<template>
  <button type="button" class="Search_Button" @click="toggleSearchDialog">
    <font-awesome-icon
      :icon="['fas', 'magnifying-glass']"
      class="Search_Icon"
    />
    <span class="Search_Text">Search</span>
  </button>

  <NavSearchDialog v-if="showSearchDialog" @close="toggleSearchDialog" />
</template>

<style lang="scss" scoped>
.Search_Button {
  padding: 0.5rem 8rem 0.5rem 0.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid rgb($bg-300);
  color: rgb($bg-400);
}

.Search_Icon {
  margin-right: 0.5rem;
}
</style>

<script setup>
const showSearchDialog = ref(false);

const toggleSearchDialog = () => {
  showSearchDialog.value = !showSearchDialog.value;
};
</script>
