<template>
  <div class="itemlist">
    <item v-for="item in filterData()" :key=" item.id" :item="item" />
  </div>
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
      return this.demoArr;
    } else {
      return this.$store.state.actionHelper.demoList.filter((e: any) => {
        return e.categoryId === this.$store.state.filterId;
      });
    }
  }
}
</script>

<style>
.itemlist {
  width: 1250px;
  position: absolute;
  right: 0;
  left: 0;
  top: 125px;
  height: auto;
  margin: auto;
}
</style>