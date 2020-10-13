<template>
  <div>
    <button id="btn" @click="clickBtn()">click</button>

    <throttle :time="time" events="click">
      <button id="btn" @click="clickBtn()">click{{ count }}</button>
    </throttle>
  </div>
</template>

<script>
import throttle from "../../util_component/throttle/throttle.vue";
export default {
  data() {
    return {
      count: 1,
      time: 2000,
    };
  },

  components: {
    throttle,
  },
  methods: {
    clickBtn() {
      console.log("他店家了");

      //   setTimeout(() => {
      //   }, 2000);
    },
  },
};
</script>