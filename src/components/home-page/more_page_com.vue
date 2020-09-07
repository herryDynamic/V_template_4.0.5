<template>
  <div>
    <div class="border">
      <div class="borderTitle" v-text="moreTitle"></div>
      <div class="borderImg">
        <img :src="borderImg" alt />
      </div>
    </div>
    <!-- <suspendedComponents
      :titleName="titleName"
      @listenSCReturn="listenSCReturn"
      @listenSCSave="listenSCSave"
    ></suspendedComponents>-->
  </div>
</template>

<style lang="scss" scoped>
.border {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid white;
  height: 40px;
  background-color: #fff;
  margin-top: 20px;
}
.borderImg {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  width: 40px;
  border: 1px solid #fff;
}

img {
  width: 30px;
  height: 30px;
}

.borderTitle {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
// import suspendedComponents from "../../components/publicAll/Suspended/suspended_components";
export default {
  components: {
    // suspendedComponents
  },
  props: {
    moreTitle: { default: "内容1" }
  },
  data() {
    return {
      borderImg: require("../../assets/home-page/arrow.png")
      // titleName: "更多"
    };
  },
  methods: {
    // //悬浮球--返回
    // listenSCReturn() {},
    // //悬浮球--保存
    // listenSCSave() {}
  }
};
</script>