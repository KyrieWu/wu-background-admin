<template>
  <el-card class="box-card" style="height: 100%;width: 100%;overflow: auto;">
    <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
    <el-table style="margin: 10px 0px;" border :data="tradeMarkArr">
      <el-table-column label="序号" width="80px" align="center" type="index">
      </el-table-column>
      <el-table-column label="品牌名称" align="center">
        <template #="{ row, $index }">
          <h1>{{ row.tmName }}</h1>
        </template>
      </el-table-column>
      <el-table-column label="品牌LOGO" align="center">
        <template #="{ row, $index }">
          <img :src="row.logoUrl" style="width: 100px;height: 100px;" />
        </template>
      </el-table-column>
      <el-table-column label="品牌操作" align="center">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" icon="Edit"></el-button>
          <el-button type="primary" size="small" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- pagination -->
    <el-pagination  v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]"
      :background="true" layout="->,prev, pager, next, jumper, sizes, total" :total="total"
      @current-change="getHasTradeMark" @size-change="sizeChange" />
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, nextTick } from 'vue'
import {
  reqHasTradeMark,
  reqAddOrUpdateTrademark,
  reqDeleteTrademark,
} from '@/api/product/trademark'
import type {
  Records,
  TradeMark,
  TradeMarkResponseData,
} from '@/api/product/trademark/type'

let pageNo = ref<number>(1)
let limit = ref<number>(3)
let total = ref<number>(0)
let dialogFormVisible = ref<boolean>(false)

let trademarkParams = reactive<TradeMark>({
  tmName: '',
  logoUrl: '',
})

let tradeMarkArr = ref<Records>([])

const sizeChange = () => {
  getHasTradeMark()
}

onMounted(() => {
  getHasTradeMark()
})


const getHasTradeMark = async (pager = 1) => {
  pageNo.value = pager
  let res: TradeMarkResponseData = await reqHasTradeMark(
    pageNo.value,
    limit.value,
  )
  if (res.code === 200) {
    total.value = res.data.total
    tradeMarkArr.value = res.data.records
  }
}

</script>

<style scoped lang="scss">
</style>