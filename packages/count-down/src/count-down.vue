<template>
  <div class="_base-count-down">
    还剩{{ days }}天{{ hours }}:{{ mins }}:{{ seconds }}
  </div>
</template>
<script>
export default {
  name: "count-down",
  data: () => ({
    days: "0",
    hours: "00",
    mins: "00",
    seconds: "00",
    timer: null,
    curTime: 0,
  }),
  props: {
    // 倒计时时间
    time: {
      type: [Number, String],
      default: 1000,
    },
    // 是否为毫秒
    isMiniSecond: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    duration() {
      const time = this.isMiniSecond
        ? Math.round(+this.time / 1000)
        : Math.round(+this.time);
      return time;
    },
  },
  mounted() {
    this.countDown();
  },
  watch: {
    duration() {
      this.countDown();
    },
  },
  methods: {
    // 格式化时间
    durationFormatter(time) {
      if (!time) return { ss: 0 };
      let t = time;
      const ss = t % 60;
      t = (t - ss) / 60;
      if (t < 1) return { ss };
      const mm = t % 60;
      t = (t - mm) / 60;
      if (t < 1) return { mm, ss };
      const hh = t % 24;
      t = (t - hh) / 24;
      if (t < 1) return { hh, mm, ss };
      const dd = t;
      return { dd, hh, mm, ss };
    },
    countDown() {
      this.curTime = Date.now();
      this.getTime(this.duration);
    },
    getTime(time) {
      this.timer && clearTimeout(this.timer);
      if (time < 0) {
        return;
      }
      const { dd, hh, mm, ss } = this.durationFormatter(time);
      this.days = dd || 0;
      this.hours = hh || 0;
      this.mins = mm || 0;
      this.seconds = ss || 0;
      this.timer = setTimeout(() => {
        const now = Date.now();
        const diffTime = Math.floor((now - this.curTime) / 1000);
        const step = diffTime > 1 ? diffTime : 1;
        this.curTime = now;
        this.getTime(time - step);
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped></style>
