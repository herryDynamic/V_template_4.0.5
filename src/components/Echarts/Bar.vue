<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
// import resize from './mixins/resize'

export default {
//   mixins: [resize],
  props: {
    direction: {
      // 横向还是纵向
      type: Boolean,
      default: false
    },
    dataZoom: {
      type: Boolean,
      default: false
    },
    nameY: {
      type: String,
      default: '天'
    },
    dataX: {
      type: Array,
      default: null
    },
    dataY: {
      type: Array,
      default: null
    },
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'barChart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    title: {
      type: String,
      default: 'chart'
    },
    titleLocal: {
      // 标题位置
      type: String,
      default: 'center'
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  watch: {
    dataY (val) {
      // 监听数据发生改变 刷新图表数据
      this.initChart()
    }
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el)
      this.chart.setOption({
        color: ['#5AA6FF'], // 柱状体颜色
        title: {
          text: this.title,
          textStyle: {
            fontSize: 14
          },
          x: this.titleLocal,
          y: 'top'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: []
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        dataZoom: {
          show: this.dataZoom,
          realtime: true,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: this.direction ? 'value' : 'category',
            axisLabel: {
              color: '#999999',
              // interval: 0, // 横轴信息全部显示
              rotate: -40 // -30度角倾斜显示
            }, // 设置轴线的属性
            axisLine: {
              lineStyle: {
                color: '#E6E6E6'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#f5f5f5',
                type: 'dashed'
              }
            },
            data: this.dataX
          }
        ],
        yAxis: [
          {
            type: this.direction ? 'category' : 'value',
            axisLabel: {
              color: '#999999'
            },
            axisLine: {
              lineStyle: {
                color: '#E6E6E6'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#f5f5f5',
                type: 'dashed'
              }
            },
            nameTextStyle: {
              color: '#999999'
            },
            name: this.nameY,
            data: this.dataY
          }
        ],
        series: [
          {
            name: this.nameY,
            type: 'bar',
            barMaxWidth: '20',
            data: this.direction ? this.dataX : this.dataY,
            // 移入当前的柱状图时改变颜色
            itemStyle: {
              emphasis: {
                color: '#5dafd1'
              }
            }
            // markPoint: {
            //   data: [
            //     { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18 },
            //     { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
            //   ]
            // },
            // markLine: {
            //   data: [
            //     { type: 'average', name: '平均值' }
            //   ]
            // }
          }
        ]
      })
    }
  }
}
</script>
