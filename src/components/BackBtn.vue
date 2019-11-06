<template>
  <div class="back" @click="back()">
    <div class="cubeic-back"></div>
    <div>返回上级</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus">
.back {
  position: fixed;
  right: 0;
  bottom: 80px;
  background: rgba(235, 65, 61, 0.8);
  color: #fff;
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  padding: 18px 10px;
  box-sizing: border-box;
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
  z-index :999;

  div {
    margin: 0 6px;
  }
}
</style>
