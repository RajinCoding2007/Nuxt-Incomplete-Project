<template>
  <template v-if="!props.path || props.type === 'not-found'">
    <NotFound />
  </template>
  <template v-else>
    <Empty />
  </template>
</template>
<script setup>
const props = defineProps({
  type: String,
  path: String,
});
</script>
