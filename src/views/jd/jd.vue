<template>
  <div>
    <div class="title"></div>

    <div class="top_navigation">
      <div class="top_inline top_flex">
        <div class="hb">
          <img :src="dt_svg" alt="" />
          <span class="hb_text">河北</span>
        </div>

        <div class="info">其他</div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.title {
  height: 45px;
  border: 1px solid #932A31;
  background-color: #932A31;
  width: auto;
}

/* *****************************顶部导航 */
.top_navigation {
  width: auto;
  height: 25px;
  background-color: #e3e4e5;
}

.top_inline {
  width: auto;
  height: 25px;
  // background-color: white;
  margin-left: 6%;
  margin-right: 6%;
}

.top_flex {
  display: flex;
  align-items: center;
}

.hb::hover {
  background-color: white;
}

.info {
  margin: auto;
}

.dt {
  border: 1px solid white;
  // margin: auto 10px auto  10px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
}
</style>
  
<script>
export default {
  data() {
    return { dt_svg: require("../.././assets/jd/地图.svg") };
  },

  methods: {},
};
</script>