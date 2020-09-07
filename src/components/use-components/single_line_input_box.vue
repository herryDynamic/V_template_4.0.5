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
singleFieldListDataP{singleFieldLabel:"单行输入框",singleFieldPlaceHolder:"请输入",required:false}
-->
<template>
  <div id="singleLineInputBox">
    <van-field
      :maxlength="singleFieldListData.maxlength"
      :required="singleFieldListData.required"
      id="singleLineInputBox"
      ref="field"
      @blur="singleFiledBlur()"
      v-model="singleFieldListData.singleFieldValue"
      :label="singleFieldListData.singleFieldLabel"
      :placeholder="singleFieldListData.singleFieldPlaceHolder"
      :input-align="singleFieldListData.singleFieldInputAlign"
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
    singleFieldListDataP: {
      type: Object,
      default() {
        return {
          singleFieldLabel: "单行输入框",
          singleFieldPlaceHolder: "请输入",
          required: false
        };
      }
    }
  },

  watch: {
    // 监听props值
    singleFieldListDataP(newVal) {
      this.singleFieldListData.singleFieldLabel = newVal.singleFieldLabel;
      this.singleFieldListData.singleFieldPlaceHolder =
        newVal.singleFieldPlaceHolder;
      this.singleFieldListData.required = newVal.required;
    }
  },
  data() {
    return {
      singleFieldListData: {
        singleFieldValue: "",
        singleFieldLabel: "",
        singleFieldPlaceHolder: "",
        singleFieldInputAlign: "center",
        required: false,
        maxlength: 50
      }
    };
  },
  mounted() {
    // 初始化定位光标,需要在template中放入ref="field"
    this.$refs.field.focus();
    this.start(); // 初始化props值
  },
  methods: {
    start() {
      this.singleFieldListData.singleFieldLabel = this.singleFieldListDataP.singleFieldLabel;
      this.singleFieldListData.singleFieldPlaceHolder = this.singleFieldListDataP.singleFieldPlaceHolder;
      this.singleFieldListData.required = this.singleFieldListDataP.required;
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    // 光标离开则执行，页面离开也执行
    singleFiledBlur() {
      //如果为空则不传
      if (
        this.singleFieldListData.singleFieldValue == "" ||
        this.singleFieldListData.singleFieldValue == undefined
      ) {
        return;
      } else {
        this.$emit(
          "listenSingleBlurValue",
          this.singleFieldListData.singleFieldValue
        );
      }
    }
  }
};
</script>
