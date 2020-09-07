<!--
*@描述:单选框
*@版本:V1.0
*@作者:白爱民
*@Date:2020年3月28日08:22:14
*@最后修改人:白爱民
*@LastEditTime:2020年3月28日08:22:14
*@说明：单选框是从1开始的：radio=1
使用说明：-->
<template>
  <div id="singleLineInputBox">
    <!-- 下拉框组 -->
    <van-collapse v-model="activeNames">
      <!-- 一个下拉框 -->
      <van-collapse-item :title="singleBoxDataP.titleName" name="1">
        <!-- 单选框组 -->
        <van-radio-group v-model="radio" v-for="(item,i) in singleBoxData" :key="i">
          <!-- N个单选框 -->
          <van-cell-group>
            <van-cell :title="singleBoxData[i].title" clickable @click="click(i)">
              <!-- 单选在右侧 -->
              <template #right-icon>
                <van-radio :name="singleBoxData[i].name" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<style scoped>
</style>
<script>
import { mapState } from "vuex";
import Vue from "vue";
import { Collapse, CollapseItem, RadioGroup, Radio } from "vant";
Vue.use(Radio, RadioGroup, Collapse, CollapseItem);
export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    ...mapState([""])
  },

  components: {},
  props: {
    singleBoxDataP: {
      type: Object,
      default() {
        return {
          titleName: "标题1",
          titleList: [
            { id: "id1", title: "单选框1" },
            { id: "id2", title: "单选框2" },
            { id: "id3", title: "单选框3" },
            { id: "id4", title: "单选框4" }
          ]
        };
      }
    }
  },
  data() {
    return {
      singleBoxData: [],
      radio: "", // 当前选中状态
      activeNames: ["1"]
    };
  },
  watch: {
    singleBoxDataP(newVal) {
      for (let i = 0; i < newVal.titleList.length; i++) {
        this.singleBoxData.push({
          id: newVal.titleList[i].id,
          title: newVal.titleList[i].title,
          name: String(i + 1)
        });
      }
    }
  },

  mounted() {
    this.singleBoxData = [];
    for (let i = 0; i < this.singleBoxDataP.titleList.length; i++) {
      this.singleBoxData.push({
        id: this.singleBoxDataP.titleList[i].id,
        title: this.singleBoxDataP.titleList[i].title,
        name: String(i + 1)
      });
    }
  },
  methods: {
    click(i) {
      // console.log(i);
      this.radio = String(i + 1);
      this.$emit("listenSingleClickValue", this.singleBoxData[i].id);
    }
  }
};
</script>
