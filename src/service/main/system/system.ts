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

export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    headers: new AxiosHeaders(),
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    headers: new AxiosHeaders(),
    url: url,
    data: editData
  })
}
