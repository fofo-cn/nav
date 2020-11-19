<template>
  <div>
    <el-input v-model="keyword"></el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({ components: {} })
export default class Home extends Vue {
  keyword = ''
}
</script>

<style lang="scss" scoped></style>
