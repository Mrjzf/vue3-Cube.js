<template>
  <div class="info">
    <div class="title">今日油价再次上调0.07元，老百姓直呼吃不消!</div>
    <div class="type-time">
      <span>沙家浜资讯</span>
      <span>2018-04-14 16:45</span>
    </div>
    <div class="content">
      油价调控周期是多久？按目前成品油定价机制，油价调控是每10天一次。
      加油优惠季 每升优惠4毛钱原油投资-15最佳暴利投机不懂交易？去原油模拟交易原油行情分析软件实时更新成品油定价新机制一是将成品油调价周期由22个工作日缩短至10个工作日；二是取消挂靠国际市场油种平均价格波动4%的调价幅度限制；三是适当调整国内成品油价格挂靠的国际市场。
    </div>

    <BackBtn />
  </div>
</template>

<script>
import BackBtn from "@/components/BackBtn.vue";
export default {
  name: "info",
  components: {
    BackBtn
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="stylus">
.info {
  background-color: #fff;
  text-align: left;
  padding: 50px 30px;

  .title {
    font-size: 48px;
    color: #212121;
    font-weight: bold;
    line-height: 56px;
  }

  .type-time {
    font-size: 28px;
    color: #999;
    margin: 40px 0 64px 0;

    span {
      margin-right: 20px;
    }
  }

  .content {
    color: #212121;
    font-size: 30px;
    line-height: 60px;
  }
}
</style>