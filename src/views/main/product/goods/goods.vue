<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :zoom-rate="1.2"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="4"
          fit="cover"
        />
      </template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
import goods from '@/router/main/product/goods/goods'

export default defineComponent({
  name: 'goods',
  component: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
