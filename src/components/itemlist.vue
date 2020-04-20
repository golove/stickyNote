<template>
  <div id="itemlist">
    <div class="itemlist">
      <item v-show="index%2==0" v-for="(item,index) in filterData()" :key=" item.id" :item="item" />
    </div>
    <div class="itemlist">
      <item v-show="index%2==1" v-for="(item,index) in filterData()" :key=" item.id" :item="item" />
    </div>
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
#itemlist {
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  right: 0;
  left: 0;
  top: 45px;
  height: auto;
  margin: auto;
  width: 1250px;
}
.itemlist {
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  /* min-height: 100vh; */
  flex-wrap: wrap;
  width: 625px;
}
</style>