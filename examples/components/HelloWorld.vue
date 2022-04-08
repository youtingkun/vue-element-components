<template>
  <div class="hello">
    <ytk-button></ytk-button>
    <count-down></count-down>
  </div>
</template>

<script>
import countDown from "../../packages/count-down/src/count-down.vue";
export default {
  components: { countDown },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
