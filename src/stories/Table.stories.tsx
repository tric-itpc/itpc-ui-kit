import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
  TableProps,
} from "../components/Table"

export default {
  title: "Components/Table",
  component: Table,
} as ComponentMeta<React.FC<TableProps>>

const Template: ComponentStory<React.FC<TableProps>> = (args) => (
  <Table {...args}>
    <TableHeader>
      <Row>
        <Column>#</Column>
        <Column>Head 2</Column>
        <Column>Head 3</Column>
      </Row>
    </TableHeader>
    <TableBody>
      <Row>
        <Cell>1</Cell>
        <Cell>Column 2</Cell>
        <Cell>Column 3</Cell>
      </Row>
      <Row>
        <Cell>2</Cell>
        <Cell>Column 2</Cell>
        <Cell>Column 3</Cell>
      </Row>
      <Row>
        <Cell>3</Cell>
        <Cell>Column 2</Cell>
        <Cell>Column 3</Cell>
      </Row>
    </TableBody>
  </Table>
)

export const Basic = Template.bind({})
Basic.args = {
  title: "Table title",
}
