<template>
  <div class="inputbox">
    <form>
      <span>分类:{{$store.state.actionHelper.getCategory(item.categoryId)}}</span>
      <ul>
        <li @click="item.categoryId = 0">工作</li>
        <li @click="item.categoryId = 1">生活</li>
        <li @click="item.categoryId = 2">学习</li>
      </ul>
      <input type="text" placeholder="title" v-model="item.title" />
      <textarea v-model="item.content" type="text"></textarea>
    </form>
    <button @click="submit">提交</button>
    <button @click="close">关闭</button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import ItemData from "../model/ItemData";
@Component
export default class inputbox extends Vue {
  item: ItemData = new ItemData(-1, 0);
  constructor() {
    super();
  }

  created(): void {
    this.item = this.$store.state.transItem;
  }

  submit(): void {
    if (
      this.item &&
      this.item.title.trim().length > 0 &&
      this.item.title.trim().length > 0 &&
      this.item.content.trim().length > 0
    ) {
      if (this.item.id > -1) {
        this.$store.state.actionHelper.editData(this.item);
      } else {
        this.$store.state.actionHelper.addData(this.item);
      }
      this.close();
    } else {
      window.alert("内容不能为空!!!");
    }
  }
  close() {
    this.$store.commit("showInput");
  }
}
</script>

<style>
.inputbox {
  position: sticky;
  top: 60px;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 3;
  background: rgb(231, 223, 195);
  padding: 16px;
  width: 900px;
}
input {
  width: 680px;
  background: rgba(255, 255, 255, 0.6);
}
textarea {
  width: 680px;
  height: 350px;
  background: rgba(255, 255, 255, 0.6);
}
ul li {
  width: 75px;
  border-radius: 8px;
  margin: 0 2px;
  padding: 8px;
  cursor: pointer;
  background: plum;
  display: inline-block;
}
ul li:hover {
  background: palevioletred;
}
</style>