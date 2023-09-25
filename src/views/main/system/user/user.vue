<!-- 用户管理 -->
<template>
  <div class="user">
    <div class="search">
      <!-- <hy-form
        :formItems="formItems"
        :labelWidth="labelWidth"
        :itemStyle="itemStyle"
        :collLayout="collLayout"
      /> -->
      <hy-form v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IFormItem, IForm } from '@/base-ui/form'
import HyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    // const formItems: IFormItem[] = [
    //   {
    //     type: 'input',
    //     label: 'id',
    //     rules: [],
    //     placeholder: '请输入id'
    //   },
    //   {
    //     type: 'input',
    //     label: '用户名',
    //     rules: [],
    //     placeholder: '请输入用户名'
    //   },
    //   {
    //     type: 'password',
    //     label: '密码',
    //     rules: [],
    //     placeholder: '请输入密码'
    //   },
    //   {
    //     type: 'select',
    //     label: '喜欢的运动',
    //     rules: [],
    //     placeholder: '请选择喜欢的运动',
    //     options: [
    //       { label: '篮球', value: 'basketball' },
    //       { label: '足球', value: 'football' }
    //     ]
    //   },
    //   {
    //     type: 'datepicker',
    //     label: '创建时间',
    //     rules: [],
    //     placeholder: '请选择创建时间范围',
    //     otherOptions: {
    //       startPlaceholder: '开始时间',
    //       endPlaceholder: '结束时间',
    //       type: 'daterange'
    //     }
    //   }
    // ]

    // const labelWidth = '120px'

    // const itemStyle = {
    //   padding: '10px 30px'
    // }

    // const collLayout = {
    //   span: 8
    // }

    return {
      // formItems,
      // labelWidth,
      // itemStyle,
      // collLayout
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
