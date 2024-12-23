import React from "react"

import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { TextSize, TextType, TextWeight } from "../../../../enums"

import { Title } from "./index"

describe("Компонент Title", () => {
  test("Рендерится с детьми (children)", () => {
    render(
      <Title data-testid="title-container">
        <span>Заголовок</span>
      </Title>
    )
    const titleContainer = screen.getByTestId("title-container")
    expect(titleContainer).toBeInTheDocument()
    expect(titleContainer).toHaveTextContent("Заголовок")
  })

  test("Использует тег h1 по умолчанию", () => {
    render(<Title data-testid="title-container">Заголовок</Title>)
    const titleContainer = screen.getByTestId("title-container")
    expect(titleContainer.tagName).toBe("H1")
  })

  test("Поддерживает разные уровни заголовков через пропс level", () => {
    render(
      <Title data-testid="title-container" level={2}>
        Заголовок второго уровня
      </Title>
    )
    const titleContainer = screen.getByTestId("title-container")
    expect(titleContainer.tagName).toBe("H2")
  })

  test("Применяет классы, сгенерированные generateClassList", () => {
    render(
      <Title
        data-testid="title-container"
        size={TextSize.M}
        type={TextType.SECONDARY}
        underline={false}
        weight={TextWeight.NORMAL}
        through
      >
        Заголовок
      </Title>
    )
    const titleContainer = screen.getByTestId("title-container")
    expect(titleContainer).toHaveClass("itpc-title")
    expect(titleContainer).toHaveClass("itpc-text_size_m")
    expect(titleContainer).toHaveClass("itpc-text_color_secondary")
    expect(titleContainer).toHaveClass("itpc-text_through")
    expect(titleContainer).not.toHaveClass("itpc-text_underline")
    expect(titleContainer).toHaveClass("itpc-text_weight_normal")
  })

  test("Применяет пользовательский класс через props className", () => {
    render(
      <Title
        className="custom-class"
        data-testid="title-container"
        size={TextSize.L}
        type={TextType.PRIMARY}
      >
        Заголовок
      </Title>
    )
    const titleContainer = screen.getByTestId("title-container")
    expect(titleContainer).toHaveClass("itpc-title")
    expect(titleContainer).toHaveClass("itpc-text_size_l")
    expect(titleContainer).toHaveClass("itpc-text_color_primary")
    expect(titleContainer).toHaveClass("custom-class")
  })

  test("Применяет дополнительные стили через props style", () => {
    render(
      <Title
        data-testid="title-container"
        style={{ color: "blue", fontSize: "24px" }}
      >
        Заголовок
      </Title>
    )
    const titleContainer = screen.getByTestId("title-container")
    expect(titleContainer).toHaveStyle("color: blue")
    expect(titleContainer).toHaveStyle("font-size: 24px")
  })

  test("Вызывает onClick при клике на заголовок", () => {
    const mockOnClick = jest.fn()
    render(
      <Title data-testid="title-container" onClick={mockOnClick}>
        Заголовок
      </Title>
    )
    const titleContainer = screen.getByTestId("title-container")
    fireEvent.click(titleContainer)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
