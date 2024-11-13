import { Meta, StoryObj } from "@storybook/react"

import { NumberColumns } from "../../../enums"
import { TableSort } from "../../index"

import { Column } from "./types"

interface RowType {
  city: string
  id: string
  population: string
}

const meta: Meta<typeof TableSort> = {
  component: TableSort,
  title: "Content/TableSort",
}

export default meta

type Story = StoryObj<typeof TableSort>

const dataRows: RowType[] = [
  { city: "Тюмень", id: "1", population: "861 098" },
  { city: "Ишим", id: "2", population: "64 011" },
  { city: "Тобольск", id: "3", population: "102 000" },
]

const dataColumnsNoSort: Column<RowType>[] = [
  {
    isSortable: false,
    name: "id",
    title: "ID",
  },
  {
    isSortable: false,
    name: "city",
    title: "Город",
  },
  {
    isSortable: false,
    name: "population",
    title: "Население",
  },
]

const dataColumns: Column<RowType>[] = [
  {
    isSortable: false,
    name: "id",
    sorter: (a: RowType, b: RowType) => Number(a.id) - Number(b.id),
    title: "ID",
  },
  {
    isSortable: true,
    name: "city",
    title: "Город",
  },
  {
    isSortable: true,
    name: "population",
    sorter: (a: RowType, b: RowType) =>
      Number(a.population.replace(/\s+/g, "")) -
      Number(b.population.replace(/\s+/g, "")),
    title: "Население",
  },
]

export const Basic: Story = {
  args: {
    columns: dataColumnsNoSort,
    rows: dataRows,
  },
  name: "Базовый",
}

export const SortByOneColumns: Story = {
  args: {
    ...Basic.args,
    columns: dataColumns,
    sortByNumberColumns: NumberColumns.ONE,
  },
  name: "Сортировка по одному столбцу",
}

export const SortByTwoColumns: Story = {
  args: {
    ...Basic.args,
    columns: dataColumns,
    sortByNumberColumns: NumberColumns.TWO,
  },
  name: "Сортировка по двум столбцам",
}
