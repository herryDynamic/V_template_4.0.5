<template>
  <div class="chart-pie-wrap">
    <div class="d-chart-wrap" v-for="(chart, index) in chartList" :key="index">
      <div
        :id="'doughnutChart' + index"
        :style="{
          width: `${screenWidth * 0.8 * 0.25}px`,
          height: '400px'
        }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      chartList: [
        {
          title: "死亡率/死因",
          data: [
            {
              value: 35,
              name: "活着"
            },
            {
              value: 100,
              name: "原发性肿瘤相关死亡"
            },
            {
              value: 34,
              name: "其他肿瘤相关死亡"
            },
            {
              value: 0,
              name: "氏癌"
            }
          ],
          legend: ["活着", "原发性肿瘤相关死亡", "其他肿瘤相关死亡", "氏癌"]
        },
        {
          title: "5年复发率",
          data: [
            {
              value: 5,
              name: "复发"
            },
            {
              value: 75,
              name: "不复发"
            },
            {
              value: 2,
              name: "未知"
            }
          ],
          legend: ["复发", "不复发", "未知"]
        },
        {
          title: "5年复发分布",
          data: [
            {
              value: 0,
              name: "奥卡尔"
            },
            {
              value: 0,
              name: "淋巴结点"
            },
            {
              value: 100,
              name: "远点"
            }
          ],
          legend: ["奥卡尔", "淋巴结点", "远点"]
        },
        {
          title: "5年元转移",
          data: [
            {
              value: 0,
              name: "脑"
            },
            {
              value: 0,
              name: "骨"
            },
            {
              value: 0,
              name: "肝脏"
            },
            {
              value: 100,
              name: "多重"
            }
          ],
          legend: ["肝脏", "肺", "脑", "骨", "多重"]
        }
      ]
    };
  },
  mounted() {
    this.chartList.forEach((chart, index) => {
      this.chartPieInit(chart, index);
    });
  },
  methods: {
    chartPieInit(chart, index) {
      var myChart = this.$echarts.init(
        document.getElementById(`doughnutChart${index}`)
      );
      const option = {
        color: ["red", "green", "gray", "origin"],
        title: {
          text: chart.title,
          right: "center"
        },
        legend: {
          orient: "vertical",
          top: 40,
          left: 0,
          width: "40",
          selectedMode: false,
          data: chart.legend
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: [30, 45],
            hoverOffset: 2,
            avoidLabelOverlap: true,
            center: ["40%", "60%"],
            label: {
              show: true,
              position: "left",
              formatter: "{d}%"
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: chart.data
          }
        ]
      };
      myChart.setOption(option, true);
    }
  }
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
