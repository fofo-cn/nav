<template>
  <div><el-calendar v-model="value" /></div>
</template>

<script lang="ts">
import { Calendar } from "element-ui"
import { Component, Vue, Prop } from "vue-property-decorator"
Vue.use(Calendar)
@Component({ components: {} })
export default class CalendarDialog extends Vue {
  value = new Date()
}
</script>

<style lang="scss" scoped></style>
