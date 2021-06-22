<template>
  <div
    id="myChart"
    :style="{ width: `${screenWidth * 0.8}px`, height: '300px' }"
  ></div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      screenWidth: 1000,
    };
  },
  computed:{
      ...mapState({
          chartData : state => state.Echarts.chartData
      })
  },
  mounted() {
    this.initData();
  },

  methods: {
    // 更新线图
    initData() {
      const mcolors = ["rgba(0,0,0,0.1)", "#409EFF", "rgb(141,176,243)"];
      const schema = this.chartData.schema;
      const dataBJ = this.chartData.dataBJ;
      const dataGZ = this.chartData.dataGZ;
      const dataSH = this.chartData.dataSH;
      const dataParallelAxis = Object.assign(this.chartData.parallelAxis);

      console.log(dataBJ, "dataBJ");
      const option = {
        parallelAxis: dataParallelAxis,
        parallel: {
          left: "5%",
          right: "13%",
          bottom: "10%",
          top: "20%",
          parallelAxisDefault: {
            type: "value",
            name: "postion",
            nameLocation: "end",
            nameGap: 23,
            splitNumber: 4,
            nameTextStyle: {
              fontSize: 14,
              verticalAlign: "bottom",
              color: "#333",
              padding: [3, 10],
            },
            axisLabel: {
              show: true,
              margin: 10,
              // color: '#409EFF',
              align: "center",
              zlevel: 2222,
              interval: false,
            },
            axisLine: {
              lineStyle: {
                // color: '#409EFF',
                opacity: 1,
                zlevel: 1,
                width: 1,
              },
              zlevel: 2,
            },
            axisTick: {
              show: false,
              alignWithLabel: true,
              length: 20,
              lineStyle: {
                width: 1,
                color: "red",
                rotate: 90,
              },
            },
            minorTick: {
              show: false,
            },
          },
        },
        series: [
          {
            name: "persion",
            type: "parallel",
            smooth: true,
            data: dataBJ,
            textStyle: {
              color: "#333",
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  color: mcolors[0],
                  opacity: 1,
                },
              },
            },
          },
          {
            name: "simple",
            type: "parallel",
            smooth: true,
            data: dataSH,
            lineStyle: {
              color: mcolors[1],
              opacity: 1,
              width: 1,
            },
          },
          {
            name: "other",
            type: "parallel",
            smooth: true,
            data: dataGZ,
            lineStyle: {
              color: mcolors[2],
              opacity: 1,
            },
          },
        ],
      };
      this.chartInit(option);
    },
    chartInit(option) {
      // 基于准备好的dom，初始化echarts实例
      setTimeout(() => {
        const myChart = this.$echarts.init(document.getElementById("myChart"));
        myChart.setOption(option, true);
      }, 200);
    },
  },
};
</script>
<style lang="scss" scoped></style>
