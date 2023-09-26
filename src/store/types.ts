import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

// 交叉类型，同时拥有IRootState和IRootWithModule的类型
export type IStoreType = IRootState & IRootWithModule
