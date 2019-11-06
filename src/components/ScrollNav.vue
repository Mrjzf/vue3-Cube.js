<template>
  <div class="scrollNav">
    <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
  </div>
</template>

<script>
export default {
  name: "scrollNav",
  props: {
    current: {
      type: String,
      default: ""
    },
    labels: Array
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    changeHandler(cur) {
      this.$emit("currentItem", cur);
    }
  }
};
</script>

<style lang="stylus">
.cube-scroll-nav-bar_horizontal .cube-scroll-wrapper {
  text-align: left;
}

.cube-scroll-nav-bar-items {
  font-size: 30px;
  color: #666666;
}

.cube-scroll-nav-bar-item_active {
  color: #F25758;
  border-bottom: 4px solid #F25758;
  font-size: 36px;
  padding: 10px 16px;
}
</style>
