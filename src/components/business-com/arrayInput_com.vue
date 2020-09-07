<!--
*@描述:test
*@版本:V1.0
*@作者:白爱民
*@Date:2020年6月23日11:37:49
*@最后修改人:付媛媛
*@LastEditTime:2020年6月23日11:38:00
*@说明：-->
<template>
  <div>
    <div v-for="(item ,i ) in dataInfoP" :key="i">
      <componentField
        :filedTitle="dataInfoP[i].title"
        :filedTip="dataInfoP[i].value"
        :comIsEdit="comIsEdit"
      ></componentField>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import componentField from "../../components/work-flow/new-template-flow/template-management/compont_display/component_filed";
export default {
  components: { componentField },
  props: {
    dataInfoP: {
      type: Array,
      default: () => [
        {
          title: "111", //标题
          value: "222" //提示内容
        }
      ]
    }
  },
  data() {
    return {
      // 用于判断是否是基础组件，用于标识基础组件和业务组件，
      comIsEdit: true
    };
  },
  mounted() {},
  methods: {}
};
</script>
