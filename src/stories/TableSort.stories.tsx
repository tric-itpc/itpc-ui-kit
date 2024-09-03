import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { TableSort, TableSortProps } from "../components/TableSort"
import { Column } from "../components/TableSort/types"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { NumberColumns, Theme } from "../enums"

interface RowType {
  city: string
  id: string
  population: string
}

export default {
  component: TableSort,
  title: "Components/TableSort",
} as ComponentMeta<React.FC<TableSortProps<RowType>>>

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

const Template: ComponentStory<React.FC<TableSortProps<RowType>>> = (args) => (
  <TableSort {...args} rows={dataRows} />
)

export const Basic = Template.bind({})
Basic.args = {
  columns: dataColumnsNoSort,
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const WithoutSortDark = Template.bind({})
WithoutSortDark.args = {
  columns: dataColumnsNoSort,
}
WithoutSortDark.decorators = [ThemeDecorator(Theme.DARK)]

WithoutSortDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}

export const SortByOneColumns = Template.bind({})
SortByOneColumns.args = {
  columns: dataColumns,
  sortByNumberColumns: NumberColumns.ONE,
}
SortByOneColumns.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const SortByOneColumnsDark = Template.bind({})
SortByOneColumnsDark.args = {
  columns: dataColumns,
  sortByNumberColumns: NumberColumns.ONE,
}
SortByOneColumnsDark.decorators = [ThemeDecorator(Theme.DARK)]

SortByOneColumnsDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}

export const SortByTwoColumns = Template.bind({})
SortByTwoColumns.args = {
  columns: dataColumns,
  sortByNumberColumns: NumberColumns.TWO,
}
SortByTwoColumns.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const SortByTwoColumnsDark = Template.bind({})
SortByTwoColumnsDark.args = {
  columns: dataColumns,
  sortByNumberColumns: NumberColumns.TWO,
}
SortByTwoColumnsDark.decorators = [ThemeDecorator(Theme.DARK)]

SortByTwoColumnsDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
