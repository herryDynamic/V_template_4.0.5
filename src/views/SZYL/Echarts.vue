<template>
  <div>
    <PidChart1/>
    <chartInit/>

     <div class="chart-pie-wrap">
      <div class="d-chart-wrap" v-for="(chart, index) in 5" :key="index">
        <Bar
              height="400px"
              width="100%"
              id="treatment"
              title="测试"
              titleLocal="left"
              :dataX="treatmentDataX"
              :dataY="treatmentDataY"
              :direction="direction"
            />
      </div>
  </div>
    

         
  </div>  
</template>

<script>
// import throttle from "../../util_component/throttle/throttle.vue";
import PidChart1 from '../../components/Echarts/PieChart1'
import chartInit from '../../components/Echarts/chartInit.vue'
import Bar from '../../components/Echarts/Bar.vue'
export default {
  data() {
    return {
      count: 1,
      time: 2000,
      treatmentDataX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
      treatmentDataY: [30, 10],
      direction: false,
      
    };
  },

  components: {
    PidChart1 , chartInit , Bar
  },
  methods: {
    clickBtn() {
      console.log("他店家了");

      //   setTimeout(() => {
      //   }, 2000);
    },
  },
};
</script>   

<style lang="scss" scoped>
.chart-pie-wrap {
  width: 100%;
  display: flex;
  overflow-x: auto;
  .d-chart-wrap {
    flex: 1;
    width: 25%;
    border-right: 1px solid #ccc;
    padding-left: 30px;
    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      border: none;
    }
  }
}
</style>