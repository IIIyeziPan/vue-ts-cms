<!-- 用户管理 -->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IFormItem, IForm } from '@/base-ui/form'
import HyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
import { Refresh, Search } from '@element-plus/icons-vue'

import PageSearch from '@/components/page-search'

export default defineComponent({
  name: 'user',
  components: {
    HyForm,
    Refresh,
    Search,
    PageSearch
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
