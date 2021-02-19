<template>
  <div class="inputbox">
    <form>
      <input type="text" placeholder="请输入标题" v-model="item.title" />
      <div class="category">
        <span @click="cateflag = !cateflag"
          >分类:{{
            $store.state.actionHelper.getCategory(item.categoryId)
          }}</span
        >
        <ul v-show="cateflag">
          <li @click="selectCate(0)">工作</li>
          <li @click="selectCate(1)">生活</li>
          <li @click="selectCate(2)">学习</li>
        </ul>
      </div>
      <textarea
        placeholder="请输入内容"
        v-model="item.content"
        type="text"
      ></textarea>
    </form>
    <button class="buttoninput" @click="submit">提交</button>
    <button class="buttoninput" @click="close">关闭</button>
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
.buttoninput {
  height: 35px;
  width: 65px;
  margin: 0 8px;
  background: rgb(8, 153, 153);
  outline: none;
}
.buttoninput:hover {
  background: rgb(20, 179, 179);
}

.inputbox {
  /* border-radius: 12px; */
  position: fixed;
  border-radius: 27px;
  top: 60px;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 3;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(25px);
  padding: 16px;
  width: 700px;
  box-shadow: rgba(49, 49, 49, 0.3) 0.5px 0.5px 5px;
}
input {
  outline: none;
}
textarea {
  outline: 1px dashed rgba(0, 99, 77, 0.4);
}

.category {
  margin: 5px 0;
  position: relative;
  width: 90px;
  padding: 4px 6px;
  font-size: 18px;
  background: rgba(8, 153, 153, 1);
  /* border-radius: 8px; */
  color: rgb(235, 217, 217);
  height: auto;
  cursor: pointer;
  /* border: 1px solid palevioletred; */
}
.category:hover {
  background: rgb(20, 179, 179);
}
</style>