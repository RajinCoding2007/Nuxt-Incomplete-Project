<template>
  <div class="Nav_Tools">
    <!-- <NavLangSwitch /> -->
    <!-- <div class="Language">
      <span class="Lang_Text">En-US </span>
      <IconDownArrow />
    </div> -->
    <!-- <NavTheme /> -->
    <!-- <div class="Github">
      <a href="https://github.com">
        <img
          src="/github-mark.svg"
          alt="Github"
          class="Github_Icon_Light Github_Icon"
        />
        <img
          src="/github-mark-white.svg"
          alt="Github"
          class="Github_Icon_Dark Github_Icon"
        />
      </a>
    </div> -->
    <!-- <NavSearch />
    <NavMenu /> -->

    <NavSearch />
  </div>
</template>

<style lang="scss" scoped>
.Nav_List {
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
}

/* .Language {
  display: inline-block;
  height: 3.5rem;
  line-height: 1rem;
  padding: 1.25rem 0.75rem;
  cursor: pointer;
}
.Github {
  display: inline-block;
  height: 3.5rem;
  line-height: 1rem;
  padding: 1.125rem 0.75rem;
}

.light-mode .Github_Icon_Dark {
  display: none;
}

.dark-mode .Github_Icon_Light {
  display: none;
}

.Github_Icon {
  width: 1.25rem;
  height: 1.25rem;
}

.Lang_Text {
  line-height: 1rem;
} */
</style>
