<template>
  <footer
    class="Footer bg-slate-50 px-8 py-10 flex flex-row justify-between items-center border-t-2 border-t-slate-100/75"
  >
    <div class="text-xs">
      &copy; {{ currentYear }} {{ company }}, Inc. All rights reserved
    </div>
    <div class="text-slate-400">
      <ul>
        <li class="inline-block mx-3">
          <Icon name="fa6-brands:facebook" size="1.5rem" />
        </li>
        <li class="inline-block mx-3">
          <Icon name="fa6-brands:instagram" size="1.5rem" />
        </li>
        <li class="inline-block mx-3">
          <Icon name="fa6-brands:twitter" size="1.5rem" />
        </li>
        <li class="inline-block mx-3">
          <Icon name="fa6-brands:github" size="1.5rem" />
        </li>
        <li class="inline-block mx-3">
          <Icon name="fa6-brands:youtube" size="1.5rem" />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const appConfig = useAppConfig();

const company = appConfig.company || "Your company";
const currentYear = ref(new Date().getFullYear());
</script>
