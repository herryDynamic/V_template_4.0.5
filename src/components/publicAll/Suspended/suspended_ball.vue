<template>
  <transition>
    <div
      ref="breathing_lamp"
      class="breathing_lamp"
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
      default: ""
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

  methods: {
    // 点击小球事件
    onclick() {
      console.log("I am a small clouds");
    },

    // 开始移动方法
    handleTouchStart() {
      this.startToMove = true;
      this.$refs.breathing_lamp.style.transition = "none";
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
        this.left = this.clientW - this.itemWidth - 30; //距边30px
        this.handleIconY();
      }
      this.$refs.breathing_lamp.style.transition = "all .3s";
    },

    // 上下不贴边方法
    handleIconY() {
      if (this.top < 0) {
        this.top = 30; //不上帖上边所以设置为30 没设置0
      } else if (this.top + this.itemHeight > this.clientH) {
        this.top = this.clientH - this.itemHeight - 30; //距边30px
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.breathing_lamp {
  border: 1px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 50%;
  right: 0%;
  z-index: 1024;
  background: url("../../../assets/publicAll/cloud.png") no-repeat center center;
  background-size: 100% 100%; // 背景图片适应外边框大小
}
</style>