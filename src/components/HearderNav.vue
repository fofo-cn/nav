<template>
  <div class="hearder-container">
    <div class="img-wrap">
      <img src="../assets/logo.png" alt="" />
      <span>这是一个正经的导航页</span>
    </div>
    <div class="btn-wrap">
      <el-button type="primary" size="mini" @click="calendar = true">日历</el-button>
      <el-button type="primary" size="mini" @click="computer = true">电脑配置辅助表</el-button>
    </div>
    <el-dialog title="日历" top="10vh" :visible.sync="calendar" :before-close="handleCalendarClose">
      <Calendar />
    </el-dialog>

    <el-dialog
      width="70%"
      title="电脑配置辅助表"
      :visible.sync="computer"
      :before-close="handleComputerClose"
    >
      <Computer />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import Computer from "./Computer.vue"
import Calendar from "./CalendarDialog.vue"
import { Dialog } from "element-ui"
Vue.use(Dialog)
@Component({ components: { Computer, Calendar } })
export default class HearderNav extends Vue {
  calendar = false
  computer = false
  handleCalendarClose() {
    this.calendar = false
  }
  handleComputerClose() {
    this.computer = false
  }
}
</script>

<style lang="scss" scoped>
.hearder-container {
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
  height: 36px;
  background: #fff;
  padding: 4px 8px;
  .btn-wrap {
    line-height: 36px;
    span {
      margin-left: 8px;
      font-weight: normal;
      border: 1px solid $blue;
      font-size: 12px;
      padding: 2px;
      color: #666;
      border-radius: 5px;
      &:hover {
        color: $blue;
      }
    }
  }
  .img-wrap {
    img {
      border-radius: 100%;
      width: 36px;
    }
    span {
      margin-left: 8px;
      font-weight: 600;
      color: #ccc;
    }
  }
}
</style>
