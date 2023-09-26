<!-- 用户管理 -->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <hy-table :listData="userList" :propList="propList"></hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'

import { searchFormConfig } from './config/search.config'

import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HyTable
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

    const propList = [
      { props: 'name', label: '用户名', minWidth: '100' },
      { props: 'realname', label: '真实姓名', minWidth: '100' },
      { props: 'cellphone', label: '电话号码', minWidth: '100' },
      { props: 'enable', label: '状态', minWidth: '100' },
      { props: 'createAt', label: '创建时间', minWidth: '250' },
      { props: 'updateAt', label: '更新时间', minWidth: '250' }
    ]

    return {
      searchFormConfig,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
