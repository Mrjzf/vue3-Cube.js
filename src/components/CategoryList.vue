<template>
  <div class="categoryList">
    <!-- 头部标题&更多 -->
    <div class="listHead" v-show="title==''?false:true">
      <div class="categoryName">{{title}}</div>
      <div class="more">
        <span @click="more">更多</span>
        <i class="cubeic-arrow"></i>
      </div>
    </div>

    <ul class="listBox">
      <li v-for="(item,index) in list" :key="index" @click="goInfo">
        <div class="list-left">
          <div class="list-title">{{item.title}}</div>
          <div class="list-other">
            <span class="videoCornerMark" v-show="item.type=='video'?true:false">视频</span>
            <span class="list-type">{{item.categoryName}}</span>
            <span class="list-time">{{item.time}}</span>
          </div>
        </div>
        <div class="list-right">
          <img :src="item.poster" alt />
          <div class="videoIcon" v-show="item.type=='video'?true:false"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    list: Array,
    title: {
      type: String,
      default: ""
    }
  },
  created() {},
  mounted() {},
  methods: {
    more() {
      this.$router.push({
        path: "/listOne",
        query: {
          id: 0
        }
      });
    },
    goInfo() {
      this.$router.push({
        path: "/info",
        query: {
          id: 0
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.categoryList {
  width: 100%;
  margin-top: 20px;
  background-color: #fff;

  .listHead {
    width: 100%;
    height: 88px;
    padding: 0 30px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .categoryName {
      color: #444444;
      font-weight: bold;
      font-size: 34px;
    }

    .more {
      font-size: 24px;
      color: #bbb;

      span {
        margin-right: 20px;
      }
    }
  }

  .listBox {
    width: 100%;

    li {
      width: 100%;
      height: 208px;
      border-bottom: 1px solid #eee;
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;

      .list-left {
        width: 420px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .list-title {
          height: 66px;
          color: #444444;
          font-size: 30px;
          font-weight: bold;
          text-align: left;
          line-height: 42px;
        }

        .list-other {
          color: #999999;
          font-size: 26px;
          display: flex;
          align-items: center;

          span {
            margin-right: 20px;
          }

          span:first-child {
            display: inline-block;
            border: 1px solid #212121;
            border-radius: 6px;
            padding: 6px 6px 4px;
          }
        }
      }

      .list-right {
        width: 220px;
        height: 100%;
        position: relative;
        border-radius: 6px;
        overflow: hidden;

        .videoIcon {
          width: 64px;
          height: 64px;
          background: url('../assets/icon-video.png') no-repeat;
          background-size: 100% 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-32px, -32px);
        }
      }
    }
  }
}
</style>
