<!--
*@描述:样式抽离参照
*@版本:V1.0
*@作者:白爱民
*@Date:2020年3月28日08:22:14
*@最后修改人:白爱民
*@LastEditTime:2020年3月28日08:22:14
*@说明：-->
<template>
  <div class="divClass">
    <!-- 使用集合形式，style则对应集合，当前可应用于redClass中 -->
    <div :style="divStyle" class="redClass"></div>
    <!-- 使用单个变量，style则对应单个, 当前可应用于blueClass中-->
    <div :style="{'--blueColor': blueColor}" class="blueClass"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //创建divStyle对象集合
      divStyle: {
        "--redColor": "red"
      },
      // 创建单个样式变量
      blueColor: "blue"
    };
  }
};
</script>
<style  lang="scss" scoped>
// 画一个蓝圈圈
.blueClass {
  border: 1px solid var(--blueColor);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  color: #fff;
}

// 画一个红圈圈
.redClass {
  border: 1px solid var(--redColor);
  border-radius: 50%;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  color: #fff;
}

.divClass {
  display: flex;
  margin-top: 10%;
  justify-content: space-evenly;
}
</style>