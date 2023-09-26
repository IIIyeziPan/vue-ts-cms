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
