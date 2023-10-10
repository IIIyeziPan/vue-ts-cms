import hyRequest from '../../index'
import { AxiosHeaders } from 'axios'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    headers: new AxiosHeaders(),
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    headers: new AxiosHeaders(),
    url: url
  })
}
