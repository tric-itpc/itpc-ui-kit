import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import {
  TableSortOneColumn,
  TableSortOneColumnProps,
} from "../components/TableSort/TableSortOneColumn"
import { Column, UseType } from "../components/TableSort/types"

export default {
  title: "Components/TableSortOneColumn",
  component: TableSortOneColumn,
} as ComponentMeta<React.FC<TableSortOneColumnProps<TypeData>>>

interface TypeData extends UseType {
  id: string
  name: string
  age: string
  duty: string
}

const dataRows: TypeData[] = [
  { id: "1", name: "Сергей", age: "35", duty: "50" },
  { id: "2", name: "Рома", age: "42", duty: "500.02" },
  { id: "3", name: "Алексей", age: "18", duty: "1.10" },
  { id: "4", name: "Борис", age: "9", duty: "250" },
  { id: "5", name: "Яша", age: "100", duty: "250.02" },
]

const dataColumns: Column<TypeData>[] = [
  {
    name: "id",
    title: "ID",
    sorter: (a: TypeData, b: TypeData) => Number(a.id) - Number(b.id),
    isSortable: false,
  },
  {
    name: "name",
    title: "Name",
    sorter: (a: TypeData, b: TypeData) => a.name.length - b.name.length,
    isSortable: true,
  },
  {
    name: "age",
    title: "Age",
    sorter: (a: TypeData, b: TypeData) => Number(a.age) - Number(b.age),
    isSortable: true,
  },
  {
    name: "duty",
    title: "Duty",
    sorter: (a: TypeData, b: TypeData) => Number(a.duty) - Number(b.duty),
    isSortable: true,
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
