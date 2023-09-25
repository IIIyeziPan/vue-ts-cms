<!-- 用户管理 -->
<template>
  <div class="user">
    <!-- <hy-form v-bind="searchFormConfig" :formData="formData" /> -->
    <hy-form v-bind="searchFormConfig" v-model="formData" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IFormItem, IForm } from '@/base-ui/form'
import HyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formData = ref({
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
