<!--
*@描述:
*@版本:V2.0
*@作者:白爱民
*@Date:2020年6月22日12:07:24
*@最后修改人:白爱民
*@LastEditTime:2020年6月22日12:07:27
*@说明：
传递参数：
1.  hoverBtnListP:{showName:"add",buttonName:"发布",opacity:0.5,top:85}-->
<template>
  <div id="myAddBtn">
    <div class="btnAll">
      <!-- add -->
      <div
        v-show="addShow"
        style="position: fixed;z-index: 1024;left: 50%;"
        :style="{opacity: hoverBtnListP.opacity, top: hoverBtnListP.top + '%'}"
        id="add"
        class="addCss"
      ></div>
      <!-- btn -->
      <van-button
        style="position: fixed;z-index: 1024;left: 50%;"
        :style="{opacity: hoverBtnListP.opacity ,top: hoverBtnListP.top + '%'}"
        v-show="btnShow"
        id="btn"
        class="btnPosition"
        round
        type="info"
      >{{hoverBtnListP.buttonName}}</van-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// 加号基本样式
.addCss {
  border-radius: 50%; /* 圆角 */
  width: 50px; /* 宽 */
  height: 50px; /* 高 */
  background-size: 50px; /* 加号大小 */
  background-color: #1fcda8; /* 背景颜色 */
  // box-shadow: 1px 4px gray; /* 阴影 */
  background-image: url("../../../assets/publicAll/add.png"); /* 加号图片 */
  margin: -30px 0 0 -25px;
  z-index: 9999;
}

// 按钮基本样式
.btnPosition {
  position: fixed;
  z-index: 1024;
  top: 85%;
  left: 50%;
  width: 300px;
  margin: -25px 0 0 -150px;
}
</style>
<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
export default {
  name: "hoverButton",
  props: {
    hoverBtnListP: {
      type: Object,
      default() {
        return {
          showName: "btn",
          buttonName: "发布",
          opacity: 0.5,
          top: 85
        };
      }
    }
  },
  data() {
    return {
      addShow: false, // 显示加号
      btnShow: false // 显示按钮
    };
  },
  // 封装指令
  directives: {
    focus: {
      // 指令的定义
      bind: function(el) {
        el.focus();
      }
    }
  },
  mounted() {
    console.log(this.hoverBtnListP);

    this.start(); // 初始化判断显示哪个按钮
  },
  methods: {
    // 初始化判断显示哪个按钮
    start() {
      if (this.hoverBtnListP.showName == "btn") {
        this.btnShow = true;
      } else if (this.hoverBtnListP.showName == "add") {
        this.addShow = true;
      }

      // 移除class
      //  var classVal = document
      //     .getElementById("add")
      //     .classList.remove("addPosition");
    }
  }
};
</script>