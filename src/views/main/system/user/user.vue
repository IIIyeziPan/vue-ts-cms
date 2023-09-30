<!-- 用户管理 -->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <hy-table
        :listData="userList"
        :title="title"
        :propList="propList"
        :showIndexColum="showIndexColum"
        :showSelectColum="showSelectColum"
      >
        <!-- 1.header中的插槽 -->
        <template #headerHandler>
          <el-button type="primary" size="small"> 新建用户 </el-button>
        </template>

        <!-- 2.列中的插槽 -->
        <template #status="scope">
          <el-button
            plain
            size="default"
            :type="scope.row.enable ? 'success' : 'danger'"
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handler>
          <div class="handle-btns">
            <el-button size="default" type="primary" link>
              <el-icon>
                <Edit />
              </el-icon>
              编辑
            </el-button>
            <el-button size="default" type="primary" link>
              <el-icon>
                <Delete />
              </el-icon>
              删除
            </el-button>
          </div>
        </template>
        <template #header></template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { Edit, Delete, Refresh } from '@element-plus/icons-vue'

import { searchFormConfig } from './config/search.config'

import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HyTable,
    Edit,
    Delete,
    Refresh
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

    const title = '用户列表'

    const userList = computed(() => store.state.system.useList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '电话号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      { label: '操作', minWidth: '120', slotName: 'handler' }
    ]

    const showIndexColum = true
    const showSelectColum = true

    return {
      searchFormConfig,
      userList,
      title,
      userCount,
      propList,
      showIndexColum,
      showSelectColum
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}

.handle-btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
