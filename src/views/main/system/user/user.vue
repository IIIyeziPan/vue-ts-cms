<!-- 用户管理 -->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'

import { searchFormConfig } from './config/search.config'

import PageSearch from '@/components/page-search'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.useList)
    const userCount = computed(() => store.state.system.userCount)

    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
