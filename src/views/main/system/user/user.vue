<!-- 用户管理 -->
<template>
  <div class="user">
    <div class="search">
      <hy-form v-bind="searchFormConfig" :formData="formData" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { IFormItem, IForm } from '@/base-ui/form'
import HyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
