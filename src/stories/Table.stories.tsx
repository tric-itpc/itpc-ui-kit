import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import {
  Cell,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableProps,
  TableRow,
} from "../components/Table"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

export default {
  component: Table,
  title: "Components/Table",
} as ComponentMeta<React.FC<TableProps>>

const Template: ComponentStory<React.FC<TableProps>> = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableColumn>#</TableColumn>
        <TableColumn>Head 2</TableColumn>
        <TableColumn>Head 3</TableColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <Cell>1</Cell>
        <Cell>TableColumn 2</Cell>
        <Cell>TableColumn 3</Cell>
      </TableRow>
      <TableRow>
        <Cell>2</Cell>
        <Cell>TableColumn 2</Cell>
        <Cell>TableColumn 3</Cell>
      </TableRow>
      <TableRow>
        <Cell>3</Cell>
        <Cell>TableColumn 2</Cell>
        <Cell>TableColumn 3</Cell>
      </TableRow>
    </TableBody>
  </Table>
)

export const Basic = Template.bind({})
Basic.args = {
  title: "Table title",
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const TableDark = Template.bind({})
TableDark.args = {
  title: "Table title",
}
TableDark.decorators = [ThemeDecorator(Theme.DARK)]

TableDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
