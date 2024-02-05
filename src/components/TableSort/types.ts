export enum SortType {
  NONE = "none",
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

export type UseType<T = object> = {
  [key in keyof T]: T[key]
} & {
  id: string
}

export type SorterFn<T> = (a: T, b: T) => number

export interface Column<T> {
  name: keyof T
  title: string
  isSortable: boolean
  sorter?: SorterFn<Omit<T, "_index">>
}

export interface KeysSort<T> {
  name: string
  isSortable: boolean
  order?: SortType
  sorter?: SorterFn<T>
}

export interface SaveKeys<T> {
  mainKey?: KeysSort<T>
  secondKey?: KeysSort<T>
}

export interface SaveOrder {
  index: number
  _id: string
}
