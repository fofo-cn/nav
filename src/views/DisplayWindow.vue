<template>
  <div class="cantainer card">
    <div class="flex1 scroll" v-for="value in list" :key="value.title">
      <h2>{{ value.title }}</h2>
      <div
        class="content link"
        v-for="item in value.data"
        :key="item.Name"
        @click="jumpHandle(item.Url)"
      >
        <div class="img-warp">
          <img :src="item.Icon" alt="" />
        </div>
        <span class="name">{{ item.Name }}</span>
        <span class="showbtton el-icon-arrow-right"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
@Component({ components: {} })
export default class DisplayWindow extends Vue {
  list = [
    {
      title: "前端常用网址",
      data: [
        {
          Name: "GitHub",
          Icon: "https://github.com/fluidicon.png",
          Url: "https://github.com"
        },
        {
          Name: "掘金",
          Icon: "https://b-gold-cdn.xitu.io/favicons/v2/apple-touch-icon.png",
          Url: "https://juejin.im/timeline"
        },
        {
          Name: "leancloud",
          Icon: "https://leancloud.cn/dashboard/images/static/logo.png",
          Url: "https://leancloud.cn/"
        },
        {
          Name: "Vue",
          Icon: "https://cn.vuejs.org//images/logo.png",
          Url: "https://cn.vuejs.org"
        },
        {
          Name: "React",
          Icon: "https://react.docschina.org/logo-180x180.png",
          Url: "https://react.docschina.org"
        },
        {
          Name: "ElementUI",
          Icon: "https://avatars2.githubusercontent.com/u/22293321?s=200&v=4",
          Url: "https://element.eleme.cn/#/zh-CN/component/installation"
        },
        {
          Name: "Vant",
          Icon: "https://img.yzcdn.cn/vant/logo.png",
          Url: "https://youzan.github.io/vant/#/zh-CN/"
        },
        {
          Name: "Ant Design",
          Icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
          Url: "https://ant.design/index-cn"
        },
        {
          Name: "Antd-mobile",
          Icon: "https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png",
          Url: "https://mobile.ant.design/index-cn"
        },
        {
          Name: "Echarts",
          Icon:
            "https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/zh/images/logo.png?_v_=undefined",
          Url: "http://echarts.apache.org/zh/index.html"
        },
        {
          Name: "LeetCode",
          Icon: "https://static.leetcode-cn.com/cn-legacy-assets/images/LeetCode_Sharing.png",
          Url: "https://leetcode-cn.com/"
        },
        {
          Name: "Can I Use",
          Icon: "https://www.caniuse.com/img/favicon-128.png",
          Url: "https://www.caniuse.com/"
        },
        {
          Name: "网道",
          Icon: "https://wangdoc.com/javascript/assets/icons/apple-icon-114x114.png",
          Url: "https://wangdoc.com/javascript/"
        }
      ]
    },
    {
      title: "休闲常用",
      data: [
        {
          Name: "AcFun",
          Icon:
            "https://cdnfile.aixifan.com/static/common/widget/header/img/acfunlogo.11a9841251f31e1a3316.svg",
          Url: "https://www.acfun.cn/"
        },
        {
          Name: "Bilibili",
          Icon: "https://static.hdslb.com/mobile/img/512.png",
          Url: "https://www.bilibili.com/"
        },
        {
          Name: "知乎",
          Icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.67c7b278.png",
          Url: "https://www.zhihu.com/"
        },
        {
          Name: "装备前线",
          Icon:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAAAAAAYplnuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAHdElNRQfgCR4LJziZ1BblAAADSUlEQVR42u3ay0uUURzG8bk5XkecNGSKyLIIzTSEQYtmkRIZaAgVSUjDRNGNjFrYQnLRBSxQ2iRdsKBFhnZZlEwgtFAwmiBcmJCUZpqKpslo5mUcW/9WjxO+nBM9n7/gC/POOe/vnNdkIiIiIiIiIiIiIiIiIiIiIsHmXHF2w6N3/JhYYcHDNqOjPaGllXaU0YxmNKMZzWhGM5rRjGa0ztHhfzA6b2AoAt/HlvHDlBseneo7tny+U89xdI/HbHR0RKwF72HzN1+s6kzBkt8Om0cvJqrOFMyZftgcvJ6iOlNa1wxXmtn6NaorpeSGOdQcakxTXSnF103Dh8OfobpSsl+egM0dbtWVUtSZEdjcVajZAn3oK2zuPWhVnSlYCrth89BJw3fvyLgDsHm8yvhj6YhktMIFeqouTnWllNYE35JmHzhVV0quu7OoefGpZhthSk0QPtCvt+i12CVWjsHmdrdFdaYQd3wANn/Yo9diZz/QA5s/HYxWnSlYCzph8+AJvSYVc24HbB6/5FCdKZs3401lumaV6kzJ9WwBNc/dS1VdKTkbfqPmUPN61ZVSws0p1BxuzVRdKcVWwkklHMhXXSnZfXBSCX/cp7pSspb2wea+I3q9cJh2d8Hm4Qq9XjhMbryp/KzWbFLZ6l9EzTO1CaorpfTH83CBvr9adaW09vYv+HA8SdPrT5hybRI2t2Tp1ey4sIxJZadexzIx3kHY3Fmk16RiK/kCm3vL9FrsLLvgprI0cjpGdaZszn4H3/onq+JVZwrmja3wKGmmNkl1pmx2NcH7ibmHmk0qyfVwUll4sUF1pZR4FU4qoTfZqiuluPNwUlkMeFRXSlHeYdQc7t6vulIyl36Gzf1ezd76C/Hx19g5vTZvU14bvp+o0uvIzrTtJdxU5m8kqa6U0h/BTWXpjmb3E65beFJp3KTXW7+zGt+p+Lfr1Rx/dhw2v/XotdhFl+GL+u5ivZpte/FFfX+5XhOhJb8LLtCjFVGqM2VzVgc8SgpecVisETPweUp4hT8NDHiLSyJXZNyv48Rf+PylCePu9xnNaEYzmtGMZjSjGc1oRjNa/2hHS5tBWoz7wtCak2uQHL2OSoiIiIiIiIiIiIiIiP4DfwC1bImT4O1C+wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0wOS0zMFQxMTozOTo1NiswMjowMCEGRfsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDktMzBUMTE6Mzk6NTYrMDI6MDBQW/1HAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC",
          Url: "https://www.zfrontier.com/"
        },
        {
          Name: "weibo",
          Icon: "https://weibo.com/favicon.ico",
          Url: "https://weibo.com/"
        },
        {
          Name: "今日头条",
          Icon: "https://sf3-dycdn-tos.pstatp.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico",
          Url: "https://www.toutiao.com/"
        },
        {
          Name: "斗鱼",
          Icon:
            "https://img.douyucdn.cn/data/yuba/admin/2018/08/13/201808131555573522222945055.jpg?i=31805464339f469e0d3f992e565e261803",
          Url: "https://react.docschina.org"
        },
        {
          Name: "网易云音乐",
          Icon: "http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg",
          Url: "https://music.163.com/"
        }
      ]
    },
    {
      title: "游戏",
      data: [
        {
          Name: "NGA玩家社区",
          Icon:
            "https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=1941107302,3169979472&fm=85&app=81&f=JPG?w=121&h=75&s=9A84146A77DAAE2535F651B40300900B",
          Url: "https://bbs.nga.cn/"
        },
        {
          Name: "蒸汽平台",
          Icon: "https://store.steampowered.com/favicon.ico",
          Url: "https://store.steampowered.com/"
        }
      ]
    }
  ]
  jumpHandle(url: string) {
    window.open(url)
  }
}
</script>

<style lang="scss" scoped>
.cantainer {
  width: 59%;
  height: 58%;
  position: fixed;
  background: #fff;
  top: 21%;
  left: 50%;
  transform: translateY(-21%);
  transform: translateX(-50%);
  display: flex;
  .flex1 {
    &:nth-child(2) {
      margin: 0 8px;
    }
    h2 {
      text-align: center;
    }
    .content {
      display: flex;
      height: 46px;
      line-height: 46px;
      margin: 8px 0;
      .img-warp {
        flex: 2;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
        img {
          width: 100%;
        }
      }
      .name {
        flex: 12;
      }
      .showbtton {
        flex: 2;
        line-height: 46px;
      }
    }
  }
}
</style>
