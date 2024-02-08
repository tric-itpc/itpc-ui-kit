import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import {
  TableSortTwoColumns,
  TableSortTwoColumnsProps,
} from "../components/TableSort"
import { Column, RowType } from "../components/TableSort/types"

export default {
  title: "Components/TableSortTwoColumns",
  component: TableSortTwoColumns,
} as ComponentMeta<React.FC<TableSortTwoColumnsProps<TypeData>>>

interface TypeData extends RowType {
  id: string
  name: string
  age: string
  duty: string
  city: string
}

const dataRows: TypeData[] = [
  { id: "1", name: "Сергей", city: "Тюмень", age: "25", duty: "50" },
  { id: "2", name: "Рома", city: "Ишим", age: "19", duty: "500.02" },
  { id: "3", name: "Алексей", city: "Тобольск", age: "9", duty: "1.10" },
  { id: "4", name: "Борис", city: "Тюмень", age: "19", duty: "250" },
  { id: "5", name: "Сергей", city: "Тобольск", age: "35", duty: "51" },
  { id: "6", name: "Яша", city: "Тюмень", age: "100", duty: "250" },
  { id: "7", name: "Сергей", city: "Тобольск", age: "45", duty: "49" },
  { id: "8", name: "Сергей", city: "Ишим", age: "19", duty: "500.02" },
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
    name: "city",
    title: "Город",
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

const Template: ComponentStory<React.FC<TableSortTwoColumnsProps<TypeData>>> = (
  args
) => <TableSortTwoColumns {...args} />

export const Basic = Template.bind({})
Basic.args = {
  columns: dataColumns,
  rows: dataRows,
  sortBy: "two",
}
