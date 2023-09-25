import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 30px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      type: 'input',
      label: 'id',
      rules: [],
      placeholder: '请输入id'
    },
    {
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '喜欢的运动',
      rules: [],
      placeholder: '请选择喜欢的运动',
      options: [
        { label: '篮球', value: 'basketball' },
        { label: '足球', value: 'football' }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      placeholder: '请选择创建时间范围',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
