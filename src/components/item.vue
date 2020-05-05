<template>
  <div class="item">
    <div class="titlestle">
      <h2>{{item.title}}</h2>
      <span>
        <button :title="item.archive?'取消归档':'归档'" class="buttonicon" @click="archive(item)">
          <svg v-if="item.archive" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 21H20V8H4M14 15V18H10V15H7L12 10L17 15M3 3H21V7H3" />
          </svg>

          <svg v-else style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3 3H21V7H3V3M4 21V8H20V21H4M14 14V11H10V14H7L12 19L17 14H14Z"
            />
          </svg>
        </button>
        <button title="修改" class="buttonicon" @click="editData(item)">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
            />
          </svg>
        </button>

        <button title="删除" class="buttonicon" @click="remove">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z"
            />
          </svg>
        </button>
      </span>
    </div>

    <div>
      <span>分类:{{$store.state.actionHelper.getCategory(item.categoryId)}}</span>
      <span style="marginLeft:8px">{{item.createTime}}</span>
    </div>

    <p>{{item.content}}</p>
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
  archive(item: ItemData) {
    if (item.archive) {
      item.archive = false;
    } else {
      item.archive = true;
    }

    this.$store.state.actionHelper.editData(item);
  }
  remove(): void {
    if (!confirm(`确认要删除<${this.item.title}>的笔记吗？`)) return;
    this.$store.state.actionHelper.remove(this.item.id);
  }
}
</script>

<style>
.item {
  -webkit-column-break-inside: avoid;
  margin-bottom: 1em;
  break-inside: avoid;
  padding: 8px 14px;
  background: teal;
  color: white;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.item:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border: 0px solid;
  border-color: rgb(8, 153, 153) #fff;
  transition: border 0.5s ease;
}

.item:hover:before {
  border-left-width: 40px;
  border-bottom-width: 30px;
}
.titlestle {
  display: flex;
  justify-content: space-between;
}
.titlestle span {
  display: flex;
  justify-content: end;
}
</style>