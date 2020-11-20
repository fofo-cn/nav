<template>
  <div id="app">
    <transition name="fade">
      <div class="lottie" v-if="showLottie">
        <div class="animation-style" ref="animation"></div>
      </div>
    </transition>
    <div>
      <div class="img-wrap">
        <img src="./assets/bg1.jpg" alt="" class="img-content" />
      </div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
  </div>
</template>

<script>
import * as animationData from "./assets/loading.json"
import lottie from "lottie-web"
import loading from "./assets/loading.json" // 导入json包
export default {
  name: "app",
  components: {},
  data() {
    return {
      defaultOptions: { animationData: animationData },
      anim: {},
      showLottie: true
    }
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loading //动画json
    })
    setTimeout(() => {
      this.anim.stop()
      this.showLottie = false
    }, 50)
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-width: 1200px;
  .lottie {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background: #fff;
    display: flex;
    .animation-style {
      width: 28%;
      margin-left: 50%;
      transform: translateX(-50%);
      align-self: center;
    }
  }
  .img-wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    .img-content {
      width: 100vw;
      height: 100vh;
    }
  }
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 1s;
}
</style>
