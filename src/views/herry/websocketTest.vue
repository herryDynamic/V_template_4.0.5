<!--
*@描述:websocket 本地
*@版本:V1.0
*@作者:白爱民
*@Date:2020年1月22日11:00:06
*@最后修改人:herry
*@LastEditTime:2020年1月22日11:00:12
*@说明：本地测试和nodejs打通双websocket-->

<template>
  <div>
    <input type="text" id="input" />
    <div id="inner"></div>

    <!-- <div id="container">

    </div> -->
    <div v-if="websocketson1IsShow">
      <keep-alive>
        <container :txtDataP="txtDataSon1"></container>
      </keep-alive>
    </div>

    <div v-if="websocketson2IsShow">
      <keep-alive>
        <container :txtDataP="txtDataSon2"></container>
      </keep-alive>
    </div>
  </div>
</template>   

<style lang="stylus" scoped></style>

<script>
import container from "../../yzl_com/websocket_son1";
export default {
  components: { container },
  data() {
    return {
      ws: "",
      websocketson1IsShow: false,
      websocketson2IsShow: false,
      txtDataSon1: "",
      txtDataSon2: "",
    };
  },

  mounted() {
    this.start();

    this.main();
  },
  methods: {
    start() {
      // 判断是开启websocket
      if (window.WebSocket) {
        this.ws = new WebSocket("ws://127.0.0.1:3000");

        this.ws.onopen = function () {
          // 开启
          console.log("websocket starting ");
          document.getElementById("inner").innerHTML = "starting";
        };

        this.ws.onclose = function () {
          // 关闭
          console.log("webscoket close");
        };

        this.ws.onmessage = function (e) {
          // 服务器返回
          document.getElementById("inner").innerHTML = e.data;
        };
      }
    },

    indexOf(content, any) {
      const a = content.indexOf(any) != -1;
      console.log(a);
      if (a == true) {
        this.txtData = any;
        this.websocketson1IsShow = true;
      }
    },

    indexOf2(content, any) {
      const a = content.indexOf(any) != -1;
      console.log(a);
      if (a == true) {
        this.txtData = any;
        this.websocketson2IsShow = true;
      }
    },

    // 发送请求，websocket
    axios(content) {
      // var txt = document.getElementById("input").value;
      this.ws.send(content);

      this.indexOf(content, "123");
      this.indexOf2(content, "456");

      if (content == "") {
        this.websocketson2IsShow = false;
        // this.removeChild();
      }
    },

    // 防抖
    debounce(fun, delay) {
      return function (args) {
        const _this = this;
        const _arg = args;
        clearTimeout(fun.id);
        fun.id = setTimeout(function () {
          fun.call(_this, _arg);
        }, delay);
      };
    },

    main() {
      const input = document.getElementById("input");
      const debounceAxios = this.debounce(this.axios, 500);
      input.addEventListener("input", function (e) {
        debounceAxios(e.target.value);
      });
    },
  },
};
</script>