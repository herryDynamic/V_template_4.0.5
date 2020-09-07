<template>
  <div>
    <!-- 悬浮球 -->
    <div class="breathing_lamp" @click="show3 = !show3"></div>

    <!-- 弹出框 -->
    <div class="collapseTransiton">
      <el-collapse-transition>
        <div v-show="show3" class="transitionBoxs">
          <div class="transition-box">返回</div>
          <div class="transition-box">编辑</div>
          <div class="transition-box">下一步</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collapseTransiton {
  height: 200px;
  position: fixed;
  z-index: 1024;
  top: 57%;
  right: -10%;
}
.transitionBoxs {
  // justify-content: center;
  // align-items: flex-end; // 注释后将变为以下图片
  flex-direction: column;
  display: flex;
}
.transition-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  height: 30px;
  border-radius: 4px;
  background-color: #409eff;
  color: #fff;
  padding: 10px 10px;
  box-sizing: border-box;
  margin-right: 20px;
}

// 悬浮球位置
.breathing_lamp {
  border: 1px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 50%;
  right: 0%;
  z-index: 1024;
  background: url("../../../assets/publicAll/cloud.png") no-repeat center center;
  // background-repeat: inherit;
  background-size: 100% 100%; // 背景图片适应外边框大小
  // display: inline-block;
}
</style>

<script>
export default {
  data() {
    return {
      show3: true,
      cloud: require("../../../assets/publicAll/cloud.png")
    };
  }
};
</script>