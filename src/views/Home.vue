<template>
  <div class="home">
    <div class="scroll-list-wrap">
      <cube-scroll ref="scroll" :options="scrollOptions" @pulling-down="onPullingDown">
        <!-- banner || 视频 -->
        <div id="banner">
          <cube-slide :data="videoList" :loop="false" :auto-play="false" :showDots="false">
            <cube-slide-item v-for="(item, index) in videoList" :key="index">
              <video
                id="video"
                ref="video"
                :poster="item.image"
                controls
                x5-video-player-fullscreen="false"
                x5-video-orientation="portrait"
                webkit-playsinline
                x-webkit-airplay="true"
                playsinline="true"
              >
                <source :src="item.url" type="video/mp4" />
              </video>
            </cube-slide-item>
          </cube-slide>
        </div>

        <!-- 栏目列表 -->
        <ItemList :itemList="itemList" :isShowAll="true" />

        <!-- 通知公告 -->
        <div id="notice">
          <div class="noticeIcon" @click="golistone">
            <img src="../assets/notice.png" alt />
          </div>
          <div class="noticeMsg">
            <cube-slide :data="noticeList" direction="vertical" :showDots="false">
              <cube-slide-item
                v-for="(item, index) in noticeList"
                :key="index"
                @click.native="goInfo(item, index)"
              >{{item.title}}</cube-slide-item>
            </cube-slide>
          </div>

          <router-link tag="i" to="/listTwo" class="cubeic-arrow"></router-link>
        </div>

        <!-- 分类列表 -->
        <CategoryList :list="newsList" title="沙家浜新闻" />
        <CategoryList :list="newsList" title="沙家浜看点" />
        <CategoryList :list="newsList" title="图文新闻" />
      </cube-scroll>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryList from "@/components/CategoryList.vue";
import ItemList from "@/components/ItemList.vue";

export default {
  name: "home",
  components: {
    ItemList,
    CategoryList
  },
  data() {
    return {
      scrollOptions: {
        scrollbar: false,
        pullDownRefresh: {
          threshold: 60, //	下拉刷新动作的下拉距离阈值
          stop: 40, // 回弹停留的位置
          stopTime: 300, // 刷新成功的文案显示时间
          txt: "刷新成功" // 刷新成功的文案
        }
      },
      videoList: [
        {
          url: "http://122.97.218.162:9391/vod/cs0707202632.mp4",
          // image: require("../assets/banner.png")
          image:
            "https://marketing.chsvision.com/res/voteResource/picture/pic_715_558_1.jpg"
        }
      ],
      itemList: [
        {
          icon: require("../assets/xc-ddjt.png"),
          name: "道德讲堂"
        },
        {
          icon: require("../assets/dw-jtwf.png"),
          name: "交通违法"
        },
        {
          icon: require("../assets/dx-dkjz.png"),
          name: "党课讲座"
        },
        {
          icon: require("../assets/dw-zfxfrx.png"),
          name: "政风行风热线"
        },
        {
          icon: require("../assets/red-lzjyg.png"),
          name: "廉政教育馆"
        },
        {
          icon: require("../assets/xc-sxyjb.png"),
          name: "善行义举榜"
        },
        {
          icon: require("../assets/ts-lyfz.png"),
          name: "旅游发展"
        }
      ],
      noticeList: [
        {
          title: "1、习近平：在常学常新中加强理论修养 在知行合一中主动担当作为"
        },
        {
          title: "2、习近平：在常学常新中加强理论修养 在知行合一中主动担当作为"
        },
        {
          title: "3、习近平：在常学常新中加强理论修养 在知行合一中主动担当作为"
        }
      ],
      newsList: [
        {
          title: "党中央总体规划（2016-2030） 批前公示",
          poster: require("../assets/poster.png"),
          type: "info",
          categoryName: "党建动态1",
          time: "08月01日"
        },
        {
          title: "唐市中学举行“法律伴我行”主题 班会",
          poster: require("../assets/poster.png"),
          type: "info",
          categoryName: "党建动态2",
          time: "08月02日"
        },
        {
          title: "各基层党组织学习“四讲四有”事 迹报告会",
          poster: require("../assets/poster.png"),
          type: "video",
          categoryName: "党建动态3",
          time: "08月03日"
        }
      ]
    };
  },
  methods: {
    onPullingDown() {
      console.log("更新中...");

      setTimeout(() => {
        this.$refs.scroll.forceUpdate();
      }, 2000);
    },
    golistone() {
      this.$router.push({
        path: "/listOne",
        query: {
          id: 0
        }
      });
    },
    goInfo(item, index) {
      console.log(item, index);
      this.$router.push({
        path: "/info",
        query: {
          id: index
        }
      });
    }
  },
  computed: {}
};
</script>

<style lang="stylus">
.scroll-list-wrap {
  height: 100vh;
}

// 刷新成功提示文字样式
.cube-pulldown-loaded span {
  font-size: 26px;
}

.cube-loading-spinners {
  width: 2em !important;
  height: 2em !important;
}

#banner {
  width: 100%;
  height: 422px;

  video {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
}

#notice {
  width: 100%;
  height: 130px;
  background-color: #fff;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;

  .noticeIcon {
    width: 64px;
    height: 68px;
  }

  .noticeMsg {
    width: 540px;
    height: 64px;
    margin: 0 30px;
    overflow: hidden;

    .cube-slide-item {
      width: 100%;
      height: 100%;
      white-space: normal;
      font-size: 28px;
      color: #666;
      line-height: 34px;
      text-align: left;
    }
  }

  i {
    font-size: 38px;
    color: #666;
  }
}
</style>
