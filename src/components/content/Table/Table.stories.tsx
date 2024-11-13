import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import {
  Cell,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableProps,
  TableRow,
} from "./index"

const meta: Meta<typeof Table> = {
  component: Table,
  // @ts-ignore
  subcomponents: { Cell, Table, TableBody, TableColumn, TableHeader, TableRow },
  title: "Content/Table",
}

export default meta

type Story = StoryObj<typeof Table>

const Template: React.FC<TableProps> = (args) => (
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

export const Basic: Story = {
  args: {
    title: "Table title",
  },
  name: "Базовый",
  render: (args) => <Template {...args} />,
}
