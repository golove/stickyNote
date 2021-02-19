
<template>
  <div class="toolbar">
    <h2>便签</h2>
    <div class="btn">
      <button @click="showInput">新建</button>
      <div class="category1">
        <button @click="cateflag = !cateflag">
          {{
            $store.state.filterId === -1
              ? "全部"
              : $store.state.filterId === -2
              ? "归档"
              : $store.state.actionHelper.getCategory($store.state.filterId)
          }}
          <span>{{ doFliter($store.state.filterId) }}</span>
        </button>
        <ul v-show="cateflag">
          <li @click="selectCate(-1)">
            全部
            <span>{{ doFliter(-1) }}</span>
          </li>
          <li @click="selectCate(0)">
            工作
            <span>{{ doFliter(0) }}</span>
          </li>
          <li @click="selectCate(1)">
            生活
            <span>{{ doFliter(1) }}</span>
          </li>
          <li @click="selectCate(2)">
            学习
            <span>{{ doFliter(2) }}</span>
          </li>
          <li @click="selectCate(-2)">
            归档
            <span>{{ doFliter(-2) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";
@Component
export default class toolbar extends Vue {
  cateflag: boolean = false;
  showInput() {
    this.$store.commit("setTransItem", new ItemData(-1, 0));
  }
  doFliter(id: number) {
    if (id == -1) {
      return this.$store.state.actionHelper.demoList.filter((e: any) => {
        return e.archive === false;
      }).length;
    } else if (id == -2) {
      return this.$store.state.actionHelper.demoList.filter((e: any) => {
        return e.archive === true;
      }).length;
    } else {
      return this.$store.state.actionHelper.demoList.filter((e: any) => {
        return e.archive === false && e.categoryId === id;
      }).length;
    }
  }

  selectCate(id: number): void {
    this.cateflag = false;
    this.$store.commit("setFilterId", id);
  }
}
</script>

<style>
.btn {
  display: flex;
  height: 100%;
  color: rgb(235, 221, 221);
}
.btn button {
  height: 100%;
  width: 65px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0px;
  outline: none;
}
ul li span {
  display: inline-block;
  /* width: 20px;
  height: 20px; */
  padding: 2px 8px;
  border-radius: 50%;
  background: cadetblue;
  margin-left: 25px;
}
.toolbar {
  display: flex;
  height: 35px;
  /* padding: 10px; */
  max-width: 1600px;
  background: teal;
  position: fixed;
  right: 0;
  left: 0;
  margin: auto;
  justify-content: space-around;
  z-index: 2;
  /* border: 12px solid white; */
}

.category1 {
  position: relative;
  z-index: 2;
}
.category1 ul li:first-child {
  border-bottom: 1px solid rgb(20, 179, 179);
}
</style>