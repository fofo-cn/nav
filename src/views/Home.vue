<template>
  <div class="main">
    <hearder-nav />
    <div class="container">
      <div class="search-warp">
        <el-input
          placeholder="请输入内容"
          v-model="keyword"
          class="input-with-select"
          @change="searchHandle"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option
              v-for="data in enginesList"
              :key="data.label"
              :value="data.value"
              :label="data.label"
            >
              <span style="float:left">{{ data.label }}</span>
              <i :class="data.icon" style="float:right"></i>
            </el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="searchHandle"></el-button>
        </el-input>
      </div>
    </div>
    <display-window />
  </div>
</template>

<script lang="ts">
import { Option, Select } from "element-ui"
import { Component, Vue, Prop } from "vue-property-decorator"
import HearderNav from "../components/HearderNav.vue"
import DisplayWindow from "./DisplayWindow.vue"
Vue.use(Select).use(Option)
@Component({ components: { DisplayWindow, HearderNav } })
export default class Home extends Vue {
  keyword = ""
  select = "baidu"
  enginesList = [
    { label: "百度", value: "baidu", icon: "iconfont iconbaidu" },
    { label: "谷歌", value: "Google", icon: "iconfont icongoogle" },
    { label: "必应", value: "bing", icon: "iconfont iconbing" }
  ]
  searchHandle() {
    let hash = {
      baidu: "http://www.baidu.com/s?wd=",
      Google: "https://www.google.com.hk/search?q=",
      bing: "https://cn.bing.com/search?q="
    }
    window.open(hash[this.select] + this.keyword)
  }
}
</script>

<style lang="scss" scoped>
.main {
  min-width: 1200px;
  .container {
    .search-warp {
      width: 60%;
      position: fixed;
      top: 15%;
      left: 50%;
      transform: translateY(-15%);
      transform: translateX(-50%);
    }
  }
}
</style>
<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
