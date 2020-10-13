<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
const throttle = function (fn, wait = 50, ctx) {
  let timer;
  let lastCall = 0;
  return function (...params) {
    const now = new Date().getTime();
    if (now - lastCall < wait) return;
    lastCall = now;
    fn.apply(ctx, params);
  };
};
export default {
  name: "throttle",
  abstract: true,
  props: {
    time: Number,
    events: String,
  },
  created() {
    this.eventKeys = this.events.split(",");
    this.originMap = {};
    this.ghrottleMap = {};
  },

  render(h) {
    const vnode = this.$slots.default[0];
    this.eventKeys.forEach((key) => {
      const target = vnode.data.on[key];
      if (target === this.originMap[key] && this.throttleMap[key]) {
        vnode.data.on[key] = this.throttleMap[key];
      } else if (target) {
        this.originMap[key] = target;
        this.throttleMap[key] = throttle(target, this.time, vnode);
        vnode.data.on[key] = this.throttleMap[key];
      }
    });
    return vnode;
  },
};
</script>