import hyRequest from '@/service'
import { AxiosHeaders } from 'axios'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return hyRequest.get({
    headers: new AxiosHeaders(),
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return hyRequest.get({
    headers: new AxiosHeaders(),
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return hyRequest.get({
    headers: new AxiosHeaders(),
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return hyRequest.get({
    headers: new AxiosHeaders(),
    url: DashboardAPI.addressGoodsSale
  })
}
