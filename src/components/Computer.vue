<template>
  <main>
    <el-table
      :data="tableData"
      :row-class-name="tableRowClassName"
      border
      style="width: 100%"
      max-height="500px"
      @cell-click="tabClick"
    >
      <el-table-column prop="title" label="指定物件" align="center" width="80"></el-table-column>
      <el-table-column prop="name" label="物件名称" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '物件名称'">
            <el-input
              v-model="scope.row.name"
              maxlength="300"
              placeholder="请输入物件名称"
              size="mini"
              @blur="inputBlur"
            />
          </span>
          <span v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格" width="100px" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '价格'">
            <el-input
              v-model="scope.row.price"
              :blur="inputBlur"
              placeholder="请输入价格"
              size="mini"
              @blur="inputBlur"
            />
          </span>
          <span v-else>{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center" width="380">
        <template slot-scope="scope">
          <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '备注'">
            <el-input
              v-model="scope.row.remark"
              maxlength="300"
              placeholder="请输入备注"
              size="mini"
              @blur="inputBlur"
            />
          </span>
          <span v-else>{{ scope.row.remark }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="footer-button" size="mini" type="primary" @click="showAllPrice">
      查看总价</el-button
    >
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { Table, TableColumn } from "element-ui"
Vue.use(Table).use(TableColumn)
interface tableType {
  row: any
  rowIndex: number
}
@Component
export default class Computer extends Vue {
  tableData = [
    {
      title: "主板",
      name: "",
      price: "",
      remark: ""
    },
    {
      title: "cpu",
      name: "",
      price: "",
      remark: ""
    },
    {
      title: "内存",
      name: "",
      price: "",
      remark: ""
    },
    {
      title: "固态",
      name: "",
      price: "",
      remark: ""
    },
    {
      title: "显卡",
      name: "",
      price: "",
      remark: ""
    },
    {
      title: "电源",
      name: "",
      price: "",
      remark: ""
    },
    {
      title: "机箱",
      name: "",
      price: "",
      remark: ""
    },
    {
      title: "cpu散热",
      name: "",
      price: "",
      remark: ""
    },
    {
      title: "机箱风扇",
      name: "",
      price: "",
      remark: ""
    }
  ]
  tabClickIndex: any = null
  tabClickLabel: string = ""
  tableRowClassName({ row, rowIndex }: tableType) {
    // 把每一行的索引放进row
    row.index = rowIndex
  }
  // 添加明细原因 row 当前行 column 当前列
  tabClick(row: any, column: any, cell: any, event: any) {
    switch (column.label) {
      case "物件名称":
        this.tabClickIndex = row.index
        this.tabClickLabel = column.label
        break
      case "价格":
        this.tabClickIndex = row.index
        this.tabClickLabel = column.label
        break
      case "备注":
        this.tabClickIndex = row.index
        this.tabClickLabel = column.label
        break
      default:
        return
    }
  }
  // 失去焦点初始化
  inputBlur(row: any, event: any, column: any) {
    this.tabClickIndex = null
    this.tabClickLabel = ""
  }
  showAllPrice() {}
}
</script>

<style lang="scss" scoped>
main {
  .footer-button {
    margin-top: 8px;
  }
}
</style>
