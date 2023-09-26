export interface IAccount {
  name: string
  password: string
}

// 登录
export interface ILoginResult {
  id: number
  name: string
  token: string
}
