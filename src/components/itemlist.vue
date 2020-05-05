<template>
  <transition-group class="itemlist" name="list-complete" tag="div">
    <item
      class="listitem list-complete-item"
      v-for="(item) in filterData()"
      :key=" item.id"
      :item="item"
    />
  </transition-group>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import item from "./item.vue";
@Component({
  components: { item }
})
export default class itemlist extends Vue {
  demoArr: Array<ItemData> = this.$store.state.actionHelper.demoList;
  filterData() {
    if (this.$store.state.filterId == -1) {
      return this.demoArr.filter((e: any) => {
        return e.archive === false;
      });
    } else if (this.$store.state.filterId == -2) {
      return this.$store.state.actionHelper.demoList.filter((e: any) => {
        return e.archive === true;
      });
    } else {
      return this.$store.state.actionHelper.demoList.filter(
        (e: any, index: number) => {
          return (
            e.archive === false && e.categoryId === this.$store.state.filterId
          );
        }
      );
    }
  }
}
</script>

<style>
.itemlist {
  position: absolute;
  right: 0;
  left: 0;
  top: 55px;
  margin: auto;
  height: auto;
  max-width: 1600px;
  -moz-column-count: auto;
  -webkit-column-count: auto;
  column-count: auto;
  column-width: 480px;
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
  column-gap: 1em;
}
</style>