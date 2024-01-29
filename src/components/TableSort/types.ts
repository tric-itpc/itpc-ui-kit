import { SortType } from "../types"

export interface LocalType {
  _index?: string
  id: string
}

export type RowType<T = object> = {
  [key in keyof T]: T[key]
} & LocalType

export type SorterFn<T> = (a: T, b: T) => number

export interface Column<T> {
  isSortable: boolean
  name: keyof T
  sorter?: SorterFn<T>
  title: string
}

export interface ColumnWithIndex {
  _index?: string
  id: string
}

export interface KeySort<T> {
  isSortable: boolean
  name: string
  order: SortType
  sorter: SorterFn<T>
}

export interface KeysSort<T> {
  mainKey?: KeySort<T>
  secondKey?: KeySort<T>
}

export interface SaveOrder {
  _id: string
  index: number
}
