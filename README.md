# （一）项目工程介绍

    physical_ftdp是一个专门为移动端编写的Vue版的框架，使用的VUE3.0的框架，引入的Vant组件库2.2.13版本进行开发

    支持现代浏览器以及 Android 4.0+, iOS 7+

# （二）项目特点

      1.内置拦截器，可以预先拦截http的状态码，进行业务处理

      2.引用 flexible.js ，实现不同屏幕尺寸的移动端，页面内容按比例缩放

      3.内置路由守卫，实现权限控制，不同权限只能访问指定的页面

# （三）项目的基本结构

<!-- npm install mddir -g  -->

<!-- 生成目录结构命令：mddir -->

|-- FTDP-RRONTEND-MOBILE
|-- .browserslistrc  //设置浏览器兼容
|-- .env.development // 配置开发环境
|-- .env.localhost   // 配置本地环境
|-- .env.production  // 配置生产环境
|-- .env.test        // 配置测试环境
|-- .eslintrc.js     // ESlint配置文件
|-- .gitignore       // git配置文件
|-- babel.config.js  // 工具集配置文件
|-- package-lock.json  // 记录npm包具体版本号和来源
|-- package.json       // 所有插件版本
|-- postcss.config.js  // 将xp转为rem文件
|-- README.md          // 使用前读取我，我就是说明书
|-- vue.config.js      //vue项目全局配置文件
|-- public             // 静态文件：包含文件的文件夹直接复制无需webpack打包处理
| |-- favicon.ico
| |-- index.html       // 项目入口
|-- src                // 项目文件
|-- App.vue            // 首页代码（子组件：顶级组件）
|-- main.js            // 入口文件
|-- router.js          // 配置路由文件
|-- setHtmlFontSize.js // 全局修改文件大小文件
|-- store.js           // vuex状态管理器
|-- api                // 调用后端接口文件 
| |-- Authority
| | |-- login.js
|-- assets                // 静态文件
| |-- home
| | |-- checkbox-multiple-fill.png
| | |-- reply_comment.png
| | |-- test.png
| | |-- valculator.png
| |-- login
| | |-- password.png
| | |-- tel.png
| |-- publicAll
| | |-- add.png
| | |-- checkbox_check.png
| | |-- checkbox_round.png
| | |-- circle.png
| | |-- cloud.png
| | |-- load.gif
| | |-- loadFailed.jpg
| | |-- people.png
|-- components             // 组件库文件
| |-- business-com
| | |-- arrayInput_com.vue
| | |-- personInfo_com.vue
| | |-- scoreInfo_com.vue
| | |-- business-component-editing
| | |-- business_array_input.vue
| | |-- business_info_show.vue
| | |-- business_user_info.vue
| |-- drag
| | |-- drag.vue
| |-- home-page
| | |-- more_page_com.vue
| | |-- template-management
| | |-- delete_group_popup.vue
| | |-- swipeCell.vue
| |-- publicAll
| | |-- loadFailedTemplate.vue
| | |-- loadingTemplate.vue
| | |-- myAddBtn.vue
| | |-- myPopup.vue
| | |-- style_withDrawal.vue
| | |-- title_per_page.vue
| | |-- hoverButton
| | | |-- hover_button.vue
| | | |-- index.js
| | |-- Suspended
| | |-- breathing_lamp.vue
| | |-- button_comBination.vue
| | |-- suspended_ball.vue
| | |-- suspended_ball_mobileHide.vue
| | |-- suspended_components.vue
| | |-- suspension-ball.js
| |-- Super
| | |-- dropDownBox.vue
| | |-- popup.vue
| | |-- library
| | | |-- invalidComponents.vue
| | | |-- slidingInformation.vue
| | | |-- enterInformation
| | | | |-- enterInformation.vue
| | | | |-- numberIndex.vue
| | | |-- theMessageStates
| | | | |-- infoShow.vue
| | | | |-- theMessageStates.vue
| | | |-- userInfo
| | | |-- user.vue
| | | |-- userInfo.vue
| | |-- template
| | |-- sidebar.vue
| | |-- siteInfoShow.vue
| | |-- siteNumberIndex.vue
| | |-- siteUser.vue
| | |-- swipeCell.vue
| |-- use-components
| | |-- check_box.vue
| | |-- multi_line_input_box.vue
| | |-- number_input_box.vue
| | |-- Single_box.vue
| | |-- single_line_input_box.vue
| |-- use-template
| | |-- swipeCell.vue
| | |-- up_down_slide.vue
| |-- work-flow
| |-- new-template-flow
| | |-- template-management
| | |-- component-editing
| | | |-- component_business_editing.vue
| | | |-- compont_basic_editing.vue
| | |-- compont_display
| | |-- component_filed.vue
| | |-- component_loading.vue
| |-- people-management-flow
| |-- herry_test.vue
|-- css
| |-- index.css
| |-- reset.css
|-- modules                // 调取组件库文件，调取后端数据文件
|-- subjects               // 调用modules文件，将多个组件组合
|-- tools
| |-- global-method
| | |-- addingAttributesDynamically.js
| | |-- escape.js
| | |-- timer.js
| | |-- toast.js
| |-- regular-expression
| |-- regex.js
| |-- instruction
| |-- v-number-input.js
|-- utils
| |-- clickOutSideDirective.js
| |-- dynamicAxios.js
| |-- responseCode.js
|-- views                // 视图，配置路由，直接调取subjects或者module即可
|-- Authority
| |-- home.vue
| |-- loading.vue
| |-- login.vue

