import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Flex } from "../components"
import { Col, Row, RowJustify, RowProps } from "../components/Grid"

export default {
  component: Row,
  title: "Components/Grid",
} as ComponentMeta<React.FC<RowProps>>

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

interface Props extends RowProps {
  col: number
}

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const render2Cols = () => (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <Col col={2} key={`col-2-${index}`}>
          <div style={style}>col-2 index-{index}</div>
        </Col>
      ))}
    </>
  )

  const render4Cols = () => (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Col col={4} key={`col-4-${index}`}>
          <div style={{ ...style, height: index % 2 === 0 ? "100px" : "50px" }}>
            col-4 index-{index}
          </div>
        </Col>
      ))}
    </>
  )

  const render6Cols = () => (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <Col col={6} key={`col-6-${index}`}>
          <div style={style}>col-6 index-{index}</div>
        </Col>
      ))}
    </>
  )

  const render8Cols = () => {
    const arr = Array.from({ length: 3 })

    return (
      <>
        {arr.map((_, index) => (
          <Col col={8} key={`col-8-${index}`} order={index}>
            <div
              style={{ ...style, height: index % 2 === 0 ? "100px" : "50px" }}
            >
              col-8 index-{index}
            </div>
          </Col>
        ))}
      </>
    )
  }

  const render12Cols = () => (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <Col col={12} key={`col-12-${index}`}>
          <div style={{ ...style, height: index % 2 === 0 ? "100px" : "50px" }}>
            col-12 index-{index}
          </div>
        </Col>
      ))}
    </>
  )

  return (
    <Flex gap={16} vertical>
      <Row {...args}>{render2Cols()}</Row>

      <Row {...args}>{render4Cols()}</Row>

      <Row {...args}>{render6Cols()}</Row>

      <Row {...args}>{render8Cols()}</Row>

      <Row {...args}>{render12Cols()}</Row>

      <Row {...args}>
        <Col col={24}>
          <div style={style}>col 24</div>
        </Col>
      </Row>

      <Row {...args}>
        <Col col={12} flex={2}>
          <div style={style}>col 12 flex-2</div>
        </Col>
        <Col col={12} flex={3}>
          <div style={style}>col 12 flex-3</div>
        </Col>
      </Row>

      <Row {...args} justify={RowJustify.END}>
        <Col col={4}>
          <div style={style}>col 4</div>
        </Col>
        <Col col={4}>
          <div style={style}>col 4</div>
        </Col>
      </Row>
    </Flex>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  gap: [16, 16],
}
