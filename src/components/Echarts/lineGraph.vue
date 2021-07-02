<template>
  <div
    id="lineGraph"
    :style="{ width: `${screenWidth * 0.8}px`, height: '300px' }"
  ></div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      screenWidth: 1000,
      chartData: {
        // 连线数据
        dataBJ: [
          ["T2a", "N1", "M0", "膀胱癌", "", "G1", "单发", "无CIS"],
          ["T3a", "N1", "M1b", "膀胱癌", "", "G1", "单发", "无CIS", "2"],
          ["T3a", "N0", "M0", "膀胱癌", "G3", "单发", "无CIS", "3"],
        ],
        // dataGZ: [['结肠', 2, 2, 1, 1.39, '腺癌']],
        // dataSH: [['结肠', 3, 2, 1, 0.82, '腺癌']],
        // title名字
        parallelAxis: [
          {
            dim: 0,
            name: "T分期",
            type: "category",
            data: ["T2a", "T3a"],
          },
          {
            dim: 1,
            name: "N分期",
            type: "category",
            data: ["N1", "N0"],
          },
        ],
        schemaNameTemporary: [], // 临时存储没有下拉框的title
      },
    };
  },
  computed: {

  },
  mounted() {
    this.initData();
  },

  methods: {
    // 更新线图：制作数据
    initData() {
      const mcolors = ["rgba(0,0,0,0.1)", "#409EFF", "rgb(141,176,243)"];
      const dataBJ = this.chartData.dataBJ;
      const dataGZ = this.chartData.dataGZ;
      const dataSH = this.chartData.dataSH;
      const dataParallelAxis = Object.assign(this.chartData.parallelAxis);
      console.log(this.chartData, "this.chartData2");
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
    // 更新具体的线图
    chartInit(option) {
      // 基于准备好的dom，初始化echarts实例
      setTimeout(() => {
        const lineGraph = this.$echarts.init(document.getElementById("lineGraph"));
        lineGraph.setOption(option, true);
      }, 200);
    },
  },
};
</script>
<style lang="scss" scoped></style>
