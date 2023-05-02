<template>
  <div class="Search_Container" @click.self="$emit('close')">
    <div class="Search_Dialog">
      <div class="Search_Bar">
        <form class="Search_Form">
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            size="xl"
            class="Search_Icon"
          />
          <input
            class="Search_Input"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            enterkeyhint="search"
            spellcheck="false"
            autofocus="true"
            placeholder="Search docs"
            type="search"
            v-model="search"
          />
        </form>
      </div>
      <div class="Search_Results" data-scrollbar>
        <!-- <section v-for="category in matchingPosts">
          <div>
            {{ category.category }}
          </div>
          <ul>
            <li v-for="post in category.children">
              <NuxtLink :to="localePath(post._path)">
                <div>
                  <div>
                    <font-awesome-icon :icon="['far', post.icon]" size="lg" />
                  </div>
                  <div>
                    {{ post.title }}
                  </div>
                  <div>
                    <font-awesome-icon
                      :icon="['fas', 'arrow-right']"
                      size="lg"
                    />
                  </div>
                </div>
              </NuxtLink>
              {{ post._content }}
            </li>
          </ul>
        </section> -->
        <div v-for="post in posts">
          <pre>{{ post }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Search_Container {
  background-color: rgba($color-400, 0.8);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
}

.Search_Dialog {
  background-color: rgb($bg-300);
  margin: 4rem auto 0;
  width: 35rem;
  border-radius: 0.25rem;
}

.Search_Bar {
  padding: 0.75rem 0.75rem 0;
}
.Search_Input {
  appearance: none;
  background: transparent;
  border: 0;
  color: $color;
  flex-grow: 1;
  font-size: 1.2rem;
  height: 100%;
  outline: none;
  padding: 0 0 0 0.5rem;
  width: 80%;
}

.Search_Form {
  align-items: center;
  background-color: rgba($bg-400, 0.3);
  border: 0.1rem solid color.mix($cyan, white, 50%);
  border-radius: 4px;
  display: flex;
  height: 3.5rem;
  margin: 0;
  padding: 0 0.75rem;
  position: relative;
  width: 100%;
}

.Search_Icon {
  color: color.mix($cyan, white, 50%);
}

.Search_Results {
  max-height: 21.75rem;
  min-height: 8.75rem;
  overflow: auto;
  padding: 0 0.75rem;
}

.Post_Category {
  color: color.mix($cyan, white, 50%);
  font-size: 0.85rem;
  font-weight: bold;
  line-height: 2rem;
  margin: 0;
  padding-top: 0.5rem;
  z-index: 10;
  position: sticky;
  background-color: rgba($bg-300);
}

.Post_List {
  list-style: none;
  margin: 0;
  padding: 0;
}

.Post_Item {
  border-radius: 0.25rem;
  display: flex;
  padding-bottom: 0.25rem;
  position: relative;
}

.Post_Link {
  background: rgba($bg-400, 0.4);
  border-radius: 0.25rem;
  display: block;
  padding-left: 0.75rem;
  width: 100%;
}

.Post {
  align-items: center;
  color: rgb($color-300);
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  padding: 0 0.75rem 0 0;
}

.Post_Icon,
.Post_Action {
  color: rgb($color-300);
  stroke-width: 1.4;
  height: 1.25rem;
  width: 1.25rem;
  display: flex;
  align-items: center;
}

.Post_Title {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-weight: bold;
  justify-content: center;
  line-height: 1.2rem;
  margin: 0 0.5rem;
  overflow-x: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
}
</style>

<script setup>
import Scrollbar from "smooth-scrollbar";
const search = ref("");
const { data: posts } = await useAsyncData("post", () =>
  queryContent("/").where({ _extension: "md" }).find()
);

// const matchingPosts = computed(() => {
//   const filteredArray = posts.value.filter((post) =>
//     post.title
//       .toLowerCase()
//       .includes(search.value.toLowerCase().replace(/\s+/g, " ").trim())
//   );

//   const categories = filteredArray.reduce((prev, current) => {
//     prev[current.category] = prev[current.category] || [];
//     prev[current.category].push(current);
//     return prev;
//   }, {});

//   return Object.entries(categories).map((e) => ({
//     category: e[0],
//     children: e[1],
//   }));
// });

onMounted(() => {
  Scrollbar.initAll({
    alwaysShowTracks: true,
    syncCallbacks: true,
  });
});
</script>
