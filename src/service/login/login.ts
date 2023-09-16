import hyRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

import { AxiosHeaders } from 'axios'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法：/users/1
  UserMenus = '/role/' // 用法：role/1/menu
}

// 用户登录
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    headers: new AxiosHeaders(),
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 查询某个用户
export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    headers: new AxiosHeaders(),
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

// 查询菜单树
export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    headers: new AxiosHeaders(),
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
