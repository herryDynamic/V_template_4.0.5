<!--
*@描述:
*@版本:V1.0
*@作者:白爱民
*@Date:2020年3月28日08:22:14
*@最后修改人:白爱民
*@LastEditTime:2020年3月28日08:22:14
*@说明：
使用方法：
1. 需要传值：
multiFieldListDataP{multiFieldLabel:"多行输入框",multiFieldPlaceHolder:"请输入",required:false}
-->
<template>
  <div id="singleLineInputBox">
    <van-field
      :required="multiFieldListData.required"
      @blur="multiFieldBlur()"
      v-model="multiFieldListData.multiFieldValue"
      :rows="multiFieldListData.multiFieldRows"
      autosize
      :label="multiFieldListData.multiFieldLabel"
      :type="multiFieldListData.multiFieldType"
      :input-align="multiFieldListData.multiFieldInputAlign"
      :placeholder="multiFieldListData.multiFieldPlaceHolder"
    />
  </div>
</template>
<style scoped>
</style>
<script>
import { mapState } from "vuex";
import Vue from "vue";
import { Collapse, CollapseItem } from "vant";

Vue.use(Collapse);
Vue.use(CollapseItem);
export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    ...mapState([""])
  },

  components: {},

  props: {
    multiFieldListDataP: {
      type: Object,
      default() {
        return {
          multiFieldLabel: "多行输入框",
          multiFieldPlaceHolder: "请输入",
          required: false
        };
      }
    }
  },

  watch: {
    multiFieldListDataP(newVal) {
      this.multiFieldListData.multiFieldLabel = newVal.multiFieldLabel;
      this.multiFieldListData.multiFieldPlaceHolder =
        newVal.multiFieldPlaceHolder;
      this.multiFieldListData.required = newVal.required;
    }
  },
  data() {
    return {
      multiFieldListData: {
        multiFieldValue: "", // 复选框数据
        multiFieldLabel: "",
        multiFieldType: "textarea",
        multiFieldInputAlign: "center",
        multiFieldPlaceHolder: "",
        multiFieldRows: "1",
        required: false
      }
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    start() {
      this.multiFieldListData.multiFieldLabel = this.multiFieldListDataP.multiFieldLabel;
      this.multiFieldListData.multiFieldPlaceHolder = this.multiFieldListDataP.multiFieldPlaceHolder;
      this.multiFieldListData.required = this.multiFieldListDataP.required;
    },
    multiFieldBlur() {
      if (
        this.multiFieldListData.multiFieldValue == "" ||
        this.multiFieldListData.multiFieldValue == undefined
      ) {
        return;
      } else {
        // console.log(this.multiFieldValue);
        this.$emit(
          "listenMultiBlurValue",
          this.multiFieldListData.multiFieldValue
        );
      }
    }
  }
};
</script>
