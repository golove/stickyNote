
<template>
  <div class="toolbar">
    <h2>toolbar</h2>
    <div class="btn">
      <button @click="showInput">新增</button>

      <ul>
        <li @click="$store.commit('setFilterId',-1)">
          全部
          <span>{{doFliter(-1)}}</span>
        </li>
        <li @click="$store.commit('setFilterId',0)">
          工作
          <span>{{doFliter(0)}}</span>
        </li>
        <li @click="$store.commit('setFilterId',1)">
          生活
          <span>{{doFliter(1)}}</span>
        </li>
        <li @click="$store.commit('setFilterId',2)">
          学习
          <span>{{doFliter(2)}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";
@Component
export default class toolbar extends Vue {
  showInput() {
    this.$store.commit("setTransItem", new ItemData(-1, 0));
  }
  doFliter(id: number) {
    if (id == -1) {
      return this.$store.state.actionHelper.demoList.length;
    } else {
      return this.$store.state.actionHelper.demoList.filter((e: any) => {
        return e.categoryId === id;
      }).length;
    }
  }
}
</script>

<style>
h2,
ul {
  padding: 0;
  margin: 0;
}
.btn {
  display: flex;
}
.toolbar {
  display: flex;
  height: 35px;
  padding: 10px;
  width: 1250px;
  background: cyan;
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  justify-content: space-around;
}
button {
  color: white;
  height: 35px;
  width: 65px;
  margin: 0 8px;
  border-radius: 8px;
  background: plum;
  cursor: pointer;
  border: none;
}
button:hover {
  background: palevioletred;
}
</style>