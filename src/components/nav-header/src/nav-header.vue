<template>
  <div class="nav-header">
    <el-icon v-if="isFold" class="fold-menu" @click="handleFoldClick">
      <Fold />
    </el-icon>
    <el-icon v-else class="fold-menu" @click="handleFoldClick">
      <Expand />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <div class="user-info">
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  components: {
    Fold,
    Expand,
    UserInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer; // 放上去时，显示小手
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
