<!--
 * @描述:下拉刷新模板
 * @版本: 
 * @作者: 白爱民
 * @Date: 2020年5月21日15:29:24
 * @最后修改人:白爱民
 * @LastEditTime: 2020年5月21日15:29:27
 * @说明：
 -->
<template>
  <div>
    <div v-show="show" id="addTemplate" class="allTemplate" v-touch:right="eventFun"></div>
  </div>
</template>
<script>
import Vue from "vue";
import touch from "vue-directive-touch";
Vue.use(touch);
export default {
  data() {
    return {
      show: false
    };
  },

  mounted() {
    this.initialization();
    this.vConsoleNone();
  },

  updated() {
    this.start();
  },

  methods: {
    initialization() {
      this.show = true;
    },

    // 不使用vConsole
    vConsoleNone() {
      var vConsole = this.$vConsole;
      document.getElementById("__vconsole").style = "display:none";
      // 将none换为block即可使用
    },

    start() {
      // 解决开始计入页面不能左滑，刷新页面解决
      const a = sessionStorage.getItem("loadingFirstEntry");

      if (a != "first") {
        sessionStorage.setItem("loadingFirstEntry", "first");
        window.location.reload(); // 刷新页面
        // window.location.reload() // 刷新页面
        // window.history.go(0); // 出现空白页
        // document.execCommand("Refresh"); // MSDN说适用于IE
      } else {
        this.$router.push({ name: "login" });
      }
    },
    eventFun() {}
  }
};
</script>
<style scoped>
</style>