<!--
*@描述:侧边栏
*@版本:V1.0
*@作者:白爱民
*@Date:2019年12月11日20:16:26
*@最后修改人:白爱民
*@LastEditTime:2019年12月11日20:16:31
*@说明： 需要接受makeform页面传递过来的组件顺序和个数数组
-->
<template>
  <div>
    <div class="leftBody" @click="infosh()">
      <div class="titleName">组件库</div>
      <div
        class="librarys"
        @touchstart.prevent="touchin(i)"
        @touchend.prevent="cleartime()"
        v-for="(items,i) in infoNum"
        :key="i"
      >
        <img class="infoShow" width="200" :src="infoNum[i].componentPicture" alt />
      </div>
    </div>
  </div>
</template>
<style scoped>
.leftBody {
  width: 250px;
  height: 600px;
  border: 1px solid white;
  margin: 30px 10px 10px 10px;
  position: relative;
  z-index: 2;
}

.titleName {
  /* float: left; */
  font-size: 25px;
  width: 100%;
  text-align: left;
}

.infoShow {
  border: 1px solid #fecd2a;
  margin: 30px auto 10px;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    ...mapState(["libraryIdIndex"])
  },
  props: {
    sidebarModel: { type: Array, default: () => [] }
  },
  data() {
    return {
      infoNum: [], // 当前页面存储数据
      Loop: "" // 定时器
    };
  },
  watch: {
    sidebarModel(newVal) {
      console.log(newVal);
    }
  },
  created() {},
  mounted() {
    this.start();
    this.infoNum = [];
    this.infoNum = this.sidebarModel;
  },
  methods: {
    start() {
      this.infoNum = [];
      this.infoNum = this.sidebarModel;
    },

    // 清除浏览器长按图片弹框
    touchin(i) {
      clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
      this.Loop = setTimeout(
        function() {
          // alert("是否确认删除"); // 长按后需要执行的内容
          this.returnMakeFor(i);
        }.bind(this),
        500
      );
    },
    cleartime() {
      // 这个方法主要是用来将每次手指移出之后将计时器清零
      clearInterval(this.Loop);
    },

    //长按后返回父页面，携带当前id并关闭
    returnMakeFor(i) {
      this.$emit("listenToMakeForm", this.infoNum[i].libraryId);
    },

    infosh() {
      // console.log(this.bg);
    }
  }
};
</script>
