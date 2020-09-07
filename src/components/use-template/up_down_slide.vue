<!--
*@描述:组件编辑
*@版本:V2.0
*@作者:孙彤
*@Date：2020年6月7日23:59:28
*@最后修改人:孙彤
*@LastEditTime:
*@说明：-->
<template>
  <div class="splide">
    <div class="top" v-show="upDownIsShow">
      <span class="cancel" @click="cancel()">取消</span>
      <span class="selected">
        已选
        <span id="select_per">{{isTrueNum}}</span>人
      </span>
      <span class="select_all" @click="changeState()">{{isSelectAll}}</span>
    </div>

    <div
      class="bottom"
      :class="{orginalBackground:isorginalBackground,changeBackground:ischangeBackground}"
      v-show="upDownIsShow"
      @click="delUser()"
    >
      <van-icon name="delete" class="del" />
    </div>
  </div>
</template>

<style scoped>
.splide {
  position: relative;
}
.top {
  display: flex;
  justify-content: space-between;
  /* 侧轴上子元素的排列方式-单行 */
  align-items: center;
  position: fixed;
  /* 为了避免flex+positon产生的问题，添加width:100% */
  width: 100%;
  height: 40px;
  background-color: white;
  z-index: 999;
  top: 0;
  transition: all 2s ease-out;
}
.cancel,
.selected,
.select_all {
  font-size: 14px;
}
#select_per,
.select_all {
  color: #1fcda8 !important ;
}
.selected {
  flex: 6;
}
.cancel {
  flex: 2;
}
.select_all {
  flex: 2;
}
.bottom {
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  height: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: all 1s ease-out;
}
.del {
  line-height: 40px;
  text-align: center;
  color: white;
}
.orginalBackground {
  background-color: #1fcda8;
}
.changeBackground {
  background-color: gray;
}
</style>

<script>
import { responseCode } from "../../utils/responseCode"; //引入定义的状态码
// import Vue from "vue";
// import { Dialog } from "vant";

export default {
  components: {
    // [Dialog.Component.name]: Dialog.Component
  },
  props: ["upDownIsShow", "isTrueNum", "isChangeState", "isChangeStyle"],

  computed: {},

  data() {
    return {
      isShow: false, //默认不显示
      isSelectAll: "全选",
      isClicked: false, //默认未点击切换全选/非全选
      isorginalBackground: true, //默认背景色为原始背景色
      ischangeBackground: false, //背景色更改状态为false
      isDelUser: false //默认不删除
    };
  },
  mounted() {},
  watch: {
    isChangeState(newVal) {
      console.log(newVal);
      newVal == false
        ? (this.isSelectAll = "全选")
        : (this.isSelectAll = "全不选");
    },
    isChangeStyle(newVal) {
      this.ischangeBackground = newVal;
      newVal = !newVal;
      this.isorginalBackground = newVal; //待删除人数非0时改变div样式
    }
  },
  methods: {
    changeState() {
      this.isClicked = !this.isClicked; //flase时显示全选，true显示全不选
      if (this.isClicked == true) {
        this.isSelectAll = "全不选";
        this.$emit("isCheckedAll", true); //传递全选状态给父组件
      } else {
        this.isSelectAll = "全选";
        this.$emit("isCheckedAll", false);
      }
    },

    //取消删除
    cancel() {
      console.log("点击了取消");
      this.$emit("isCancel", true); //点击了取消按钮
    },

    //点击删除
    delUser() {
      // this.$dialog.confirm({
      //   message: "确认删除"
      // })
      //   .then(() => {
      //     // on confirm
      //   })
      //   .catch(() => {
      //     // on cancel
      //   });
      this.$emit("isDelUser", true);
      
    }
  }
};
</script>