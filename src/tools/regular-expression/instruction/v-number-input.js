
// *@描述:数字和小数点输入框指令
// *@版本:V1.0
// *@作者:白爱民
// *@Date:2020年5月21日09:04:11
// *@最后修改人:
// *@LastEditTime:

import Vue from "vue";

function onInput(el, ele, binding, vnode) {
    function handle() {
        // 只保留数字
        // ele.value = ele.value.replace(/[^\d]/g, "");
        ele.value = ele.value.replace(/[^\d.]/g, "");

    }

    return handle;
}
const numberInput = {
    bind(el, binding, vnode) {
        const ele = el.tagName === "INPUT" ? el : el.querySelector("input");
        ele.addEventListener("input", onInput(el, ele, binding, vnode), false);
    }
};
Vue.directive("number-input", numberInput);


// 使用方法：
// 
{/*
1.  import '../../api/Super/instruction/v-number-input'
2.  <van-field v-model="model" v-number-input></van-field> 
3.  data(){
    model:""
}
*/}