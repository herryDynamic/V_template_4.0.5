<!--
*@描述:websocket 腾讯
*@版本:V1.0
*@作者:白爱民
*@Date:2020年1月22日11:00:06
*@最后修改人:herry
*@LastEditTime:2020年1月22日11:00:12
*@说明：和腾讯的本地语音交互，当前代码为实时语音代码，还没有修改调用-->

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
    this.axionOpen();

    // this.main();
  },
  methods: {
    axionOpen() {
      const a = {
        Url: "http://test.cos.ap-guangzhou.myqcloud.com/test.wav",
        ChannelNum: 1,
        EngineModelType: "16k_zh",
        ResTextFormat: 0,
        SourceType: 0,
      };

      vm.$axios.post(this.permissionURL, model).then((res) => {
        if (res.data.code == vm.$responseCode.SUCCESSCODE) {
          localStorage.setItem("gotoken", res.data.data.token);
          this.$router.push({
            name: this.routerName,
            params: {
              // userId: "herry"
            },
          });
        }
      });
    },

    start() {
      let Base64Encode = require("js-base64").Base64;
      // 判断是开启websocket
      if (window.WebSocket) {
        this.ws = new WebSocket(
          "wss://asr.cloud.tencent.com/asr/v2/1259228442?engine_model_type=16k_zh&expired=1592380492&filter_dirty=1&filter_modal=1&filter_punc=1&needvad=1&nonce=1592294092123&secretid=AKIDoQq1zhZMN8dv0psmvud6OUKuGPO7pu0r&timestamp=1592294092&voice_format=1&voice_id=RnKu9FODFHK5FPpsrN&signature=HepdTRX6u155qIPKNKC%2B3U0j1N0%3D"
        );

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

    /*
    指定长度和基数
*/
    uuid2(len = 16, radix) {
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
        ""
      );
      var uuid = [],
        i;
      radix = radix || chars.length;

      if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
      } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
        uuid[14] = "4";

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | (Math.random() * 16);
            uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
          }
        }
      }

      return uuid.join("");
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