<template>
  <NavHeader />
  <div>{{ $i18n.locale }}</div>
  <main class="p-12">
    <slot></slot>
  </main>
  <footer></footer>
</template>

<script setup></script>
