<template>
  <div id="itemlist">
    <transition-group class="itemlist" name="list-complete">
      <item
        class="list-complete-item listitem"
        v-for="(item) in filterData()"
        :key=" item.id"
        :item="item"
      />
    </transition-group>
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
      return this.$store.state.actionHelper.demoList.filter(
        (e: any, index: number) => {
          return e.categoryId === this.$store.state.filterId;
        }
      );
    }
  }
}
</script>

<style>
#itemlist {
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  right: 0;
  left: 0;
  top: 50px;
  height: auto;
  margin: auto;
  width: 1250px;
}
.itemlist {
  width: 1250px;
  column-count: auto;
  column-width: 580px;
  column-gap: 1em;
}
</style>