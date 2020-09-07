<!--
*@描述:基础组件编辑
*@版本:V2.0
*@作者:刘晓伟
*@Date:2020年6月8日15:19:09
*@最后修改人:刘晓伟
*@LastEditTime:2020年7月2日15:54:57
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
    <div v-for="(item,index) in comEditData.componentInfo">
      <!-- 组件标题 -->
      <div>
        <!-- 标题 -->
        <div class="component_title">
          <div class="title_content">标题</div>
          <div class="title_fxplain">最多13个字</div>
        </div>
        <!-- 内容 -->
        <div class="title_input">
          <van-cell-group>
            <van-field v-model="comEditData.componentInfo[index].title" placeholder="请输入标题" />
          </van-cell-group>
        </div>
      </div>

      <!-- 编辑组件提示内容 -->
      <div>
        <div class="componentContent">
          <div>提示内容</div>
          <span class="content_fxplain">最多9个字</span>
        </div>
        <div class="content_input">
          <van-cell-group>
            <van-field v-model="comEditData.componentInfo[index].value" placeholder="请输入内容" />
          </van-cell-group>
        </div>
      </div>
    </div>
    <!-- 选项组件 -->
    <div
      v-show="comEditData.componentId==componentDataId.singleChoiceId || comEditData.componentId==componentDataId.multiChoiceId"
    >
      <div class="menu_title_line">
        <div class="component_menu">
          <div class="title_menu">选项</div>
          <div class="menu_fxplain">最多10项，每项最多20字</div>
        </div>
        <!-- 加号图标 -->
        <img :src="add" alt class="subGroupadd" @click="addGroup" />
      </div>
      <div class="downgrop_menu">
        <div class="groups" v-for="(item,index) in group">
          <div class="menu_input">
            <van-cell-group>
              <van-field @change="group_change(index)" v-model="group[index]" />
            </van-cell-group>
            <!-- 减号图标 -->
            <img :src="less" alt class="subGroupless" @click="lessGroup(index)" />
          </div>
        </div>
      </div>
    </div>

    <!-- 验证是否必填 -->
    <div v-show="comEditData.isRequired">
      <div class="required">
        <span>验证</span>
      </div>
      <div class="is_required">
        <van-radio-group v-model="choice_radio" direction="horizontal">
          <van-radio name="true">是</van-radio>
          <van-radio name="false">否</van-radio>
        </van-radio-group>
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
/* --------------------- */
/* 组件标题 */
.component_title,
.componentContent,
.required {
  display: flex;
  margin: 8% 0% 0% 3%;
  font-size: 16px;
}
.component_menu {
  display: flex;
  font-size: 16px;
  margin: 0% 0% 0% 3%;
  align-self: flex-end;
}
/* 加号按钮 */
.subGroupadd {
  margin: 8% 0% 5% 0%;
  margin-left: auto;
  width: 10%;
  height: 70%;
}
/* 验证标题样式 */
.title_fxplain,
.content_fxplain,
.menu_fxplain {
  color: rgb(158, 165, 165);
  font-size: 14px;
  align-self: flex-end;
}
/* 标题和内容样式 */
.title_input,
.content_input,
.is_required {
  margin: 5% 0% 0% 0%;
}
.is_required {
  margin-left: 5%;
}

.menu_title_line {
  display: flex;
  height: 45px;
}
/* 下拉分组样式 */
.downgrop_menu {
  /* height: 200px; */
  /* overflow: scroll; */
  margin: 5% 0% 0% 0%;
}

/* ---------------------------- */
/* 选项输入样式 */
.menu_input {
  width: 100%;
  position: relative;
  /* display: flex; */
  /* height: 40px; */
}

/* 选项内容设置 */
.van-cell-group {
  width: 100%;
}

/* 减号按钮 */
.subGroupless {
  position: absolute;
  left: 90%;
  top: 0%;
  width: 10%;
  height: 100%;
}
.page_title_right {
  color: #1fcda8;
  margin: 10px 10px 0px auto;
}
.page_title_left {
  /* color: #1fcda8; */
  margin-top: 10px;
}
</style>
<script>
import Vue from "vue";
import { Dialog } from "vant"; // 引用dialog弹出框
import { mapState } from "vuex"; // 全局调取：可使用this.
import vuedraggable from "vuedraggable"; //用于实现拖拽功能
import { RadioGroup, Radio } from "vant"; //单选框
Vue.use(Radio);
Vue.use(RadioGroup);
export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    ...mapState(["messageInfo", "componentDataId"])
  },
  props: {
    group: {
      type: Array,
      default: () => ["选项1", "选项2", "选项3"]
    },
    comEditData: {}
  },
  watch: {},
  components: {},
  data() {
    return {
      less: require("../../../../../assets/super/template/delete.png"), //减号图片
      add: require("../../../../../assets/super/template/add.png"), //加号图片
      newGroupIndex: 1,
      choice_radio: "true" //验证选择
    };
  },
  mounted() {},
  methods: {
    // 保存编辑数据
    singleClick() {
      // 跳转主页
      this.comEditData.isRequired = this.choice_radio; //获取组件信息是否为必填
      this.$emit("singleClick", this.comEditData);
    },
    btnRequired() {
      this.checked = false;
    },
    // 保存修改的选项到数组中
    group_change(index) {},
    // 删除指定索引数组内容
    lessGroup(index) {
      // this.group.$remove(index);
      if (this.group.length <= 1) {
        // 提示最少有一个选项
        this.$message({
          message: this.messageInfo.message.choiceLessNumber, // 提示内容
          center: this.messageInfo.center.centerTrue, //居中显示
          type: this.messageInfo.type.error, //提示类型
          showClose: this.messageInfo.showClose.showCloseTrue, //是否显示关闭按钮，true为显示关闭按钮
          duration: this.messageInfo.duration.duration, //提示时长
          offset: this.messageInfo.offset.offset //提示框距离顶部距离
        });
      } else {
        this.group.splice(index, 1);
      }
    },
    // 添加一行内容
    addGroup() {
      // 判断当前选项是否超过10个，是则提示不能继续添加
      if (this.group.length < 10) {
        var index = 1;

        var groupIndex = "新建选项";

        for (var index = 0; index <= this.group.length; index++) {
          if (groupIndex == this.group[index]) {
            groupIndex = "新建选项" + index;
          }
        }
        this.group.push(groupIndex);
        this.newGroupIndex++;
      } else {
        //提示选项不能超过10个
        this.$message({
          message: this.messageInfo.message.choiceNumber, // 提示内容
          center: this.messageInfo.center.centerTrue, //居中显示
          type: this.messageInfo.type.error, //提示类型
          showClose: this.messageInfo.showClose.showCloseTrue, //是否显示关闭按钮，true为显示关闭按钮
          duration: this.messageInfo.duration.duration, //提示时长
          offset: this.messageInfo.offset.offset //提示框距离顶部距离
        });
      }
    }
  }
};
</script>
