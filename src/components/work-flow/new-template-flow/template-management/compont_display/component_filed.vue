<!--
 * @描述:基础组件显示
 * @name:component_filed
 * @版本: 
 * @作者: 刘晓伟
 * @最后修改人:刘晓伟
 * @LastEditTime: 2020年6月24日11:01:49
 -->
<template>
  <div>
    <!-- 具体module -->
    <div v-show="isBasicComponent" class="background_style"></div>
    <!-- 组件显示 -->
    <div v-show="isBasicComponent" class="component_show">
      <div class="component_field">
        <div class="component_field">
          <!-- 组件左边内容{{item.textTitle}} -->
          <div class="component_title" v-text="filedTitle"></div>
          <!-- 组件右边内容{{item.textTip}} -->
          <div class="component_value" v-text="filedTip"></div>
          <!-- 是否显示组件选择图标 -->
          <div></div>
        </div>
      </div>
    </div>
    <!-- 可编辑 -->
    <div v-show="isBusinessComponent" class="component_show">
      <div class="component_show">
        <div class="component_field">
          <div class="component_field">
            <!-- 组件左边内容{{item.textTitle}} -->
            <!-- <div class="component_title" v-text="filedTitle"></div> -->
            <input class="business_component_title" type="text" v-model="filedTitle" />
            <input class="business_component_value" type="text" v-model="filedTip" />

            <!-- 组件右边内容{{item.textTip}} -->
            <!-- <div class="component_value" v-text="filedTip"></div> -->
            <!-- 是否显示组件选择图标 -->
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.background_style {
  width: 100%;
  height: 15px;
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
</style>
<script>
//加载整个页面，下拉刷新，点击刷新
export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    // ...mapState([""])
  },
  components: {},
  props: {
    filedTitle: "", // 组件左边显示内容

    filedTip: "", // 组件右边显示内容

    comIsEdit: false,
  },

  watch: {
    comIsEdit(newVal) {
      if (newVal == false) {
        this.isBasicComponent = false;
        this.isBusinessComponent = true;
      } else {
        this.isBasicComponent = true;
        this.isBusinessComponent = false;
      }
    }
  },
  data() {
    return {
      isBasicComponent: true,
      isBusinessComponent: false
    };
  },

  watch: {},
  methods: {
    start() {
      if (this.comIsEdit == false) {
        this.isBasicComponent = false;
        this.isBusinessComponent = true;
      } else {
        this.isBasicComponent = true;
        this.isBusinessComponent = false;
      }
    }
  }
};
</script>

