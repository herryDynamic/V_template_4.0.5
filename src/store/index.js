import Vue from 'vue'
import Vuex from 'vuex'
import echarts from './echarts'
import getters from './getters'
import echarts2 from './modules/echarts2'

Vue.use(Vuex)


export default new Vuex.Store({
  //要设置的全局访问的state对象
  state: {
    token: "", //用户token
    isShowLoading: false, // 请求前加载动画
    isShowLoadFailed: false, //请求失败加载页面/断网加载页面

    // 制作模板工作流主页面数据
    configuration_templateDataStore: {
      publicVariable: {
        active: 0,
        createNameComIsShow: true,
        makeFormComIsShow: false,
        ruleSettingComIsShow: false,
        ruleTemplateComIsShow: false,
      }
    },

    workflow_templateDataStore: {
      publicVariable: {
        active: 0,
        newTemplateComIsShow: true,
        subPersonManagementComIsShow: false,
        subTemplateManagementComIsShow: false,
        subRuleManagementComIsShow: false
      }
    },

    //流工作是否显示
    elStepsIsShow: true,

    // 基础组件id
    basic_components_id: {
      single_line_id: "0000",
      multi_line_id: "1111",
      number_input_id: "2222",
      single_box_id: "3333",
      check_box_id: "4444"

    },

    libraryId: {
      userInfo: "5856212",
      userInfoList: { user: "0445946" },
      theMessageStates: "8706797",
      theMessageStatesList: { infoShow: "0473771" },
      enterInfomation: "0342524",
      enterInfomationList: { numberIndex: "4833953" },
      invalid: "1111111",
    },

    // 同步上面数据：去除invalid，并从上到下排列下来
    libraryIdIndex: [
      {
        libraryId: "0445946",
        componentId: require("../../src/assets/super/library/user.jpg"),
      },
      {
        libraryId: "0473771",
        componentId: require("../../src/assets/super/library/infoShow.jpg"),
      },
      {
        libraryId: "4833953",
        componentId: require("../../src/assets/super/library/numberIndex.jpg"),
      },
    ],

    // 根据这里面的id进行，将传递过来的数据，将这个里面的图片放到后端传递过来的数据中

    //下拉刷新内容
    pullRefresh: {
      isLoading: false,
      pulling: "下拉即可刷新",
      lossing: "释放即可刷新",
      loading: "加载中",
      success: "刷新成功",
    },

    //顶部弹框内容
    messageInfo: {
      message: {
        loginErr: "用户名或密码错误",
        loginOk: "登陆成功",
        noData: "暂无数据",
        loadFailed: "加载失败",
        deleteSucceed: "删除成功",
        deleteFailed: "删除失败",
        modifySucceed: "修改成功",
        modifyFailed: "修改失败",
        sorry: "抱歉，，，",
        boxEmpty: "文本框不能为空，请输入数据",
        boxInputLong: "文本框输入长度过长",
        inputNumber: "请输入数字，并保证小数位数不超过2位",
        saveSucceed: "保存成功",
        saveFailed: "保存失败",
        failed: "失败",
        noTemplateRule: "当前模板没有输入组件，无法添加模板规则",
        noModification: "暂无修改，无需保存",
        dataIsEmpty: "数据为空，不可跳转",
        numberIndex: "请至少拉取一个输入框",
        choiceNumber: "选项不能超过10个",
        choiceLessNumber: "选项最少有一个",
        templateName: "模板名称不能为空",
        creatRoomFailed: "数字被占用，更换再次尝试"
      },
      type: {
        success: 'success',    //成功提示
        error: 'error',        //错误提示
        warning: 'warning',    //警告提示
      },
      duration: {
        duration: 1000,    //顶部提示时长
      },
      offset: {
        offset: 50,    //提示框距离顶部距离设置
      },
      center: {
        centerTrue: true,    //顶部提示文字居中（true为居中，false为不居中）
        centerFalse: false,
      },
      showClose: {
        showCloseTrue: true,   //顶部提示是否显示关闭按钮（true为显示，false为不显示）
        showCloseFalse: false,
      }
    },

    // 提示框内容
    tipsStore: {
      message: {
        isDelete: "您确定删除吗？",
        exitPages: "您要退出页面，数据是否保存呢"
      },
    }
    ,
    // ftdp2.0添加模板管理--template_management
    // 此数组用于保存用户选中的组件的组件信息---即模板内容数据
    templateContent: [],//模板内容
    componentContent: state => state.messArray,//选择组件内容
    componentDataId: {
      singleInputId: "8609235731419657359238",    //单行输入框组件id
      multiInputId: "3815484196757360",     //多行输入框组件id
      digitalInputId: "4103176421089075755",   //数字输入框组件id
      singleChoiceId: "5145642581305895170",   //单选框组件id
      multiChoiceId: "0021194444197229866933306",    //多选框组件id
      userInfoId: "11604045632660651089",   //用户信息组件id
      infoDisplayId: "4986072344528940376", //信息显示组件id
      arrayInputId: "3482030014928907044"   //数组输入组件id
    },

    //
    /**
     * 模板内容保存接口标识
     * 如果为0，则执行插入接口
     * 如果为1，则执行修改接口
     * 默认执行插入接口---默认为1
     * 通过加号进入新建模板，将值改为0
     */
    templateContentSavaOrUpdate: 1,
    // ------------------------------------------------makeForm--------------------

    makeFormDataList: [], // 创建模板二：makeForm编辑模板数据

    makeFormInitializationList: [
      {
        templateId: "", //模板ID
        id: "", // 模板内容ID
        groupSequence: "", // 模板内容分组排序
        componentId: "0", // 标识是哪个组件
        isTrue: false, // 底部弹框是否显示
        templateArray: [
          {
            isTrue: true,
            title: "姓名",
            value: "张三",
            bottomName: "姓名是否显示",
            fieldSequence: "0",
          },
          {
            isTrue: true,
            title: "姓名",
            value: "张三",
            bottomName: "姓名是否显示",
            fieldSequence: "0",
          },
          {
            isTrue: true,
            title: "姓名",
            value: "张三",
            bottomName: "姓名是否显示",
            fieldSequence: "0",
          },
          {
            isTrue: true,
            title: "姓名",
            value: "张三",
            bottomName: "姓名是否显示",
            fieldSequence: "0",
          },
          {
            isTrue: true,
            title: "姓名",
            value: "张三",
            bottomName: "姓名是否显示",
            fieldSequence: "0",
          },
          {
            isTrue: true,
            title: "姓名",
            value: "张三",
            bottomName: "姓名是否显示",
            fieldSequence: "0",
          },
          {
            isTrue: true,
            title: "姓名",
            value: "张三",
            bottomName: "姓名是否显示",
            fieldSequence: "0",
          },
        ],
      },
      [
        {
          isTrue: true,
          infoTitle: "某某得分",
          infoNum: "110",
          infoList: ["某某得分", "某某信息", "评分"],
        },
        {
          isTrue: true,
          infoTitle: "某某信息",
          infoNum: "119",
          infoList: ["某某得分", "某某信息", "评分"],
        },
        {
          isTrue: true,
          infoTitle: "评分",
          infoNum: "120",
          infoList: ["某某得分", "某某信息", "评分"],
        },
      ],
      [
        {
          infoNum: "请输入成就 单位",
        },
        {
          infoNum: "及格分 >=10",
        },
      ],
    ],


    // --------------------------------------------------makeForm--------------------

    // managementDataList: [], // 模板管理management页面数据
    // createNameDataList: {}, // 创建模板一：createName页面数据

    // 模板管理management页面数据
    managementDataListStore: [
      {
        activeNames: "1", // 默认值，不需要更改
        title: "公共项目",
        comTitleList: ["仰卧起坐"],
      },
      {
        activeNames: "1",
        title: "男生项目",
        comTitleList: ["1000米", "体前屈"],
      },
      {
        activeNames: "1",
        title: "女生项目",
        comTitleList: ["800米"],
      },
    ],

    // 创建模板一：createName页面数据
    createNameDataList: {
      managementNamevalue: "", // 模板名称输入框输入内容
      groupValue: 0, // 分组选择后的分组value
      personValue: 0, //人员选择后的value
      // 所属分组
      groupOption: [
        {
          text: "公共项目",
          value: 0,
        },
        {
          text: "男生项目",
          value: 1,
        },
        {
          text: "女生项目",
          value: 2,
        },
      ],
      personOption: [
        {
          text: "自己",
          value: 0,
        },
      ], // 人员下拉框
      remarkTxt: "", //备注输入内容
    },

    management_groupName_List: [], // 存储模板管理页的group分组
  },
  // //用于监听state的变化的
  // getters: {},
  mutations: {
    setMakeFormDataList(state, makeFormDataList) {
      state.makeFormDataList = makeFormDataList;
    },

    //存储模板管理页的group分组名字
    setManagementGroupNameList(state, managementDataList) {
      state.management_groupName_List = managementDataList;
    },

    setManagementDataList(state, managementDataList) {
      state.managementDataList = managementDataList;
    },

    // 存储createName中的数据
    setCreateNameDataList(state, createNameDataList) {
      state.createNameDataList = createNameDataList;
    },
    // 存储token中的数据
    setToken(state, token) {
      state.token = token;
    },
    //暂时不使用
    // getToken() {
    //   return state.token
    // }

    setElStepsIsShow(state, elStepsIsShow) {
      state.elStepsIsShow = elStepsIsShow;
    },

    //组件内容
    setComponentContent(state, componentContent) {
      state.componentContent = componentContent;
    },
    setTemplateContentSavaOrUpdate(state, templateContentSavaOrUpdate) {
      state.templateContentSavaOrUpdate = templateContentSavaOrUpdate;
    }

  },
  actions: {},
  getters,
  
  modules: {
    echarts: { ...echarts },
    echarts2
  }
})
