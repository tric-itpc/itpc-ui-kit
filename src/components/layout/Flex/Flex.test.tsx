import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { Flex } from "./index"

describe("Компонент Flex", () => {
  test("Рендерится с детьми (children)", () => {
    render(
      <Flex data-testid="flex-container">
        <div>Элемент 1</div>
        <div>Элемент 2</div>
      </Flex>
    )

    const flexContainer = screen.getByTestId("flex-container")
    expect(flexContainer).toBeInTheDocument()
    expect(flexContainer).toHaveTextContent("Элемент 1")
    expect(flexContainer).toHaveTextContent("Элемент 2")
  })

  test("Применяет классы, сгенерированные generateClassList", () => {
    render(
      <Flex
        align="center"
        data-testid="flex-container"
        justify="center"
        wrap="wrap"
        vertical
      >
        <div>Элемент 1</div>
      </Flex>
    )

    const flexContainer = screen.getByTestId("flex-container")
    expect(flexContainer).toHaveClass("itpc-flex_direction_vertical")
    expect(flexContainer).toHaveClass("itpc-flex_justify_center")
    expect(flexContainer).toHaveClass("itpc-flex_align_center")
    expect(flexContainer).toHaveClass("itpc-flex_wrap_wrap")
  })

  test("Применяет стиль gap", () => {
    render(
      <Flex data-testid="flex-container" gap={16}>
        <div>Элемент 1</div>
      </Flex>
    )

    const flexContainer = screen.getByTestId("flex-container")
    expect(flexContainer).toHaveStyle("gap: 16px")
  })

  test("Применяет переданные стили", () => {
    render(
      <Flex data-testid="flex-container" style={{ backgroundColor: "red" }}>
        <div>Элемент 1</div>
      </Flex>
    )

    const flexContainer = screen.getByTestId("flex-container")
    expect(flexContainer).toHaveStyle("background-color: red")
  })

  test("Применяет переданный className", () => {
    render(
      <Flex className="custom-class" data-testid="flex-container">
        <div>Элемент 1</div>
      </Flex>
    )

    const flexContainer = screen.getByTestId("flex-container")
    expect(flexContainer).toHaveClass("custom-class")
  })
})
