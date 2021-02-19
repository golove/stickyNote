<template>
  <div id="app">
    <toolbar />
    <transition name="list-complete">
      <inputbox class="list-complete-item" v-if="$store.state.showInput" />
    </transition>
    <itemlist
      class="noblur"
      :class="$store.state.showInput ? 'blurstyle' : ''"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import toolbar from "./components/toolbar.vue";
import itemlist from "./components/itemlist.vue";
import inputbox from "./components/inputbox.vue";
declare module "vue/types/vue" {
  interface Vue {
    [key: string]: any;
  }
}
@Component({
  components: { toolbar, itemlist, inputbox },
})
export default class App extends Vue {
  public article: Array<object> = this.$store.state.remoteHelper.articles;
}
</script>
<style scoped>
@import url("./assets/style.css");
</style>