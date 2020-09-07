<!--
*@描述:
*@版本:V1.0
*@作者:白爱民
*@Date:2020年3月28日08:22:14
*@最后修改人:白爱民
*@LastEditTime:2020年3月28日08:22:14
*@说明：使用方法：
1. 需要传值：
numberFieldListDataP{numberFieldLabel:"数字输入框",numberFieldPlaceholder:"请输入",required:false}
-->
<template>
  <div id="singleLineInputBox">
    <!-- 允许输入数字，调起带符号的纯数字键盘 -->
    <!-- <div class="test">请输入成绩单位</div> -->
    <van-field
      @blur="numberFieldBlur()"
      :required="numberFieldListData.required"
      v-model="numberFieldListData.numberFieldValue"
      :type="numberFieldListData.numberFieldType"
      :label="numberFieldListData.numberFieldLabel"
      :input-align="numberFieldListData.numberFieldInputAlign"
      :placeholder="numberFieldListData.numberFieldPlaceholder"
    />
  </div>
</template>
<style scoped>
.test {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 20px;
  line-height: 24px;
  background-color: #fff;
}
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
    numberFieldListDataP: {
      type: Object,
      default() {
        return {
          required: false,
          numberFieldLabel: "数字输入框",
          numberFieldPlaceholder: "请输入"
        };
      }
    }
  },
  watch: {
    numberFieldListDataP(newVal) {
      this.numberFieldListData.required = newVal.required;
      this.numberFieldListData.numberFieldLabel = newVal.numberFieldLabel;
      this.numberFieldListData.numberFieldPlaceholder =
        newVal.numberFieldPlaceholder;
    }
  },
  data() {
    return {
      numberFieldListData: {
        required: false,
        numberFieldValue: "",
        numberFieldType: "number",
        numberFieldLabel: "",
        numberFieldInputAlign: "center",
        numberFieldPlaceholder: ""
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
      this.numberFieldListData.required = this.numberFieldListDataP.required;
      this.numberFieldListData.numberFieldLabel = this.numberFieldListDataP.numberFieldLabel;
      this.numberFieldListData.numberFieldPlaceholder = this.numberFieldListDataP.numberFieldPlaceholder;
    },
    numberFieldBlur() {
      if (
        this.numberFieldListData.numberFieldValue == "" ||
        this.numberFieldListData.numberFieldValue == undefined
      ) {
        return;
      } else {
        this.$emit(
          "listenNumberBlurValue",
          this.numberFieldListData.numberFieldValue
        );
      }
    }
  }
};
</script>
