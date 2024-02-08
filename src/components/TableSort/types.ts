export enum SortType {
  ASCENDING = "ascending",
  DESCENDING = "descending",
  NONE = "none",
}

export type RowType<T = object> = {
  [key in keyof T]: T[key]
} & {
  id: string
}

export type SorterFn<T> = (a: T, b: T) => number

export interface Column<T> {
  isSortable: boolean
  name: keyof T
  sorter?: SorterFn<T>
  title: string
}

export interface KeySort<T> {
  isSortable: boolean
  name: string
  order?: SortType
  sorter?: SorterFn<T>
}
