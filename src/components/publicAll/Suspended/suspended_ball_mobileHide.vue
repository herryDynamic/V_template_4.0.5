<template>
  <transition>
    <div
      ref="dragIcon"
      class="dragIcon"
      @click="onclick()"
      @touchstart.stop="handleTouchStart"
      @touchmove.prevent.stop="handleTouchMove($event)"
      @touchend.stop="handleTouchEnd"
      :style="{left: left + 'px',top: top + 'px',width: itemWidth + 'px',height: itemHeight + 'px'}"
      v-text="text"
      v-if="isShow"
    >{{text}}</div>
  </transition>
</template>

<script>
export default {
  props: {
    // 球名字默认：“球”
    text: {
      type: String,
      default: "ball"
    },
    // 球宽度默认：“40”
    itemWidth: {
      type: Number,
      default: 40
    },
    // 球高度默认：“40”
    itemHeight: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      left: 0, // 距离左边距离
      top: 0, // 距离抬头距离
      startToMove: false, // 开始移动时候不显示
      isShow: true, // 组件是否显示
      timer: null, // 定时器
      currentTop: null, // 获取当前页面的滚动条纵坐标位置
      clientW: document.documentElement.clientWidth, //视口宽
      clientH: document.documentElement.clientHeight //视口高
    };
  },
  created() {
    // 初始化定义距离四周距离
    this.left = this.clientW - this.itemWidth - 30;
    this.top = this.clientH / 2 - this.itemHeight / 2;
  },
  mounted() {
    this.bindScrollEvent(); // 添加windows监听，解决页面移动过程中不显示小球
  },
  beforeDestroy() {
    // 记得销毁一些全局的的事件
    this.removeScrollEvent(); // 销毁此监听
  },
  methods: {
    // 点击小球事件
    onclick() {
      console.log("I am a small ball");
    },

    // 开始移动方法
    handleTouchStart() {
      this.startToMove = true;
      this.$refs.dragIcon.style.transition = "none";
    },

    // 移动中方法
    handleTouchMove(e) {
      const clientX = e.targetTouches[0].clientX; //手指相对视口的x
      const clientY = e.targetTouches[0].clientY; //手指相对视口的y
      const isInScreen =
        clientX <= this.clientW &&
        clientX >= 0 &&
        clientY <= this.clientH &&
        clientY >= 0;
      if (this.startToMove && e.targetTouches.length === 1) {
        if (isInScreen) {
          this.left = clientX - this.itemWidth / 2;
          this.top = clientY - this.itemHeight / 2;
        }
      }
    },

    // 移动结束方法
    handleTouchEnd() {
      if (this.left < this.clientW / 2) {
        this.left = 30; //不让贴边 所以设置30没设置0
        this.handleIconY();
      } else {
        this.left = this.clientW - this.itemWidth - 30; //不让贴边 所以减30
        this.handleIconY();
      }
      this.$refs.dragIcon.style.transition = "all .3s";
    },

    // 上下不贴边方法
    handleIconY() {
      if (this.top < 0) {
        this.top = 30; //不上帖上边所以设置为30 没设置0
      } else if (this.top + this.itemHeight > this.clientH) {
        this.top = this.clientH - this.itemHeight - 30; //不让帖下边所以减30
      }
    },

    bindScrollEvent() {
      // 添加windows句柄，监听函数
      window.addEventListener("scroll", this.handleScrollStart);
    },
    removeScrollEvent() {
      // 移除监听
      window.removeEventListener("scroll", this.handleScrollStart);
    },

    //
    handleScrollStart() {
      this.isShow = false;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.handleScrollEnd();
      }, 300);
      this.currentTop =
        //要获取当前页面的滚动条纵坐标位置：
        // IE：ocument.documentElement.scrollTop
        // chrome:document.body.scrollTop
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    handleScrollEnd() {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 判断是否停止滚动的条件
      if (this.scrollTop == this.currentTop) {
        this.isShow = true;
      }
    }
  }
};
</script>

<style scoped>
.dragIcon {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: orange;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
/* .v-enter {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
} */
</style>