<template>
  <div class="videoBox">
    <video
      id="liveVideo"
      ref="video"
      :poster="videoPoster"
      controls
      x5-video-player-fullscreen="false"
      x5-video-orientation="portrait"
      webkit-playsinline
      x-webkit-airplay="true"
      playsinline="true"
      src
    >
      <source src type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      assetId: "",
      assetName: "",
      videoPoster: ""
    };
  },
  mounted() {
    // this.assetId = this.$route.query.assetId;
    this.videoPoster =
      "https://marketing.chsvision.com/res/voteResource/picture/pic_715_558_1.jpg";
    this.$refs.video.src = "http://122.97.218.162:9391/vod/cs0707202632.mp4";
  },
  computed: {},
  methods: {},
  activated() {},
  filters: {
    imgUrl(v1) {
      return "https://marketing.chsvision.com" + v1;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.videoBox {
  width: 100%;
  height: 30vh;
}
.videoBox video {
  width: 100%;
  height: 100%;
}
</style>
