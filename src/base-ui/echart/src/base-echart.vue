<template>
  <div class="base-echar">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'
import { EchartsOption } from 'echarts'

// 定义props
const props = withDefaults(
  defineProps<{
    options: EchartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const echartInstance = echarts.init(echartDivRef.value!)
  echartInstance.setOption(props.options)
})
</script>

<style lang="less" scoped></style>
