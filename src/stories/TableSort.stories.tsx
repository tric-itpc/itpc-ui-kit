import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { TableSort, TableSortProps } from "../components/TableSort"
import { NumberColumns } from "../components/types"

interface RowType {
  city: string
  population: string
  id: string
}

export default {
  component: TableSort,
  title: "Components/TableSort",
} as ComponentMeta<React.FC<TableSortProps<RowType>>>

const dataRows: RowType[] = [
  { city: "Тюмень", population: "861 098", id: "1" },
  { city: "Ишим", population: "64 011", id: "2" },
  { city: "Тобольск", population: "102 000", id: "3" },
]

const dataColumnsNoSort = [
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

const dataColumns = [
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

const Template: ComponentStory<React.FC<TableSortProps<RowType>>> = (args) => (
  <TableSort {...args} rows={dataRows} />
)

export const Basic = Template.bind({})
Basic.args = {
  columns: dataColumnsNoSort,
}

export const TableSortOneColumns = Template.bind({})
TableSortOneColumns.args = {
  columns: dataColumns,
  sortByNumberColumns: NumberColumns.ONE,
}

export const TableSortTwoColumns = Template.bind({})
TableSortTwoColumns.args = {
  columns: dataColumns,
  sortByNumberColumns: NumberColumns.TWO,
}
