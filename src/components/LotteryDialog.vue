<template>
  <div>
    <div class="flex-between" style="margin-bottom:8px">
      <el-button type="primary" @click="addGrandHandle">大乐透+1</el-button>
      <div>
        {{ grandLottoList }}
      </div>
    </div>
    <div class="flex-between">
      <el-button type="primary" @click="addTwoColorHandle">双色球+1</el-button>
      <div>
        {{ twoColorList }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Calendar } from "element-ui"
import { Component, Vue, Prop } from "vue-property-decorator"
Vue.use(Calendar)
@Component({ components: {} })
export default class LotteryDialog extends Vue {
  grandLottoList: string = ""
  twoColorList: string = ""
  firstGrandLotto = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35
  ]
  endGrandLotto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  firstTowColor = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33
  ]
  endTwoColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  addGrandHandle() {
    let red = this.getRandomArrayElements(this.firstGrandLotto, 5).sort()
    let blue = this.getRandomArrayElements(this.endGrandLotto, 2).sort()
    this.grandLottoList = [...red, "+", ...blue].join(",")
  }
  addTwoColorHandle() {
    let red = this.getRandomArrayElements(this.firstTowColor, 6).sort()
    let blue = this.getRandomArrayElements(this.endTwoColor, 1).sort()
    this.twoColorList = [...red, "+", ...blue].join(",")
  }
  getRandomArrayElements(arr: number[], count: number) {
    var shuffled = arr.slice(0),
      i = arr.length,
      min = i - count,
      temp,
      index
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random())
      temp = shuffled[index]
      shuffled[index] = shuffled[i]
      shuffled[i] = temp
    }
    return shuffled.slice(min)
  }
}
</script>

<style lang="scss" scoped></style>
