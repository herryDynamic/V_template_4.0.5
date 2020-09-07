<!--
*@描述:组件编辑
*@版本:V2.0
*@作者:孙彤
*@Date:2020年6月6日16:51:03
*@最后修改人:孙彤
*@LastEditTime:2020年6月6日16:51:09
*@说明：-->
<template>
  <div>
    <div class="swipe" v-for="(item,index) in dataInfo" :key="index" >
      <!-- 通过v-show控制checklist子组件是否显示    绑定index，将index传递给子组件 -->
      <checklist v-show="checkListVisible" :check="checkBoxList[index]"></checklist>
      <!-- 滑动 v-touch:long="(e)=>showCheck()"实现长按显示check -->
      <van-swipe-cell class="swipe-cell" v-touch:long="(e)=>showCheck(true,index)" > 
         <!-- 人像图标 -->
      <img :src="people_img" class="people_list" /> 
        <!-- 显示内容  -->
      <van-cell class="user_name" :border="false" :title="dataInfo[index].userName" 
        @click="changeCheckState(true,index)" 
        @isChangeState="changeState" />      
        <!-- <van-cell class="user_name" :border="false" :title="dataInfo[index].userName" @click="changeCheckState(true,index)"  />    -->
       <!-- 右滑显示 -->
      <template #right>
          <van-button  class="del_bth" square type="danger" text="删除" @click="btnDelUser(index)" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<style scoped>
.swipe {
  display: flex;
  position: relative;
}
/* 人像图标 */
.people_list {
  position: absolute;
  width: 23px;
}
/* 滑动 */
.swipe-cell {
 width: 100%;
  /* margin-left: 10%; */
   margin-left: 22px;
  text-align: left;
}
/* 删除按钮 */
/* .del_bth {
  border: 1px solider #1fcda8;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  color: white;
  background: #1fcda8;
} */

/* 人员姓名 */
.user_name {
  /* padding: 0; */
   margin-left:20px;
  /* margin-bottom: 8%; */ 
}
.check_list {
  position: absolute;
}
</style>

<script>

import Vue from "vue";
import { SwipeCell } from "vant"; // 左右滑动弹出编辑、删除等
import { Checkbox, CheckboxGroup } from 'vant';   //复选框
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SwipeCell);
import { responseCode } from "../../utils/responseCode"; //引入定义的状态码
import checklist from "../../components/use-template/check"; //引入check子组件
export default {
  props:['slideout'],//接收authority父组件中的值
  components: {
    checklist //子组件
  },
   computed: {
     //接收slidout组件传来的数据
      isSelectedAllUser() {
        // 这里存储从store.js中获取selectedUser（选中待删除人数）的数据
        return this.$store.state.isSelectedAllUser
      }
    },
  data() {
    return {
      checkListVisible: false, //控制check子组件显示与隐藏的标识。默认不显示
      people_img: require("../../assets/publicAll/people.png"), //引入人员图像
      dataInfo: [], //展示人员
      checkBoxList: [], //选中check的存放在这个数组中
      checkStatus: false ,//默认check框不选中
      delPersonnelGroup:[],//待删除人员分组
    };
  },
  mounted() {
    this.iniTemplate(); //初始化
    this.iniTest();
    this.delPersonnelGroup();//待删除人员组
  },
  watch(){
    
  },
  methods: {
    iniTest() {//初始化数组，存放check的选中状态
      this.checkBoxList = [];//数组置空
      for (let index = 0; index < this.dataInfo.length; index++) {
      this.checkBoxList.push(false);//默认都不选中       
      }
    },
    delPersonnelGroup(){
      this.delPersonnelGroup=[];//待删除人员分组置空
      
    },
    iniTemplate() {
      this.$axios
        .get("http://rap2.taobao.org:38080/app/mock/256952/authority") //接口
        .then(res => {
          switch (
            res.data.code //判断code码
          ) {
            case responseCode.SUCCESSCODE:
              this.dataInfo = [];
              for (let index = 0; index < res.data.data.length; index++) {
                this.dataInfo.push({//循环查询出来的结果
                  userId: res.data.data[index].userId, //用户id
                  userName: res.data.data[index].userName //用户名
                });
              }
              break;
            default:
              break;
          }
        });
    },
    btnDelUser(index) {
      this.dataInfo.splice(index, 1); //删除单个人
    },

    showCheck(visible, index) {
      this.checkListVisible = visible; //长按单个人员，显示check选框
      this.$emit('slideVisible', visible)////长按将slide-out显示出来，slideout是在autority上，依旧是父子传值，子给父传.子给父传true，监听，控制是否显示.第一个参数是父组件的监听方法，第二个参数是要监听的方法
      this.checkBoxList[index] = visible;// 给check传值，表示当前的check被选中，将改变后的状态传到子组件中
      this.delPersonnelGroup.push(index);
         this.$store.commit("setselectedUserNUm",{
         //触发setselectedUserNUm，将选人总数传到slidout中
         selectedUserNUm : this.delPersonnelGroup.length ,
     })
    },

    changeCheckState(visible,index){
      // this.checkBoxList.splice(index,1,visible);//替换check数组中的值
      // // this.delPersonnelGroup.push(index);


      this.checkBoxList.splice(index,1,visible);//替换check数组中的值
      var res = this.delPersonnelGroup.includes(index);
      if(res){
       this.checkBoxList.splice(index,1,!visible);
       var value =this.delPersonnelGroup.indexOf(index);
       this.delPersonnelGroup.splice(value,1);

     this.$store.commit("setselectedUserNUm",{
         //触发setselectedUserNUm，将选人总数传到slidout中
         selectedUserNUm : this.delPersonnelGroup.length ,
     })
     
      }
      else{
        this.delPersonnelGroup.push(index);
        this.$store.commit("setselectedUserNUm",{
         //触发setselectedUserNUm，将选人总数传到slidout中
         selectedUserNUm : this.delPersonnelGroup.length ,
     })
      }
    },
    changeState(state){
      if(state==true){

      }
      else{
        this.delPersonnelGroup=[];//待删除人员分组置空
         this.$store.commit("setselectedUserNUm",{
         //触发setselectedUserNUm，将选人总数传到slidout中
         selectedUserNUm : this.delPersonnelGroup.length ,
        })
      }
    },
   

  }
};
</script> 