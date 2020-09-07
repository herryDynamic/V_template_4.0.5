<template>
  <div>
    <!-- 弹出框 -->
    <van-popup v-model="bulletoxShow" class="content">
      <!-- 提示title -->
      <div class="title">{{title}}</div>
      <!-- 插槽--在父组件添加内容时，需添加 'slot="content"' 属性 -->
      <slot name="content" v-model="popupTemplateName"></slot>
      <!-- 两个按钮 -->
      <van-button class="btn cancelBtn" round @click="cancel()">取消</van-button>
      <van-button class="btn confirmBtn" round @click="determine()">确定</van-button>
    </van-popup>
    <!-- 弹出框 -->
  </div>
</template>

<style scoped>
/* 弹框 */
.content {
  width: 7.8rem;
  height: 6.3rem;
  border-radius: 10px;
}
/* 弹框中title */
.title {
  font-size: 18px;
  margin-top: 10%;
}
/* 两个按钮 */
.btn {
  color: white;
  margin: 20px;
  font-size: 18px;
  margin-top: 9%;
}
/* 取消按钮 */
.cancelBtn {
  background: gray;
}
/* 确定按钮 */
.confirmBtn {
  background: rgb(31, 205, 168);
}
</style>

<script>
export default {
  props: {
    boolean: { default: false },
    popupTemplateName: { default: "" },
    title: { default: "" }
  },
  data() {
    return {
      active: 0,
      bulletoxShow: false, // 弹出框是否显示
      inputInfo: "" // 输入的学习数量
    };
  },
  watch: {
    //监听传入的boolean值
    boolean(newVal) {
      this.bulletoxShow = newVal;
    },
    //监听传入的修改内容值
    popupTemplateName(newVal) {
      this.inputInfo = newVal;
      console.log(this.inputInfo);
    },
    //监听boolean值变化传给父页面
    bulletoxShow(newVal) {
      this.$emit("listenToChildSetting", newVal);
    }
  },

  methods: {
    //弹出框取消按钮
    cancel() {
      this.bulletoxShow = false;
    },
    //弹出框确定按钮
    determine() {
      this.bulletoxShow = false;
      this.$emit("listenToSettingInfo", this.inputInfo);
    }
  }
};
</script>


