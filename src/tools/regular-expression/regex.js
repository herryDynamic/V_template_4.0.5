export default {

    /*是否是纯数字和小数点*/
    isNumber: function (str) {
        var reg = /[^\d.]/g;
        return str.replace(reg, "");
    },

    /*是否带有小数*/
    isDecimal: function (str) {
        var reg = /^\d+\.\d+$/;
        return str.replace(reg, "");
    },

    /*校验是否中文名称组成 */
    ischina: function (str) {
        var reg = /^[\u4E00-\u9FA5]{2,4}$/; /*定义验证表达式*/
        return str.replace(reg, ""); /*进行验证*/
    },

    /*校验是否全由8位数字组成 */
    isStudentNo: function (str) {
        var reg = /^[0-9]{8}$/; /*定义验证表达式*/
        return str.replace(reg, ""); /*进行验证*/
    },

    /*校验电话码格式 */
    isTelCode: function (str) {
        var reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
        return str.replace(reg, "");
    },

    /*校验邮件地址是否合法 */
    IsEmail: function (str) {
        var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        return str.replace(reg, "");
    },

    /*只能输入汉字，字母，数字*/

    IsNumOrChineseOrLetter: function (str) {
        var reg =/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g;
        return str.replace(reg, "");
    }

}


/* 使用方法如下：
import regex from "../../../tools/regular-expression/regex"; // 导入转移符html 

this.str = escape.isNumber(str)

*/