<!--
*@描述:websocket 腾讯
*@版本:V1.0
*@作者:白爱民
*@Date:2020年1月22日11:00:06
*@最后修改人:herry
*@LastEditTime:2020年1月22日11:00:12
*@说明：和腾讯的实时语音交互可以打通，只需要将语音流传递过去即可，当前没有语音流，前端不能做：appid和其他id不安全，跨域，不能做音频转二进制流-->


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

    <audio id="audio" controls="controls" autoplay="autoplay">
      <source
        src="http://183.232.254.155/amobile.music.tc.qq.com/C400001LKqP53VlkDw.m4a?guid=907191542&vkey=C23B58AF097959994844EF3BE201FA36E50812D4D54F2056AF2D923CCA8CC9D834B65C2D2FE52A1AFFC8AD2485AF9027B08BC95F25577CF5&uin=0&fromtag=66"
        type="audio/mpeg"
      />
      您的浏览器不支持 audio 元素。
    </audio>
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
      let Base64Encode = require("js-base64").Base64;
      // 判断是开启websocket
      if (window.WebSocket) {
        const expired = 1605162480;
        const timestamp = Math.round(new Date().getTime() / 1000);

        var HmacSha1 = require("crypto-js/hmac-sha1");
        var Base64 = require("crypto-js/enc-base64");

        const voice_id = this.uuid2();
        const a0 = "wss://";
        const a =
          "asr.cloud.tencent.com/asr/v2/1302827247?engine_model_type=16k_zh" +
          "&" +
          "expired=" +
          expired +
          "&filter_dirty=1&filter_modal=1&filter_punc=1&needvad=1&nonce=" +
          123 +
          "&secretid=AKID5wg9LD7GOfoa6PwUDgJcfRzwnNkqoJiV&timestamp=" +
          timestamp +
          "&voice_format=1&voice_id=" +
          voice_id;

        const a1 = "&signature=";

        // const a =
        //   "wss://asr.cloud.tencent.com/asr/v2/1302827247?engine_model_type=16k_zh&expired=1605162480&filter_dirty=1&filter_modal=1&filter_punc=1&needvad=1&nonce=1592294092123&secretid=AKID5wg9LD7GOfoa6PwUDgJcfRzwnNkqoJiV&timestamp=1605166500&voice_format=1&voice_id=7MOUf1WZTsthZREd&signature=";

        const b = Base64.stringify(
          HmacSha1(a, "hndIckcEOOJyNr5DPSGyQq0PXYMvObdQ")
        );

        this.ws = new WebSocket(a0 + a + a1 + b);

        this.main_yy();

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

    yuyinwenjian() {},

    main_yy(content) {
      const audio = document.getElementById("audio");
      audio.addEventListener("audio", function (e) {
        this.ws.send(content);
      });
    },

    main() {
      const input = document.getElementById("input");
      const debounceAxios = this.debounce(this.axios, 500);
      input.addEventListener("input", function (e) {
        debounceAxios(e.target.value);
      });
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
  },
};
</script>