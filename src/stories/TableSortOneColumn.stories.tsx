import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import {
  TableSortOneColumn,
  TableSortOneColumnProps,
} from "../components/TableSort/TableSortOneColumn"
import { Column, RowType } from "../components/TableSort/types"

export default {
  component: TableSortOneColumn,
  title: "Components/TableSortOneColumn",
} as ComponentMeta<React.FC<TableSortOneColumnProps<TypeData>>>

interface TypeData extends RowType {
  age: string
  duty: string
  id: string
  name: string
}

const dataRows: TypeData[] = [
  { age: "35", duty: "50", id: "1", name: "Сергей" },
  { age: "42", duty: "500.02", id: "2", name: "Рома" },
  { age: "18", duty: "1.10", id: "3", name: "Алексей" },
  { age: "9", duty: "250", id: "4", name: "Борис" },
  { age: "100", duty: "250.02", id: "5", name: "Яша" },
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
    name: "name",
    title: "Name",
  },
  {
    isSortable: true,
    name: "age",
    sorter: (a: TypeData, b: TypeData) => Number(a.age) - Number(b.age),
    title: "Age",
  },
  {
    isSortable: true,
    name: "duty",
    sorter: (a: TypeData, b: TypeData) => Number(a.duty) - Number(b.duty),
    title: "Duty",
  },
]

const Template: ComponentStory<React.FC<TableSortOneColumnProps<TypeData>>> = (
  args
) => <TableSortOneColumn columns={dataColumns} rows={dataRows} />

export const Basic = Template.bind({})
Basic.args = {
  columns: { dataColumns },
  rows: { dataRows },
}
