const state = {
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
        schema: [
          { name: "T分期 ", index: "0", title: "T分期" },
          { name: "N分期 ", index: "1", title: "N分期" },
          { name: "M分期 ", index: "2", title: "M分期" },
          { name: "疾病诊断 ", index: "3", title: "疾病诊断" },
        ],
        parallelAxis: [],
      }
}
export default state