<!--
*@描述: 多选框
*@版本:V1.0
*@作者:白爱民
*@Date:2020年3月28日08:22:14
*@最后修改人:白爱民
*@LastEditTime:2020年3月28日08:22:14
*@说明：多选框为数组，从0开始-->
<template>
  <div id="singleLineInputBox">
    <!-- 下拉框组 -->
    <van-collapse v-model="activeNames">
      <!-- 一个下拉框 -->
      <van-collapse-item :title="checkBoxData.checkBoxListName" name="1">
        <!-- 多选框组 -->
        <van-checkbox-group v-model="result" ref="checkboxGroup">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in list.checkBoxList"
              clickable
              :key="index"
              :title="`${item.name}`"
              @click="toggle(index)"
            >
              <template #right-icon>
                <!-- name:存储到已选择的名字 -->
                <van-checkbox :name="item.id" ref="checkboxes" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<style scoped>
</style>
<script>
// :title="`复选框 ${item}`"
import { mapState } from "vuex";
import Vue from "vue";
import { Collapse, CollapseItem, Checkbox, CheckboxGroup } from "vant";
Vue.use(Checkbox, CheckboxGroup, Collapse, CollapseItem);

export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    ...mapState([""])
  },

  props: {
    checkBoxData: {
      type: Object,
      default() {
        return {
          checkBoxListName: "标题1",
          checkBoxList: [
            { id: "1", name: "复选框a" },
            { id: "2", name: "复选框b" },
            { id: "3", name: "复选框c" },
            { id: "4", name: "复选框d" }
          ]
        };
      }
    }
  },
  watch: {
    checkBoxData(newVal) {
      this.list = newVal;
    }
  },

  updated() {
    // console.log(this.result);
    this.$emit("listenCheckBoxUpdated", this.result);
  },
  components: {},
  data() {
    return {
      activeNames: ["1"],
      list: [],
      result: []
    };
  },
  mounted() {
    this.list = this.checkBoxData;
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>
