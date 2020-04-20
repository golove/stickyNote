<template>
  <div id="app">
    <toolbar />
    <itemlist />
    <inputbox v-if="$store.state.showInput" />
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
  components: { toolbar, itemlist, inputbox }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
