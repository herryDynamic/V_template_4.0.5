const CHARTDATA = 'CHARTDATA'
const UPDATACHARTTITLEDATA = 'UPDATACHARTTITLEDATA'

const mutation = {
 // 修改图表展示数据
 [CHARTDATA] (state, data) {
    const headerData = []
    for (let i = 0; i < data.data.length; i++) {
      headerData.push([])
      for (let j = 0; j < state.chartData.schema.length; j++) {
        const constdata = [state.chartData.schema[j].title]
        headerData[i].push(data.data[i][constdata])
      }
      const data = headerData[i][0].split('/')[0]
      headerData[i][0] =  data// 赋值数组值
    }
    state.chartData.dataBJ = JSON.parse(JSON.stringify(headerData))
  },
  [UPDATACHARTTITLEDATA] (state, data) {
    const header = data.map((item, index) => {
      return {
        name: item.label,
        index: String(index),
        title: item.label
      }
    })
    // state.chartData.schema = header
    state.chartData.schema = JSON.parse(JSON.stringify(header))
    state.chartData.parallelAxis = JSON.parse(JSON.stringify([]))
    // state.chartData.parallelAxis = data.map((item, index) => {
    //   return Object.assign({
    //     dim: index,
    //     name: item.label,
    //     type: 'category',
    //     data: []
    //   })
    // })
    for (let i = 0; i < data.length; i++) {
      state.chartData.parallelAxis.push({
        dim: String(i),
        name: data[i].label,
        type: 'category',
        data: []
      })
      for (let j = 0; j < data[i].publicInfoModel.length; j++) {
        state.chartData.parallelAxis[i].data.push(
          data[i].publicInfoModel[j].public_info_title
        )
      }
    }
  },
}
export default mutation