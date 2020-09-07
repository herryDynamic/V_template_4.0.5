<!--
*@描述:封装弹框组件
*@版本:V2.0
*@作者:付媛媛
*@Date:2020年6月8日19:44:29
*@最后修改人:付媛媛
*@LastEditTime:2020年6月10日21:28:49
*@说明：-->
<template>
  <!-- 弹框 -->
  <van-popup v-model="popIsShow" class="content">
    <!-- 提示title -->
    <div class="title">{{popupTitle}}</div>
    <!-- 文本框 -->
    <van-field
      class="field"
      v-model="fieldValue"
      oninput="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')"
      focus="1"
      required
      clearable
      :maxlength="vanField.maxlength"
      :placeholder="popupPlaceholder"
    ></van-field>
    <!-- 按钮 -->
    <van-button class="btn" round @click="determine()">确定</van-button>
  </van-popup>
</template>

<style lang="scss" scoped>
/* 弹框 */
.content {
  width: 75%;
  height: auto;
  border-radius: 10px;
}
/* 弹框中title */
.title {
  font-size: 17px;
  margin-top: 5%;
  text-align: left;
  margin-left: 6%;
}
// 文本框
.field {
  width: 80%;
  margin-left: 10%;
  padding-left: 5%;
  border-bottom: 1px solid gray;
  margin-top: 4%;
  font-size: 16px;
}
/* 确定按钮 */
.btn {
  color: white;
  background: rgb(31, 205, 168);
  font-size: 16px;
  margin-top: 5%;
  margin-bottom: 4%;
  margin-left: 60%;
}
</style>

<script>
export default {
  props: {
    //父组件传递-用于控制当前弹框组件是否显示
    boolean: { default: false },
    //父组件传递-用于控制 文本框 是否显示
    popupTitle: { default: "" },
    //文本框值
    popFieldValue: { default: "" },
    //文本框水印
    popupPlaceholder: { default: "" }
  },
  data() {
    return {
      active: 0, //van-popup组件需要属性
      popIsShow: false, // 弹出框是否显示
      //文本框属性
      vanField: {
        maxlength: 11 //最大长度限制
      },
      fieldValue: "" //文本框的值
    };
  },
  watch: {
    //监听传入的 popIsShow 标识，控制弹框是否显示
    boolean(newVal) {
      this.popIsShow = newVal;
    },
    //监听 popIsShow 值变化传给父组件
    popIsShow(newVal) {
      this.$emit("listenIsShow", newVal);
    },
    // 监听文本框原来值的变化
    popFieldValue(newVal) {
      this.fieldValue = newVal;
    }
  },
  mounted() {},
  methods: {
    //弹框确定按钮
    determine() {
      //点击确定将此操作传递给父组件
      this.$emit("listenDetermine", this.fieldValue);
    }
  }
};
</script>

<!--
===================================================================================
父组件中使用说明：
1、import 此组件
2、注册组件
3、使用组件
4、使用时需注意父组件需要给子组件传递以下值：
    1）boolean ：用于控制当前弹框组件是否显示
    2）popupTitle：弹框标题
    3）popupPlaceholder：弹框文本框水印
    4）popupFieldValue ：弹框内文本框值
5、使用时子组件需要给父组件传递以下值：
    1）listenIsShow ：当前弹框组件是否显示
    2）listenDetermine ：点击弹框确定按钮的操作传递给父组件
 -->

