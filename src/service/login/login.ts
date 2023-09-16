import hyRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

import { AxiosHeaders } from 'axios'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    headers: new AxiosHeaders(),
    url: LoginAPI.AccountLogin,
    data: account
  })
}
