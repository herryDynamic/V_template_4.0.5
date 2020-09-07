<!--
*@描述:悬浮球下拉按钮
*@版本:V1.0
*@作者:白爱民
*@Date:2020年3月28日08:22:14
*@最后修改人:白爱民
*@LastEditTime:2020年3月28日08:22:14
*@说明：-->
<template>
  <div>
    <el-collapse-transition>
      <div class="transitionBoxs">
        <div class="transition-box">返回</div>
        <div class="transition-box">编辑</div>
        <div class="transition-box">下一步</div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<style  scoped>
.transitionBoxs {
  min-height: 100px;
  position: fixed;
  z-index: 1024;
  top: 57%;
  right: 5%;
  border: 1px;
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
}
</style>

<script>
export default {
  data() {
    return {};
  },

  created() {},
  methods: {}
};
</script>