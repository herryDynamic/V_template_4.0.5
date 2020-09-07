<!--
*@描述:test
*@版本:V1.0
*@作者:白爱民
*@Date:2020年6月23日11:37:49
*@最后修改人:付媛媛
*@LastEditTime:2020年6月23日11:38:00
*@说明：-->
<template>
  <div>
    <div class="content">
      <div class="img_info">
        <img :src="dataInfoP[0].value" />
      </div>
      <div class="person_info">
        <div class="columnDiv columnDivInfo" v-for="(item ,i ) in dataInfoP" :key="i">
          <div v-show="i!=0" class="columnDivLeft" v-text="dataInfoP[i].title"></div>
          <div v-show="i!=0" class="columnDivRight" v-text="dataInfoP[i].value"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  background-color: #fff;
  height: 220px;
  display: flex;
}
.img_info {
  width: 120px;
  margin: auto;
}
img {
  width: 80%;
}

.person_info {
  width: 270px;
  //主轴居中对齐
  justify-content: center;
  flex-direction: column;
  display: flex;
  height: 150px;
  margin: auto;
}

.columnDiv {
  height: 20px;
  margin: 5px 0;
}

.columnDivInfo {
  display: flex;
  //主轴居中对齐
  justify-content: center;
  //交叉轴居中对齐
  align-items: center;
  font-size: 16px;
}

.columnDivLeft {
  flex: 1;
}
.columnDivRight {
  flex: 2;
}
</style>
<script>
export default {
  components: {},
  props: {
    dataInfoP: {
      type: Array,
      default: () => [
        {
          title: "姓名1",
          value:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2191477978,2331549871&fm=15&gp=0.jpg"
        },
        {
          title: "性别1",
          value: "男1"
        },
        {
          title: "学号1",
          value: "122231231231"
        },
        {
          title: "学院1",
          value: "1物理与电子信息学院"
        },
        {
          title: "专业",
          value: "电子信息"
        },
        {
          title: "班级",
          value: "一班"
        },
        {
          title: "年级",
          value: "一年级"
        }
      ]
    }
  },
  data() {
    return {
      // personIcon: "https://ae01.alicdn .com/kf/H73bc94bf25e045a4a89d2da00f7ee41dr.jpg"
    };
  },
  mounted() {},
  methods: {}
};
</script>
