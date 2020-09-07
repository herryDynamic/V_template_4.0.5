<!--
*@描述:
*@版本:V2.0
*@作者:付媛媛
*@Date:2020年6月22日19:50:38
*@最后修改人:付媛媛
*@LastEditTime:2020年6月22日19:50:40
*@说明：-->
<template>
  <div class="body">
    <div class="info_show">
      <div class="info_first" v-for="(item,index) in dataInfo" :key="index">
        <div>{{dataInfo[index].title}}</div>
        <div>{{dataInfo[index].value}}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 平分左右距离 */
.info_show > * {
  flex-basis: 200px;
}
.info_show {
  display: flex;
  height: 100px;
}
.info_first {
  /* 左右平分距离 */
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  display: flex;
  height: 100px;
  background-color: #ffffff;
}
</style>
<script>
export default {
  props: {
    dataInfo: {
      type: Array,
      default: () => [
        {
          title: "111", //标题
          value: "222" //提示内容
        }
      ]
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods:{}
};
</script>