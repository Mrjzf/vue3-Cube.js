<template>
  <div class="itemAll">
    <ItemList :itemList="itemList1" showTitle="党务政务" />
    <ItemList :itemList="itemList2" showTitle="宣传文明" />
    <ItemList :itemList="itemList3" showTitle="党性教育" />
    <ItemList :itemList="itemList4" showTitle="特色产业" />
    <ItemList :itemList="itemList5" showTitle="红色基因" />
    <BackBtn />
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue'
import BackBtn from '@/components/BackBtn.vue'

export default {
  name: 'itemAll',
  components: {
    ItemList,
    BackBtn
  },
  data () {
    return {
      itemList1: [
        {
          icon: require('../assets/dw-flfw.png'),
          name: '法律服务'
        },
        {
          icon: require('../assets/dw-flcs.png'),
          name: '法律超市'
        },
        {
          icon: require('../assets/dw-zwgk.png'),
          name: '政务公开'
        },
        {
          icon: require('../assets/dw-dkjz.png'),
          name: '党课讲座'
        },
        {
          icon: require('../assets/dw-dwgk.png'),
          name: '党务公开'
        },
        {
          icon: require('../assets/dw-sb.png'),
          name: '社保'
        },
        {
          icon: require('../assets/dw-yygh.png'),
          name: '医院挂号'
        },
        {
          icon: require('../assets/dw-jtwf.png'),
          name: '交通违法'
        },
        {
          icon: require('../assets/dw-mszc.png'),
          name: '民生政策'
        },
        {
          icon: require('../assets/dw-smbs.png'),
          name: '市民办事'
        },
        {
          icon: require('../assets/dw-zfxfrx.png'),
          name: '政风行风热线'
        },
        {
          icon: require('../assets/dw-wjxx.png'),
          name: '物价信息'
        },
        {
          icon: require('../assets/dw-zgxx.png'),
          name: '招工信息'
        },
        {
          icon: require('../assets/dw-csgj.png'),
          name: '常熟公交'
        },
        {
          icon: require('../assets/dw-spjk.png'),
          name: '视频监控'
        },
        {
          icon: require('../assets/dw-yyxx.png'),
          name: '影院信息'
        },
        {
          icon: require('../assets/dw-lycx.png'),
          name: '旅游出行'
        },
        {
          icon: require('../assets/dw-szds.png'),
          name: '数字电视'
        },
        {
          icon: require('../assets/dw-sdq.png'),
          name: '水电气'
        },
        {
          icon: require('../assets/dw-bmjs.png'),
          name: '部门介绍'
        },
        {
          icon: require('../assets/dw-gzdt.png'),
          name: '工作动态'
        },
        {
          icon: require('../assets/dw-pajs.png'),
          name: '平安建设'
        },
        {
          icon: require('../assets/dw-fzjs.png'),
          name: '法治建设'
        },
        {
          icon: require('../assets/dw-tsgz.png'),
          name: '特色工作'
        },
        {
          icon: require('../assets/dw-jfkx.png'),
          name: '警方快讯'
        }
      ],
      itemList2: [
        {
          icon: require('../assets/xc-dydx.png'),
          name: '党员冬训'
        },
        {
          icon: require('../assets/xc-ddjt.png'),
          name: '道德讲堂'
        },
        {
          icon: require('../assets/xc-sxyjb.png'),
          name: '善行义举榜'
        },
        {
          icon: require('../assets/xc-xjdx.png'),
          name: '先进典型'
        }
      ],
      itemList3: [
        {
          icon: require('../assets/dx-dydx.png'),
          name: '党员冬训(视频)'
        },
        {
          icon: require('../assets/dx-dkjz.png'),
          name: '党课讲座'
        }
      ],
      itemList4: [
        {
          icon: require('../assets/ts-ny.png'),
          name: '农业'
        },
        {
          icon: require('../assets/ts-gy.png'),
          name: '工业'
        },
        {
          icon: require('../assets/ts-lyfz.png'),
          name: '旅游发展'
        },
        {
          icon: require('../assets/ts-wh.png'),
          name: '文化'
        }
      ],
      itemList5: [
        {
          icon: require('../assets/red-hsjt.png'),
          name: '红色讲堂'
        },
        {
          icon: require('../assets/red-lzjyg.png'),
          name: '廉政教育馆'
        }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>

<style lang="stylus">
.itemList {
  margin-top: 20px;
}
</style>
