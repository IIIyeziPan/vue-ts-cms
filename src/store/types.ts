import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

// 交叉类型，同时拥有IRootState和IRootWithModule的类型
export type IStoreType = IRootState & IRootWithModule
