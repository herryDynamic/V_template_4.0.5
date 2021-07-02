const state = {
  chartData: {
    // 连线数据
    dataBJ: [
      ['T2a', 'N1', 'M0', '膀胱癌', '', 'G1', '单发', '无CIS'],
      ['T3a', 'N1', 'M1b', '膀胱癌', '', 'G1', '单发', '无CIS', '2'],
      ['T3a', 'N0', 'M0', '膀胱癌', 'G3', '单发', '无CIS', '3']
    ],
    // dataGZ: [['结肠', 2, 2, 1, 1.39, '腺癌']],
    // dataSH: [['结肠', 3, 2, 1, 0.82, '腺癌']],
    // title名字
    parallelAxis: [
      {
        dim: 0,
        name: 'T分期',
        type: 'category',
        data: ['T2a', 'T3a']
      },
      {
        dim: 1,
        name: 'N分期',
        type: 'category',
        data: ['N1', 'N0']
      }
    ],
    schemaNameTemporary: [] // 临时存储没有下拉框的title
  },
}
export default state