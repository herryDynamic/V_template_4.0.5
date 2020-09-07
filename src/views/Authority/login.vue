<!--
*@描述:登陆
*@版本:V1.0
*@作者:白爱民
*@Date:2020年1月22日11:00:06
*@最后修改人:herry
*@LastEditTime:2020年1月22日11:00:12
*@说明：-->
<template>
  <div>
    <div class="pictureTop"></div>

    <div class="intermediate">
      <div class="userNameClass intermediatePublic">
        <img :src="telPicture" class="telImg" />
        <input v-model="userValue" maxlength="11" placeholder="请输入用户名" type="text" />
      </div>
      <div class="possWords intermediatePublic">
        <img :src="passPicture" class="passImg" />
        <input v-model="passValue" maxlength="20" placeholder="请输入密码" type="password" />
      </div>
      <div class="loginButton intermediatePublic" @click="login">
        <p style="margin-top:5%">登陆</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  border: 0px;
  margin-top: 15px;
}

.telImg {
  width: 9%;
  margin-right: 10px;
  /* height: 10px; */
  /* color: red; */
  /* background-color: wheat; */
  top: 10px;
  margin-top: 10px;
}

.passImg {
  width: 10%;
  margin-right: 10px;

  /* height: 10px; */
  /* color: red; */
  /* background-color: wheat; */
  top: 10px;
  margin-top: 10px;
}

.pictureTop {
  position: relative;
}

.intermediate {
  position: relative;
  z-index: 1;
  font-size: 15px;
}

.userNameClass {
  top: 200px;
  background-color: white;
}

.possWords {
  top: 275px;
  background-color: white;
}

.intermediatePublic {
  margin-left: 10%;
  margin-right: 10%;
  position: absolute;
  height: 50px;
  width: 300px;
  border-radius: 50px;
}

.loginButton {
  top: 350px;
  background-color: white;
  text-align: center;
}

.loginButton:active {
  border-width: 10px 10px 0 0;
  background-color: #e0e9ea;
}
</style>

<script>
import login from "../../api/Authority/login";
import { mapState } from "vuex"; // 全局调取：可使用this.
import { responseCode } from "../../../src/utils/responseCode"; // 引入状态码

// import notify from "../../../src/api/publicAll/notify";
export default {
  computed: {
    // 展开运算符，将全局变量映射为自己界面的变量
    ...mapState(["messageInfo", ""])
  },
  data() {
    return {
      atLastUserName: "", // 用户最后输入最后用户名
      atLastPassWords: "", // 用户输入最后密码

      // 用户名和密码图片
      telPicture: require("../../assets/login/tel.png"),
      passPicture: require("../../assets/login/password.png"),

      // 用户输入数据
      userValue: "1",
      passValue: "1",

      // 正确的用户名和密码
      correctUserData: "1",
      correctPassData: "1",

      routerName: "templateManagement", // 登陆后跳转地址
      permissionURL: "http://d-auth.dmsd.tech/auth-web/access/login"
    };
  },

  created() {
    this.enterLogin();
  },
  mounted() {
    this.retrieveData();
  },
  methods: {
    // 按下enter执行登陆
    enterLogin() {
      var _self = this;

      // 获取按下按钮，13表示enter
      document.onkeydown = function(e) {
        var key = window.event.keyCode;
        if (key == 13) {
          _self.login(); // 执行登陆方法
        }
      };
    },

    // 登陆判断进入
    login() {
      // this.getToken();//使用token的登录方法
      this.unUserToken();//不使用token的登录方法
    },

//不使用token的登录方法
unUserToken(){
     if (
        this.userValue == this.correctUserData &&
        this.passValue == this.correctPassData
        
      ) {
        // this.getToken();
        this.prompt(1);
        this.sessionleave();
        this.saveData();
        this.$router.push({
          name: this.routerName,
          params: {
            // userId: "herry"
          }
        });
      } else {
        this.prompt(0);
        this.userValue = "";
        this.passValue = "";
      }
},
// 使用token的登录方法
    // getToken(){
    //   var vm = this;
    //   var model = { password: vm.passValue, userCode: vm.userValue };

    //   vm.$axios.post(this.permissionURL, model).then(res => {
    //     if (res.data.code == vm.$responseCode.SUCCESSCODE) {
    //       localStorage.setItem("gotoken", res.data.data.token);
    //       this.$router.push({
    //       name: this.routerName,
    //       params: {
    //         // userId: "herry"
    //       }
    //     });
    //     }
    //   });
    // this.saveData();

    // },
    // 需要开始存储到缓存：其他页面进行了判断
    sessionleave() {
      sessionStorage.setItem("setting_Leave", "0");
      sessionStorage.setItem("ruleTemplate_leave", "0");
      sessionStorage.setItem("createName_successl", "0");

      // 为0时候表示登陆成功
      sessionStorage.setItem("login-successful", "0");
    },

    // 用户输入数据存入
    saveData() {
      localStorage.setItem("userName", this.userValue);
      localStorage.setItem("passWord", this.passValue);
    },
    // 初始化获取
    retrieveData() {
      this.userValue = localStorage.getItem("userName");
      this.passValue = localStorage.getItem("passWord");
    },

    // 提示
    prompt(value) {
      if (value == "0") {
        this.$message({
          message: this.messageInfo.message.loginErr, // 提示内容
          center: this.messageInfo.center.centerTrue, //居中显示
          type: this.messageInfo.type.error, //提示类型
          showClose: this.messageInfo.showClose.showCloseTrue, //是否显示关闭按钮，true为显示关闭按钮
          duration: this.messageInfo.duration.duration, //提示时长
          offset: this.messageInfo.offset.offset //提示框距离顶部距离
        });
      } else if (value == "1") {
        this.$message({
          message: this.messageInfo.message.loginOk,
          center: this.messageInfo.center.centerTrue,
          type: this.messageInfo.type.success,
          showClose: this.messageInfo.showClose.showCloseTrue,
          duration: this.messageInfo.duration.duration,
          offset: this.messageInfo.offset.offset
        });
      }
    }
  }
};
</script>

