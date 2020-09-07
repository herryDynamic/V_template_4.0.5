<!--
*@描述:
*@版本:V2.0
*@作者:付媛媛
*@Date:2020年6月4日15:33:39
*@最后修改人:付媛媛
*@LastEditTime:2020年6月4日15:33:39
*@说明：-->
<template>
  <div>
    <!-- for循环数据，循环列表是父组件传递的 -->
    <div v-for="(item,index) in template">
      <van-swipe-cell>
        <!-- 单元格内容, title值为父组件传递的-->
        <van-cell
          class="van-cell"
          :style="cellStyle"
          :border="false"
          :title="template[index].templateName"
        />
        <!-- 单元格右滑 -->
        <template slot="right">
          <!-- 编辑按钮 -->
          <van-button @click="editTemplate()" square class="edit" text="编辑" />
          <!-- 预览按钮 -->
          <van-button @click="showTemplate()" square text="预览" class="show" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<style scoped>
.van-cell {
  margin-top: var(--margin-top);
  font-size: 18px;
  text-align: left;
}
.edit {
  border: 1px solider #1fcda8;
  color: white;
  background: #1fcda8;
}
.show {
  border: 1px solider gray;
  color: white;
  background: gray;
}
</style>

<script>
import Vue from "vue";
import { SwipeCell } from "vant"; // 左右滑动弹出编辑、删除等
Vue.use(SwipeCell);
export default {

  props: {
    //接收 join_template （父组件）传递的值
    template: { default: "" }
  },
  data() {
    return {
      //单元格样式
      cellStyle: {
        "--margin-top": "20px"
      }
    };
  },
  mounted() {},
  methods: {
    //编辑模板
    editTemplate() {},
    //预览模板
    showTemplate() {}
  }
};
</script>