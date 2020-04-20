<template>
  <div class="item">
    <span>{{item.title}}</span>
    <p>{{item.content}}</p>
    <span>分类:{{$store.state.actionHelper.getCategory(item.categoryId)}}</span>
    <button @click="remove">删除</button>
    <button @click="editData(item)">修改</button>
  </div>
</template>

<script lang = "ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";
@Component
export default class item extends Vue {
  @Prop() item!: ItemData;
  editData(item: ItemData) {
    let newitem = JSON.parse(JSON.stringify(this.item));
    this.$store.commit("setTransItem", newitem);
  }
  remove(): void {
    if (!confirm(`确认要删除<${this.item.title}>的笔记吗？`)) return;
    this.$store.state.actionHelper.remove(this.item.id);
  }
}
</script>

<style>
.item {
  margin: 5px;
  width: 585px;
  display: inline-block;
  padding: 8px 14px;
  background: teal;
  color: white;
}
</style>