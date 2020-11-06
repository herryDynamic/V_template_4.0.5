<template>
  <div>
    <input type="text" id="input" />
    <div id="inner"></div>

    <div id="container">
      <!--动态添加div 
		    <div class='child'> XXX</div>
		 -->
    </div>
  </div>
</template>

<style lang="stylus" scoped></style>

<script>
export default {
  data() {
    return {
      ws: "",
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
        // 显示第二个websocket
        const container = document.getElementById("container");
        container.appendChild(this.createDocumentFragment(any));

        var ws2 = new WebSocket("ws://127.0.0.1:8001");

        ws2.onopen = function () {
          // 开启
          console.log("websocket starting ");
          document.getElementById("inner2").innerHTML = "starting";
        };

        ws2.onclose = function () {
          // 关闭
          console.log("webscoket close");
        };

        ws2.onmessage = function (e) {
          // 服务器返回
          document.getElementById("inner2").innerHTML = e.data;
        };
      } else {
      }
    },

    // 删除节点
    removeChild() {
      const container = document.getElementById("container");
      const input2 = document.getElementById("input2");
      container.removeChild(input2);
    },

    // 添加节点
    createDocumentFragment(txt) {
      // <input type="text" id="input2" />
      // const template = `<br/> <br/> <div class='child'>${txt}</div>`;
      const template = ` <br/> <br/> <input type="text" value="${txt}" id="input2" /> <div id="inner2">

		</div>`;
      let frag = document.createRange().createContextualFragment(template);
      return frag;
    },

    // 发送请求，websocket
    axios(content) {
      // var txt = document.getElementById("input").value;
      this.ws.send(content);

      this.indexOf(content, "123");

      if (content == "") {
        this.removeChild();
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