# （四）项目启动命令

    使用本框架需要安装依赖，运行即可

        1. 安装依赖命令： npm install  或者使用 cnpm install 或者使用 yarn install

    项目使用链接地址以及打包地址等参照如下文件：

        1. 开发地址：.env.development

        2. 测试地址：.env.test

        3. 生产地址：.env.production

        4. 本地地址：.env.localhost

    项目运行命令：

        1. 运行开发命令： npm run dev

        2. 运行测试命令： npm run test

        3. 运行生产命令： npm run prod

        4. 运行本地命令： npm run serve

    打包配置文件：vue.config.js

        1. 运行开发打包命令： npm run build_dev

        2. 运行测试打包命令： npm run build_test

        3. 运行生产打包命令： npm run build_prod

        4. 运行本地打包命令： npm run build

# （五）拦截器使用方法

    使用拦截器的目的在于可以快速的根据http返回的状态码预先进行操作，如返回 401 状态码跳转到登录界面，并且还可以对发送的请求进行一些预先处理，如添加 Token验证信息等。

    本项目拦截器对官方axios进行了一层封装，修改了axios请求的地址为具体的项目后台的地址。


        1.设置axios的 baseUrl，用于指定具体的项目地址

          axios.defaults.baseURL = 'http://项目地址:端口号/'


        2.给发送的http请求设置token

           axios.interceptors.request.use(config => {

                config.headers.Authorization= localStorage.getItem("token") //从localstroage中获取token，并添加到http请求的header中

                return config

           }, error => { Promise.reject(error) })

        3. 设置具体的http错误状态码并进行提示
            axios.interceptors.response.use(response => {

                return response//此处表示我们的请求让服务器正确的接收了，并且返回了数据（状态码 200）

            }, error => {

              //此处表示服务器没有正确的处理我们的请求，然后给我们返回了错误的数据信息

              //status 表示 错误的http状态码

              if (!error.response) {

                Notify({ type: 'warning',duration: 1000, message: '服务器出现问题，请稍后重试！' });

                router.push({name: 'login'});

              }
              const status = error.response.status

              switch (status) { // 其他情况补充处理

                case 500:
                    Notify({ type: 'warning', duration: 1000, message: '服务器响应出现问题，请稍后重试！' });
                  break;
                case 400:
                    Notify({ type: 'warning', duration: 1000, message: '服务器无法理解请求参数，请稍后重试！' });
                  break;
                case 401:
                    Notify({ type: 'warning', duration: 1000, message: '访问资源未授权，请登陆后重试！' });
                    router.push({name: 'login'});
                  break;
                case 403:
                    Notify({ type: 'warning', duration: 1000, message: '请求资源暂时不可用，请登陆后重试！' });
                    router.push({name: 'login'});
                  break;
                case 404:
                    Notify({ type: 'warning', duration: 1000, message: '请求资源暂不存在，请稍后重试！' });
                  break;
              }
              return Promise.reject(error)
            }

        4. 使用axios发送请求

           1.发送Get请求
                vm.$axios
                  .get(api地址)
                  .then(res => {
                    if (res.data.code === "0000") {
                        //根据返回的数据，进行相应操作
                    } else if(res.data.code === "2222") {
                      // 跳转到结算界面
                      vm.$router.push({name:'successJumpPage',path:"/successJumpPage",params:{pageName:vm.pageName,pageAddress:vm.pageAddress}});
                    }
                  });



           2.发送post请求

                vm.$axios
                    .post(login, {
                      userCode: this.userName,
                      password: this.password
                    })
                    .then(res => {
                        //根据返回的数据进行相应的操作
                    });

           3.发送delete请求

                vm.$axios
                  .delete(login, {
                      userCode: this.userName,
                      password: this.password
                    })
                    .then(res => {
                        //根据返回的数据进行相应的操作
                    });

# （六）路由守卫使用方法

    使用路由守卫的目的在于可以页面跳转的时候进行一些判断，如当前此账号是否的级别是否可以跳转到某个指定的界面等

    路由守卫一般搭配路由列表使用，这样用户在跳转的页面的时候，就可以方便的判断当前的页面是否允许某个级别的用户跳转

        1.路由守卫判断页面权限

            //路由守卫，当跳转需要 验证权限的界面的时候进行判断

            //to表示 从哪个地址跳转过来的

            //from表示需要跳转的地址

            //next表示执行跳转命令

            router.beforeEach((to, from, next) => {

              //判断登录的界面是否需要验证token

              if (to.meta.requireAuth) {

                //如果需要登录权限，则去store中去拿token

                if (store.state.token) {

                  // 从store中获取到token

                  // 跳转到下一界面

                  next()

                } else {

                  // 没有从store中获取到token

                  // 保存当前请求的路径，先跳转到登录界面，然后登录以后跳转到接下来的界面

                  next({

                    path: '/login',

                    query: {

                      redirect: to.fullPath  //当前保存的路径，用于登陆后重定向到此处

                    }

                  })

                }

              } else {

                next()

              }

            })

# (七) 项目启动顺序：

index.html 的<head>部分 -->app.vue 中 export 外部-->router-->main.js-->app.vue 中 mounted-->index.html 中的 body 中-->登陆页面
