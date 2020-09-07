<!--
*@描述:选项编辑组件
*@版本:V2.0
*@作者:刘晓伟
*@Date:2020年6月8日15:19:09
*@最后修改人:刘晓伟
*@LastEditTime:2020年6月8日15:19:14
*@说明：-->
<template>
  <div id="editing_filed">
    <div>
      <!-- 页面标题 -->
      <div class="title_area">
        <div class="page_title">
          <div class="page_title_left">{{comEditData.pageTitle}}</div>
          <div class="page_title_right" @click="singleClick">确定</div>
        </div>

        <div class="title_line"></div>
      </div>
    </div>
    <div class="business_component">
      <!-- 内容 -->
      <div>
        <div v-for="(item,index) in comData" :key="index">
          <div v-show="index!=0" class="component_show">
            <div class="component_show">
              <div class="component_field">
                <div class="component_field">
                  <input
                    class="business_component_title"
                    type="text"
                    v-model="comData[index].title"
                  />
                  <input
                    class="business_component_value"
                    type="text"
                    v-model="comData[index].value"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="business_line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#editing_filed {
  display: column;
  font-size: 14px;
}
/* 提示内容 */
.title_area {
  display: column;
  margin: 5% 0% 0% 0%;
}
.page_title {
  display: flex;
  margin: 3% 0% 0% 3%;
  padding-bottom: 3%;
  font-size: 16px;
}
/* 给标题下方的线加样式 */
.title_line {
  border-top: 1px solid rgb(58, 57, 59);
}

.component_show {
  display: flex;
  border: 1px;
  width: 100%;
  height: 40px;
  border-color: blueviolet;
  background-color: #fff;
}
.component_field {
  display: flex;
  align-items: center;
  width: 100%;
}
.component_title {
  width: 50%;
  color: rgba(25, 31, 37, 0.56);
  flex: none;
  text-align: left;
  padding-right: 10px;
  padding-left: 10px;
  color: #222;
}
.component_value {
  width: 40%;
  align-items: flex-end;
  color: rgba(25, 31, 37, 0.4);
  text-align: left;
}

.business_component_title {
  border: 0;
  outline: none;
  padding-left: 10px;
  width: 45%;
  background-color: rgba(0, 0, 0, 0);
}
.business_component_value {
  border: 0;
  outline: none;
  width: 100%;
  margin-left: 20px;
  background-color: rgba(0, 0, 0, 0);
}
.page_title_right {
  color: #1fcda8;
  margin: 10px 10px 0px auto;
}
.page_title_left {
  /* color: #1fcda8; */
  margin-top: 10px;
}
.business_component {
  margin-top: 0%;
  width: 100%;
}

.business_line {
  border-top: 1px solid rgba(0, 0, 0, 0);
  width: 80%;
  background-color: rgba(0, 0, 0, 0);
}
.el-icon-user {
  height: 100px;
}
</style>
<script>
import Vue from "vue";
import { Dialog } from "vant"; // 引用dialog弹出框
import { mapState } from "vuex"; // 全局调取：可使用this.
import componentFiled from "../../../components/work-flow/new-template-flow/template-management/compont_display/component_filed";

export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    ...mapState(["messageInfo", "templateContent"])
  },
  props: {
    comEditData: {}
  },
  watch: {
    comEditData(newVal) {
      // 清空数组
      this.comData = [];
      for (let index = 0; index < newVal.componentInfo.length; index++) {
        this.comData.push({
          title: newVal.componentInfo[index].title,
          value: newVal.componentInfo[index].value
        });
      }
    }
  },
  components: { componentFiled },
  data() {
    return {
      comData: []
    };
  },
  mounted() {},
  methods: {
    // 保存编辑数据
    singleClick() {
      // 跳转主页
      this.$emit(
        "ToTemplateShow",
        this.comData,
        this.comEditData.componentIndex
      );
    }
  }
};
</script>
