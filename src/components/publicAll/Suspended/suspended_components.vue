<!--
*@描述:悬浮球组件--使用中
*@版本:V1.0
*@作者:白爱民
*@Date:2020年3月28日08:22:14
*@最后修改人:白爱民
*@LastEditTime:2020年3月28日08:22:14
*@使用说明：

1. 引入组件： import suspendedComponents from "../../components/publicAll/Suspended/suspended_components";

2. 声明组件：
components: {
    suspendedComponents
  },

3.  使用组件
<suspendedComponents
      :titleName="预览"
      @listenSCReturn="listenSCReturn"
      @listenSCSave="listenSCSave"
      @listenSCNext="listenSCNext"
    ></suspendedComponents>

4.  返回的事件：

 listenSCReturn(newVal) {
      console.log("我是返回按钮");
    },
    listenSCSave(newvZ) {
      console.log("我是保存按钮");
    },
    listenSCNext() {
      console.log("我是下一步");
    }

-->
<template>
  <div>
    <!-- 悬浮球组件 -->
    <div>
      <!-- 悬浮球 -->

      <!-- 原始版本 -->
      <!-- <div
        ref="breathing_lamp"
        class="breathing_lamp"
        @click="buttonListShow()"
        @touchstart.stop="handleTouchStart"
        @touchmove.prevent.stop="handleTouchMove($event)"
        @touchend.stop="handleTouchEnd"
        :style="{left: left + 'px',top: top + 'px',width: itemWidth + 'px',height: itemHeight + 'px'}"
        v-text="text"
        v-if="isShow"
      ></div>-->

      <!-- 修改尝试版本 -->
      <div
        ref="breathing_lamp"
        class="breathing_lamp"
        @click="buttonListShow()"
        @touchstart.stop="handleTouchStart"
        @touchmove.prevent.stop="handleTouchMove($event)"
        @touchend.stop="handleTouchEnd"
        :style="{left: left + 'px',top: top + 'px',width: itemWidth + 'px',height: itemHeight + 'px'}"
        v-text="text"
        v-if="isShow"
      ></div>

      <!-- 按钮列表 -->
      <div id="buttonComBination" v-show="buttonListShowTop" class="collapseTransiton">
        <el-collapse-transition>
          <div
            class="transitionBoxs transitionBoxsTop"
            :style="{left: left - 25+  'px',top: top +30+ 'px'}"
          >
            <div
              v-if="returnTitleIsShow"
              class="transition-box"
              @click="returnClick()"
              v-text="returnTitle"
            ></div>
            <div
              v-if="SaveTitleIsShow"
              class="transition-box"
              @click="saveClick()"
              v-text="SaveTitle"
            ></div>
            <div
              v-if="nextBtnIsShow"
              class="transition-box"
              @click="nextClick()"
              v-text="nextTitle"
            ></div>
            <div
              v-if="noreTitleIsShow"
              class="transition-box"
              @click="morePageClick()"
              v-text="noreTitle"
            ></div>
          </div>
        </el-collapse-transition>
      </div>
      <div id="buttonComBination" v-show="buttonListShowBotton" class="collapseTransiton">
        <el-collapse-transition>
          <div
            class="transitionBoxs transitionBoxsBottom"
            :style="{left: left - 25+  'px', top: top + 200+ 'px'}"
          >
            <div
              v-if="returnTitleIsShow"
              class="transition-box"
              @click="returnClick()"
              v-text="returnTitle"
            ></div>
            <div
              v-if="SaveTitleIsShow"
              class="transition-box"
              @click="saveClick()"
              v-text="SaveTitle"
            ></div>
            <div
              v-if="nextBtnIsShow"
              class="transition-box"
              @click="nextClick()"
              v-text="nextTitle"
            ></div>
            <div
              v-if="noreTitleIsShow"
              class="transition-box"
              @click="morePageClick()"
              v-text="noreTitle"
            ></div>
          </div>
        </el-collapse-transition>
      </div>

      <!-- 左侧弹出框title -->
      <!-- 原始版本 -->
      <!-- <div
        v-show="titleTestLeft"
        @click="leftTest()"
        id="lamp_left_titile"
        style="opacity: 1 ; filter: Alpha(opacity=100 ; transition: opacity 3s"
        :style="{left: left -160 + 'px',top: top -60 + 'px'}"
        class="leftTitle titleAll"
      >{{titleName}}</div>-->

      <!-- 修改版本 -->
      <div
        v-show="titleTestLeft"
        @click="leftTest()"
        id="lamp_left_titile"
        style="opacity: 1 ; filter: Alpha(opacity=100 ; transition: opacity 3s"
        :style="{left: left -150 + 'px',top: top -65 + 'px'}"
        class="leftTitle titleAll"
      >{{titleName}}</div>
      <!-- 右侧弹出框title -->

      <div
        v-show="titleTestRight"
        @click="rightTest()"
        id="lamp_right_titile"
        style="opacity: 1 ; filter: Alpha(opacity=100 ; transition: opacity 3s"
        :style="{left: left +60 + 'px',top: top -65 + 'px'}"
        class="rightTitle titleAll"
      >{{titleName}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*********************悬浮球左右两侧样式**********/
// .titleAll {
//   background-color: #ffffff;
//   margin: 50px auto;
//   padding: 16px;
//   width: 100px;
//   min-height: 15px;
//   border-radius: 10px;
//   position: fixed;
//   top: 40%;
//   font-size: 15px;//修改字体
// }

.titleAll {
  background-color: #ffffff;
  // margin:50px auto;
  margin: 60px auto;
  // padding: 16px;
  padding: 9px;
  width: 100px;
  min-height: 15px;
  border-radius: 10px;
  position: fixed;
  top: 40%;
  font-size: 15px; //修改字体
}

.rightTitle {
  left: 200px;
}
.leftTitle {
  left: 165px;
}
.titleAll::before {
  content: " ";
  // border-top: 0.266667rem solid transparent;
  // border-bottom: 0.266667rem solid transparent;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}
.rightTitle::before {
  content: " ";
  border-right: 0.266667rem solid #ffffff;
  position: absolute;
  left: -10px;
  // top: 0.48rem;
  top: 10px;
}
// .leftTitle::before {
//   content: " ";
//   border-left: 10px solid #ffffff;
//   position: absolute;
//   left: 130px;
//   top: 0.48rem;
// }

.leftTitle::before {
  border-left: 8px solid #ffffff;
  position: absolute;
  right: -8px;
  top: 10px;
}
/*********************悬浮球弹出按钮列表**********/
// 按钮列表
.transitionBoxs {
  min-height: auto;
  position: fixed;
  z-index: 1024;
  top: 57%;
  right: 5%;
  border: 1px;
}
.transitionBoxsTop {
  margin-top: -50%;
}
.transitionBoxsBottom {
  margin-top: -37%;
}
.transition-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  height: 30px;
  border-radius: 4px;
  background-color: #1fcda8;
  color: #fff;
  padding: 10px 10px;
  box-sizing: border-box;
  width: 90px;
  font-size: 16px; //增加字体
  line-height: 30px; //增加垂直居中
}

/*********************悬浮球位置**********/
.breathing_lamp {
  // border: 1px;
  // border-radius: 50%;
  // width: 40px;
  // height: 40px;
  position: fixed;
  top: 40%;
  right: 0%;
  z-index: 1024;
  // background: url("../../../assets/publicAll/cloud.png") no-repeat center center;
  background: url("../../../assets/publicAll/circle.png") no-repeat center
    center;
  background-size: 100% 100%; // 背景图片适应外边框大小
}
</style>
<script>
import buttonComBination from "../Suspended/button_comBination";
export default {
  components: {
    buttonComBination
  },
  props: {
    returnTitle: { default: "返回" },
    returnTitleIsShow: { type: Boolean, default: true },
    SaveTitle: { default: "保存" },
    SaveTitleIsShow: { type: Boolean, default: true },
    nextBtnIsShow: { type: Boolean, default: false },
    nextTitle: { default: "下一步" },
    titleName: { default: "预览" }, // 悬浮球titleName
    noreTitle: { default: "更多" },
    noreTitleIsShow: { type: Boolean, default: true },
    // 悬浮球文字
    text: {
      type: String,
      default: ""
    },
    // 悬浮球宽度
    itemWidth: {
      type: Number,
      default: 40
    },
    // 悬浮球高度
    itemHeight: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      // titleName: "预览",
      titleTestLeft: true, //默认左侧title显示
      titleTestRight: false, //默认右侧title不显示
      timeOutTimer: null, // 定时器若隐若现
      // visible: false, //
      buttonListShowTop: false, // 悬浮球按钮列表是否显示，默认不显示
      buttonListShowBotton: false,
      cloud: require("../../../assets/publicAll/cloud.png"), // 悬浮球图片

      left: 0, // 全局左侧位置
      top: 300, // 全局高度位置
      startToMove: false, // 开始移动时候不显示
      isShow: true, // 组件是否显示
      // timer: null,  // 定时器
      currentTop: null, // 获取当前页面的滚动条纵坐标位置
      clientW: document.documentElement.clientWidth, //视口宽
      clientH: document.documentElement.clientHeight //视口高
    };
  },
  watch: {},
  created() {
    // 初始化定义距离四周距离
    this.left = this.clientW - this.itemWidth - 30;
    this.top = (3 * this.clientH) / 4 - (3 * this.itemHeight) / 4; //初始占页面四分之三的位置

    this.rightTimeOut();
    this.leftTimeOut();

    this.start();
  },
  methods: {
    start() {},
    /* ***********************按钮返回事件 *********************/
    returnClick() {
      this.$emit("listenSCReturn", "return");
    },
    saveClick() {
      this.$emit("listenSCSave", "save");
    },
    nextClick() {
      this.$emit("listenSCNext", "next");
    },
    morePageClick() {
      this.$router.push({
        name: "more_page"
      });
    },

    /* ***********************悬浮球列表 *********************/

    // 单击悬浮球时候触发是否显示按钮列表
    buttonListShow() {
      if (this.top > 160) {
        this.buttonListShowBotton = false;
        if (this.buttonListShowTop == true) {
          this.buttonListShowTop = false;
        } else {
          this.buttonListShowTop = true;
        }
      } else {
        this.buttonListShowTop = false;
        if (this.buttonListShowBotton == true) {
          this.buttonListShowBotton = false;
        } else {
          this.buttonListShowBotton = true;
        }
      }
      if (this.buttonListShowTop == true) {
      }
    },

    // 移动悬浮球后触发是否在上还是下显示
    buttonListEnd() {
      if (this.top > 120 && this.buttonListShowBotton == true) {
        this.buttonListShowBotton = false;
        this.buttonListShowTop = true;
      } else if (this.top < 120 && this.buttonListShowTop == true) {
        this.buttonListShowTop = false;
        this.buttonListShowBotton = true;
      }
    },
    // buttonListShow() {
    //   //不使用两个，检测一下如果top距离低于50px，则将this.top+=180
    //   // 判断是否显示，判断在那边显示。
    //   if (this.buttonListShowTop == true) {
    //     this.buttonListShowTop = false;
    //   } else {
    //     // if (this.top < 50) {
    //     //   this.top += 180;
    //     // }
    //     this.buttonListShowTop = true;
    //   }
    // },
    /* ***********************设置呼吸tittle *********************/
    // 悬浮球右侧title显示
    rightTest() {
      const a = document.getElementById("lamp_right_titile");

      a.style.opacity = "1"; // 全部显示
      a.style.filter = "Alpha((opacity = 100))";
      this.rightTimeOut();
    },
    // 悬浮球右侧title几秒后隐身显示
    rightTimeOut() {
      this.timeOutTimer = setTimeout(() => {
        const a = document.getElementById("lamp_right_titile");

        a.style.opacity = "0.2"; // 隐身20%显示
        a.style.filter = "Alpha((opacity = 0))";
      }, 5000);
    },
    // 悬浮球左侧title显示
    leftTest() {
      const a = document.getElementById("lamp_left_titile");

      a.style.opacity = "1";
      a.style.filter = "Alpha((opacity = 100))";
      this.leftTimeOut();
    },
    // 悬浮球左侧title几秒后隐身显示
    leftTimeOut() {
      this.timeOutTimer = setTimeout(() => {
        const a = document.getElementById("lamp_left_titile");

        a.style.opacity = "0.2";
        a.style.filter = "Alpha((opacity = 0))";
      }, 5000);
    },

    /* ***********************悬浮球 *********************/

    // 开始移动方法
    handleTouchStart() {
      this.startToMove = true;
      this.$refs.breathing_lamp.style.transition = "none";
    },
    // 移动中方法
    handleTouchMove(e) {
      const clientX = e.targetTouches[0].clientX; //手指相对视口的x
      const clientY = e.targetTouches[0].clientY; //手指相对视口的y
      const isInScreen =
        clientX <= this.clientW &&
        clientX >= 0 &&
        clientY <= this.clientH &&
        clientY >= 0;
      if (this.startToMove && e.targetTouches.length === 1) {
        if (isInScreen) {
          this.left = clientX - this.itemWidth / 2;
          this.top = clientY - this.itemHeight / 2;
        }
      }
    },
    // 移动结束方法
    // handleTouchEnd() {
    //   if (this.left < this.clientW / 2) {
    //     this.left = 30; //不让贴边 所以设置30没设置0
    //     this.handleIconY();
    //   } else {
    //     this.left = this.clientW - this.itemWidth - 30; //不让贴边 所以减30
    //     this.handleIconY();
    //   }
    //   this.$refs.breathing_lamp.style.transition = "all .3s";
    //   this.testyidogn();
    //   this.buttonListEnd();
    // },
    handleTouchEnd() {
      if (this.left < this.clientW / 2) {
        this.left = 25; //不让贴边 所以设置30没设置0
        this.handleIconY();
      } else {
        this.left = this.clientW - this.itemWidth - 25; //不让贴边 所以减30
        this.handleIconY();
      }
      this.$refs.breathing_lamp.style.transition = "all .3s";
      this.testyidogn();
      this.buttonListEnd();
    },
    // 上下不贴边方法
    handleIconY() {
      if (this.top < 0) {
        this.top = 30; //不上帖上边所以设置为30 没设置0
      } else if (this.top + this.itemHeight > this.clientH) {
        this.top = this.clientH - this.itemHeight - 30; //不让帖下边所以减30
      }
    },

    // 确定在悬浮球左右显示title
    testyidogn() {
      if (this.left < 50) {
        this.titleTestLeft = false;
        this.titleTestRight = true;
      } else {
        this.titleTestLeft = true;
        this.titleTestRight = false;
      }
    }
  }
};
</script>