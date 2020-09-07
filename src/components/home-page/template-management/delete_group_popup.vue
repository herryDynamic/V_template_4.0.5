<!--
*@描述:
*@版本:V2.0
*@作者:付媛媛
*@Date:2020年6月14日14:48:46
*@最后修改人:付媛媛
*@LastEditTime:2020年6月16日17:26:50
*@说明：-->
<template>
  <div>
    <van-popup v-model="isShow" class="content">
      <div :class="title">{{popupTitle}}</div>
      <div class="tipsTitle">{{tipsTitle}}</div>
      <!-- 两个按钮 -->
      <van-button
        v-show="secondBtnShow"
        class="btnCaseTwo cancelBtn"
        @click="deleteTemplate()"
      >删除模板</van-button>
      <van-button class="confirmBtn" :class="btn" round @click="determine()">确定</van-button>
    </van-popup>
  </div>
</template>

<style scoped>
/* 默认title样式 - 靠左 */
.titleDefault {
  font-size: 18px;
  margin-top: 5%;
  text-align: left;
  margin-left: 6%;
}
/* case2 title 样式 - 居中 */
.titleCaseTwo {
  font-size: 18px;
  margin-top: 5%;
  text-align: center;
}
/* 弹框 */
.content {
  width: 75%;
  height: auto;
  border-radius: 10px;
}
.tipsTitle {
  margin-top: 6%;
  width: 80%;
  margin-left: 9%;
  font-size: 16px;
}

/* 默认按钮样式 - 靠右 */
.btnDefault {
  color: white;
  margin: 16px;
  font-size: 16px;
  margin-top: 7%;
  margin-left: 60%;
}
/* case2按钮 - 居中 */
.btnCaseTwo {
  color: white;
  margin: 16px;
  font-size: 16px;
  margin-top: 7%;
}
/* 取消按钮 */
.cancelBtn {
  background: rgb(180, 180, 180);
  font-size: 14px;
  height: 33px;
  width: auto;
  border-radius: 15px;
}

/* 确定按钮 */
.confirmBtn {
  background: rgb(31, 205, 168);
  font-size: 14px;
  height: 33px;
  width: auto;
  border-radius: 15px;
}
</style>

<script>
export default {
  props: {
    boolean: { default: "" }, //此弹框是否显示
    popupTitle: { default: "" }, //弹框标题
    tipsTitle: { default: "" }, //弹框内容提示
    secondBtnIsShow: { default: "" } //第二个按钮是否显示
  },
  data() {
    return {
      isShow: false, //是否显示
      secondBtnShow: false, //第二个按钮是否显示标识
      title: "titleDefault", //弹框title样式
      btn: "btnDefault" //按钮样式
    };
  },
  watch: {
    //监听传入的 boolean 标识，控制弹框是否显示
    boolean(newVal) {
      this.isShow = newVal;
    },
    //监听 isShow 值变化传给父组件
    isShow(newVal) {
      this.$emit("listenDeleteGroupPopIsShow", newVal);
    },
    // 监听 第二个按钮是否显示
    secondBtnIsShow(newVal) {
      this.secondBtnShow = newVal;
      this.dynamicCss();
    }
  },
  mounted() {},
  methods: {
    //只删除该分组按钮
    deleteTemplate() {
      //删除该分组下所有模板
      this.$emit("listenDeleteAllTemplate");
    },
    //确定按钮
    determine() {
      //删除该分组，分组内的模板移动到 “其他” 分组
      this.$emit("listenDetermine");
    },
    //动态改变css样式
    dynamicCss() {
      switch (this.secondBtnShow) {
        case true:
          //两个按钮的样式
          this.title = "titleCaseTwo";
          this.btn = "btnCaseTwo";
          break;
        case false:
          //一个按钮的样式
          this.title = "titleDefault";
          this.btn = "btnDefault";
          break;
      }
    }
  }
};
</script>


<!--使用说明：

父组件向此子组件的4个参数（必传）：
  1）boolean ：是否显示此弹框标识
  2）popupTitle：弹框title
  3）tipsTitle ：弹框提示内容
  4) secondBtnIsShow ：是否显示第二个按钮标识，如不需要，传 false，需要，传 true

子组件需要向父组件传递的事件（必传）：
  1）listenDeleteGroupPopIsShow ：是否显示弹框的标识
  2) listenDetermine : 点击弹框确定按钮

子组件需要向父组件传递的事件（如需要弹框的第二个按钮，此项必传，如值需要一个确定按钮，此项忽略即可）
  1）listenDeleteAllTemplate ：点击弹框的第二个按钮
  -->