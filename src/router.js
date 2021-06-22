import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({

  // base说明：启动后地址http://localhost:8081/physical_ftdp#/  和  http://localhost:8081/#/ 都可以
  base: "/physical_ftdp",
  routes: [
    {
      path: "/loading",
      name: "loading",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/views/Authority/loading.vue"),
      meta: {
        // keepAlive: true,
        title: "loading",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
    },
    {
      path: "/login",
      name: "login",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/views/Authority/login.vue"),
      meta: {
        // keepAlive: true,
        title: "登陆",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
      beforeEnter: (to, from, next) => {
        if (from.name != "loading") {
          next({ path: "/" })
        } else {
          next()
        }
      }
    },
    {
      path: "/Echarts",
      name: "Echarts",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/views/SZYL/Echarts.vue"),
      meta: {
        // keepAlive: true,
        title: "Echarts",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
    },
    {
      path: "/throttleTest",
      name: "throttleTest",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/views/herry/throttleTest.vue"),
      meta: {
        // keepAlive: true,
        title: "ceshi ",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
    },
    {
      path: "/xmTest",
      name: "xmTest",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/views/herry/xmTest.vue"),
      meta: {
        // keepAlive: true,
        title: "xm ",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
    },

    {
      path: "/websocket",
      name: "websocket",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/views/herry/websocketTest.vue"),
      meta: {
        // keepAlive: true,
        title: "websocket",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
    },

    {
      path: "/websocket_son1",
      name: "websocket_son1",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/yzl_com/websocket_son1.vue"),
      meta: {
        // keepAlive: true,
        title: "websocket",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
    },
    {
      path: "/websocket_txy_test",
      name: "websocket_txy_test",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/views/herry/websocket_txy_test.vue"),
      meta: {
        // keepAlive: true,
        title: "websocket_txy_test",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
    },
    {
      path: "/1",
      name: "websocket_txy_local",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/views/herry/websocket_txy_local.vue"),
      meta: {
        // keepAlive: true,
        title: "websocket_txy_local",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
    },

    
    {
      path: "/sockJS",
      name: "sockJS",
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../src/views/herry/sockJS.vue"),
      meta: {
        // keepAlive: true,
        title: "sockJS",
        // requireAuth: true // 当有这个字段的时候,我们就认为这个路由页面是要有登录权限的
      },
    },



  ],
});

// 路由钩子
// 先判断不可以通过修改路由而进入页面
// 然后判断没有登陆不可以进入（登陆后将logIn=0）
// router.beforeEach((to, from, next) => {
//   // 当前的路由name
//   var fromRoutes = ["library", "management", "setting", "createName", "makeForm", "ruleSetting", "ruleTemplate"];
//   // 需要去的路由name(存放正常的页面)
//   var toRoutes = ["library", "management", "setting", "createName", "makeForm", "ruleSetting", "ruleTemplate"];

//   // 如果等于-1表示没有存储上面两个数组中
//   if (toRoutes.indexOf(to.name) !== -1) {
//     let fromName = window.location.hash  // 获取当前路由后面的地址 
//     fromName = fromName.slice(2) // 去掉 “/# ”

//     // // 如果当前路径名字不是当前名字（意味着通过修改路径名字进行访问），则直接进入到登陆页面
//     // // 目的解决：下拉刷新也会跳转，手动输入路由也会跳转
//     // if (from.name != fromName) {
//     //   next({ path: '/', }); // 跳转登陆
//     // }

//     // 获取登陆存储的值，如果为0表示可以进行输入路由跳转，否则不可以跳转
//     // 目的解决不是从登陆跳回登陆
//     const a = sessionStorage.getItem("login-successful")
//     if (a == "0") {
//       next(); // 继续执行
//       return;
//     } else {
//       next({ path: '/', }); // 跳转登陆
//       return;
//     }
//   }
//   else {
//     next();
//     return;
//   }

// });

export default router;
