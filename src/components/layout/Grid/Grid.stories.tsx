import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import { Flex } from "../Flex"

import { Col, ColProps, Row, RowAlign, RowJustify, RowProps } from "./index"

const meta: Meta<typeof Row> = {
  component: Row,
  // @ts-ignore
  subcomponents: { Col, Row },
  title: "Layout/Grid",
}

export default meta

interface Props extends RowProps, ColProps {}

type Story = StoryObj<Props>

const style: React.CSSProperties = {
  alignItems: "center",
  background: "#5c53ac",
  borderRadius: "4px",
  color: "#fff",
  display: "flex",
  height: "100px",
  justifyContent: "center",
  textAlign: "center",
}

export const Basic: Story = {
  args: {
    gap: [16, 16],
  },
  name: "Базовый",
  render: (args) => (
    <Row {...args}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Col col={6} key={`col-6-${index}`}>
          <div style={style}>Col</div>
        </Col>
      ))}
    </Row>
  ),
}

export const Gap: Story = {
  args: {
    gap: [32, 16],
  },
  name: "Расстояние между элементами",
  render: (args) => (
    <Row {...args}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Col col={6} key={`col-6-${index}`}>
          <div style={style}>Col</div>
        </Col>
      ))}
      {Array.from({ length: 4 }).map((_, index) => (
        <Col col={6} key={`col-6-${index}`}>
          <div style={style}>Col</div>
        </Col>
      ))}
    </Row>
  ),
}

export const AlignTop: Story = {
  args: {
    align: RowAlign.TOP,
    gap: [16, 16],
  },
  name: "Вертикальное выравнивание элементов вверху",
  render: (args) => (
    <Flex style={{ height: "200px", width: "100%" }} vertical>
      <Row {...args} style={{ width: "100%" }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Col col={6} key={`col-6-${index}`}>
            <div style={style}>Col</div>
          </Col>
        ))}
      </Row>
    </Flex>
  ),
}

export const AlignMiddle: Story = {
  args: {
    align: RowAlign.MIDDLE,
    gap: [16, 16],
  },
  name: "Вертикальное выравнивание элементов по центру",
  render: (args) => (
    <Flex style={{ height: "200px", width: "100%" }} vertical>
      <Row {...args} style={{ width: "100%" }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Col col={6} key={`col-6-${index}`}>
            <div style={style}>Col</div>
          </Col>
        ))}
      </Row>
    </Flex>
  ),
}

export const AlignBottom: Story = {
  args: {
    align: RowAlign.BOTTOM,
    gap: [16, 16],
  },
  name: "Вертикальное выравнивание элементов внизу",
  render: (args) => (
    <Flex style={{ height: "200px", width: "100%" }} vertical>
      <Row {...args} style={{ width: "100%" }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Col col={6} key={`col-6-${index}`}>
            <div style={style}>Col</div>
          </Col>
        ))}
      </Row>
    </Flex>
  ),
}

export const JustifyStart: Story = {
  args: {
    justify: RowJustify.START,
  },
  name: "Горизонтальное выравнивание элементов слева",
  render: (args) => (
    <Row {...args}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} style={{ ...style, height: "50px", width: "50px" }}>
          Col
        </div>
      ))}
    </Row>
  ),
}

export const JustifyCenter: Story = {
  args: {
    justify: RowJustify.CENTER,
  },
  name: "Горизонтальное выравнивание элементов по центру",
  render: (args) => (
    <Row {...args}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} style={{ ...style, height: "50px", width: "50px" }}>
          Col
        </div>
      ))}
    </Row>
  ),
}

export const JustifyEnd: Story = {
  args: {
    justify: RowJustify.END,
  },
  name: "Горизонтальное выравнивание элементов справа",
  render: (args) => (
    <Row {...args}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} style={{ ...style, height: "50px", width: "50px" }}>
          Col
        </div>
      ))}
    </Row>
  ),
}

export const JustifySpaceBetween: Story = {
  args: {
    justify: RowJustify.SPACE_BETWEEN,
  },
  name: "Горизонтальное выравнивание элементов между собой",
  render: (args) => (
    <Row {...args}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} style={{ ...style, height: "50px", width: "50px" }}>
          Col
        </div>
      ))}
    </Row>
  ),
}

export const JustifySpaceAround: Story = {
  args: {
    justify: RowJustify.SPACE_AROUND,
  },
  name: "Горизонтальное выравнивание элементов по краям",
  render: (args) => (
    <Row {...args}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} style={{ ...style, height: "50px", width: "50px" }}>
          Col
        </div>
      ))}
    </Row>
  ),
}

export const JustifySpaceEvenly: Story = {
  args: {
    justify: RowJustify.SPACE_EVENLY,
  },
  name: "Горизонтальное выравнивание элементов равномерно",
  render: (args) => (
    <Row {...args}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} style={{ ...style, height: "50px", width: "50px" }}>
          Col
        </div>
      ))}
    </Row>
  ),
}
