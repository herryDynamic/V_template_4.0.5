<!--
*@描述:业务编辑组件
*@版本:V2.0
*@作者:刘晓伟
*@Date:2020年6月8日15:19:09
*@最后修改人:刘晓伟
*@LastEditTime:2020年7月2日15:54:50
*@说明：-->
<template>
  <div>
    <userInfo
      v-show="comEditData.componentId==componentDataId.userInfoId"
      :comEditData="comEditData"
      @ToTemplateShow="ToTemplateShow"
    ></userInfo>
    <arrayInput
      v-show="comEditData.componentId==componentDataId.arrayInputId"
      :comEditData="comEditData"
      @ToTemplateShow="ToTemplateShow"
    ></arrayInput>
    <infoShow
      v-show="comEditData.componentId==componentDataId.infoDisplayId"
      :comEditData="comEditData"
      @ToTemplateShow="ToTemplateShow"
    ></infoShow>
  </div>
</template>
<style scoped>
</style>
<script>
import Vue from "vue";
import { mapState } from "vuex"; // 全局调取：可使用this.
import userInfo from "../../../../../components/business-com/business-component-editing/business_user_info";
import infoShow from "../../../../../components/business-com/business-component-editing/business_info_show";
import arrayInput from "../../../../../components/business-com/business-component-editing/business_array_input";

export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    ...mapState(["componentDataId"])
  },
  props: {
    comEditData: {}
  },
  watch: {},
  components: { userInfo, infoShow, arrayInput },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 显示主页
    ToTemplateShow(comEditData, index) {
      this.$emit("singleClick", comEditData, index);
    }
  }
};
</script>
