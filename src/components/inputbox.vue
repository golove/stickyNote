<template>
  <div class="inputbox">
    <form>
      <input type="text" placeholder="请输入标题" v-model="item.title" />
      <div class="category">
        <span
          @click="cateflag=!cateflag"
        >分类:{{$store.state.actionHelper.getCategory(item.categoryId)}}</span>
        <ul v-show="cateflag">
          <li @click="selectCate( 0)">工作</li>
          <li @click="selectCate( 1)">生活</li>
          <li @click="selectCate( 2)">学习</li>
        </ul>
      </div>
      <textarea placeholder="请输入内容" v-model="item.content" type="text"></textarea>
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
  cateflag: boolean = false;
  item: ItemData = new ItemData(-1, 0);
  constructor() {
    super();
  }
  selectCate(id: number): void {
    this.cateflag = false;
    this.item.categoryId = id;
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
  border-radius: 12px;
  position: sticky;
  top: 60px;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 3;
  background: rgb(231, 223, 195);
  padding: 16px;
  width: 700px;
  box-shadow: rgb(49, 49, 49) 5px 5px 15px;
}

.category {
  margin: 5px 0;
  position: relative;
  width: 90px;
  padding: 4px 6px;
  font-size: 20px;
  background: rgb(8, 153, 153);
  border-radius: 8px;
  color: rgb(235, 217, 217);
  height: auto;
  cursor: pointer;
  /* border: 1px solid palevioletred; */
}
.category:hover {
  background: rgb(20, 179, 179);
}
</style>