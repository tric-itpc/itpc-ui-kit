import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { TableSort, TableSortProps } from "../components/TableSort"
import { Column, RowType } from "../components/TableSort/types"
import { NumberColumns } from "../components/types"

export default {
  component: TableSort,
  title: "Components/TableSort",
} as ComponentMeta<React.FC<TableSortProps<TypeData>>>

interface TypeData extends RowType {
  age: string
  city: string
  duty: string
  id: string
  name: string
}

const dataRows: TypeData[] = [
  { age: "25", city: "Тюмень", duty: "50", id: "1", name: "Сергей" },
  { age: "19", city: "Ишим", duty: "500.02", id: "2", name: "Рома" },
  { age: "9", city: "Тобольск", duty: "1.10", id: "3", name: "Алексей" },
  { age: "19", city: "Тюмень", duty: "250", id: "4", name: "Борис" },
  { age: "35", city: "Тобольск", duty: "51", id: "5", name: "Сергей" },
  { age: "100", city: "Тюмень", duty: "250", id: "6", name: "Яша" },
  { age: "45", city: "Тобольск", duty: "49", id: "7", name: "Сергей" },
  { age: "19", city: "Ишим", duty: "500.02", id: "8", name: "Сергей" },
]

const dataColumnsNoSort: Column<TypeData>[] = [
  {
    isSortable: false,
    name: "id",
    title: "ID",
  },
  {
    isSortable: false,
    name: "name",
    title: "Name",
  },
  {
    isSortable: false,
    name: "city",
    title: "Город",
  },
  {
    isSortable: false,
    name: "age",
    title: "Age",
  },
  {
    isSortable: false,
    name: "duty",
    title: "Duty",
  },
]

const dataColumns: Column<TypeData>[] = [
  {
    isSortable: false,
    name: "id",
    sorter: (a: TypeData, b: TypeData) => Number(a.id) - Number(b.id),
    title: "ID",
  },
  {
    isSortable: true,
    name: "city",
    title: "Город",
  },
  {
    isSortable: true,
    name: "name",
    sorter: (a: TypeData, b: TypeData) => a.name.length - b.name.length,
    title: "Name",
  },
  {
    isSortable: true,
    name: "duty",
    sorter: (a: TypeData, b: TypeData) => Number(a.duty) - Number(b.duty),
    title: "Duty",
  },
  {
    isSortable: true,
    name: "age",
    sorter: (a: TypeData, b: TypeData) => Number(a.age) - Number(b.age),
    title: "Age",
  },
]

const Template: ComponentStory<React.FC<TableSortProps<TypeData>>> = (args) => (
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
