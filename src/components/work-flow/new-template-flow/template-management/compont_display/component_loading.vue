<!--
*@描述:组件加载页面
*@版本:V2.0
*@作者:刘晓伟
*@Date:2020年6月8日15:19:09
*@最后修改人:刘晓伟
*@LastEditTime:2020年6月8日15:19:14
*@说明：-->
<template>
  <div id="editing_filed" class="component_data_show">
    <div v-for="(item,index) in templateContent" :key="index">
      <!-- 下拉菜单 -->
      <el-dropdown trigger="click" placement="bottom">
        <div v-touch:long.stop="(e)=>changeCoral(index)">
          <div :id="'componentid'+index">
            <div class="background_style"></div>
            <!-- 基础组件 -->
            <componentBasic
              v-show="templateContent[index].componentType==0"
              :filedTitle="templateContent[index].componentInfo[0].title"
              :filedTip="templateContent[index].componentInfo[0].value"
              :comIsEdit="comIsEdit"
            ></componentBasic>
            <!-- 业务组件 -->
            <div
              :id="'personInfoCom' + index"
              v-show="templateContent[index].componentId==componentDataId.userInfoId"
            >
              <personInfoCom :dataInfoP="templateContent[index].componentInfo"></personInfoCom>
            </div>
            <div
              :id="'arrayInputCom' + index"
              v-show="templateContent[index].componentId==componentDataId.arrayInputId"
            >
              <arrayInputCom :dataInfoP="templateContent[index].componentInfo"></arrayInputCom>
            </div>
            <div
              :id="'scoreInfoCom' + index"
              v-show="templateContent[index].componentId==componentDataId.infoDisplayId"
            >
              <scoreInfoCom :dataInfo="templateContent[index].componentInfo"></scoreInfoCom>
            </div>
          </div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="componentEditing(index)">编辑</el-dropdown-item>
          <el-dropdown-item @click.native="componentDelete(index)">删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div>
      <deleteGroupPopup
        :boolean="deleteTemplatePopup.popupIsShow"
        :popupTitle="deleteTemplatePopup.popupTitle"
        :tipsTitle="deleteTemplatePopup.tipsTitle"
        :secondBtnIsShow="deleteTemplatePopup.secondBtnIsShow"
        @listenDeleteGroupPopIsShow="deleteTemplateIsShow"
        @listenDetermine="deleteTemplateDetermine"
      ></deleteGroupPopup>
    </div>
  </div>
</template>
<style scoped>
.el-dropdown {
  display: inline;
}
.component_data_show {
  height: 100px;
}
.background_style {
  width: 100%;
  height: 15px;
}
</style>
<script>
import Vue from "vue";
import { mapState } from "vuex"; // 全局调取：可使用this.
import componentBasic from "../compont_display/component_filed";
import personInfoCom from "../../../../business-com/personInfo_com";
import scoreInfoCom from "../../../../business-com/scoreInfo_com";
import arrayInputCom from "../../../../business-com/arrayInput_com";
import deleteGroupPopup from "../../../../../components/home-page/template-management/delete_group_popup"; //删除组件提示框

export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    ...mapState(["componentContent", "componentContent", "componentDataId"])
  },
  props: {
    // 用户选中模板数据
    templateContent: {
      type: Array,
      default: () => []
    }
  },

  watch: {},
  components: {
    componentBasic,
    deleteGroupPopup,
    personInfoCom,
    scoreInfoCom,
    arrayInputCom
  },
  data() {
    return {
      componentDataInfo: [],
      // 用于判断是否可以编辑数据
      comIsEdit: true,
      deleteTemplatePopup: {
        popupIsShow: false, //删除分组弹框是否显示
        popupTitle: "", //删除分组弹框title
        tipsTitle: "", //删除弹框
        secondBtnIsShow: false, //是否需要两个按钮
        personIndex: "" //删除分组索引
      },
      componentObject: [], //用于编辑组件存储数据

      // 加号按钮属性
      hoverBtnListP: {
        showName: "add"
      },
      titleName: "组件列表"
    };
  },
  mounted() {},
  methods: {
    // 单机组件编辑
    componentEditing(index) {
      this.templateContent[index].componentIndex = index;
      // this.$store.commit("setComponentContent", this.templateContent[index]);

      // // 父子组件传值
      this.$emit("componentEditing", index); //调用父组件，跳转到组件设置页面
    },
    // 单击删除指定组件
    componentDelete(index) {
      this.deleteTemplatePopup.popupIsShow = true; //弹框是否显示
      this.deleteTemplatePopup.popupTitle = "提示"; //设置弹框提示title
      this.deleteTemplatePopup.tipsTitle = "是否确定删除此组件？"; //设置弹框提示内容
      this.deleteTemplatePopup.personIndex = index; //存储点击人员索引
    },
    // 删除组件
    deleteTemplateIsShow() {
      // this.deleteTemplatePopup.popupIsShow = newVal;
    },
    deleteTemplateDetermine() {
      this.deleteTemplatePopup.popupIsShow = false; //弹框是否显示
      this.$emit(
        "deleteTemplateDetermine",
        this.deleteTemplatePopup.personIndex
      );
      // this.templateContent.splice(this.deleteTemplatePopup.personIndex, 1); //删除组件
    }
  }
};
</script>
