<template>
  <div class="nav-header">
    <el-icon v-if="isFold" class="fold-menu" @click="handleFoldClick">
      <Fold />
    </el-icon>
    <el-icon v-else class="fold-menu" @click="handleFoldClick">
      <Expand />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Fold,
    Expand
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
  .fold-menu {
    font-size: 30px;
    cursor: pointer; // 放上去时，显示小手
  }
}
</style>
