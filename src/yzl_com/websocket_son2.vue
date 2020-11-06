<template>
  <div>
    <br />
    <br />
    <br />
    <input type="text" id="input2" :value="txtData" />
    <div id="inner2"></div>
  </div>
</template>

<style lang="stylus" scoped></style>

<script>
export default {
  props: {
    txtDataP: { default: "000" },
  },
  data() {
    return {
      ws: "",
      txtData: "",
    };
  },

  created() {
    this.start();
  },

  mounted() {
    this.main();
  },

  watch: {
    txtDataP(newVal) {
      this.txtData = newVal;
    },

    txtData(newVal) {
      console.log(newVal);
    },
  },

  destroyed() {},
  methods: {
    start() {
      this.txtData = this.txtDataP;

      // 判断是开启websocket
      if (window.WebSocket) {
        this.ws = new WebSocket("ws://127.0.0.1:8001");

        this.ws.onopen = function () {
          // 开启
          console.log("websocket starting ");
          document.getElementById("inner2").innerHTML = "starting";
        };

        this.ws.onclose = function () {
          // 关闭
          console.log("webscoket close");
        };

        this.ws.onmessage = function (e) {
          // 服务器返回
          document.getElementById("inner2").innerHTML = e.data;
        };
      }
    },

    main() {
      const input2 = document.getElementById("input2");
      const debounceAxios = this.debounce(this.axios, 500);
      input2.addEventListener("input", function (e) {
        debounceAxios(e.target.value);
      });
    },

    // 检测是否存在
    indexOf(content, any) {
      const a = content.indexOf(any) != -1;
      console.log(a);
    },

    // 发送请求，websocket
    axios(content) {
      // var txt = document.getElementById("input2").value;
      this.ws.send(content);
      this.indexOf(content, "456");
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
  },
};
</script>