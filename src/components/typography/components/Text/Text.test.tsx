import React from "react"

import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { TextSize, TextTag, TextType, TextWeight } from "../../../../enums"

import { Text } from "./index"

describe("Компонент Text", () => {
  test("Рендерится с детьми (children)", () => {
    render(
      <Text data-testid="text-container">
        <span>Текстовый контент</span>
      </Text>
    )
    const textContainer = screen.getByTestId("text-container")
    expect(textContainer).toBeInTheDocument()
    expect(textContainer).toHaveTextContent("Текстовый контент")
  })

  test("Использует тег p по умолчанию", () => {
    render(<Text data-testid="text-container">Текстовый контент</Text>)
    const textContainer = screen.getByTestId("text-container")
    expect(textContainer.tagName).toBe("P")
  })

  test("Поддерживает разные теги через пропс tag", () => {
    render(
      <Text data-testid="text-container" tag={TextTag.CODE}>
        Код
      </Text>
    )
    const textContainer = screen.getByTestId("text-container")
    expect(textContainer.tagName).toBe("CODE")
  })

  test("Применяет классы, сгенерированные generateClassList", () => {
    render(
      <Text
        data-testid="text-container"
        size={TextSize.M}
        type={TextType.SECONDARY}
        underline={false}
        weight={TextWeight.BOLD}
        through
      >
        Текстовый контент
      </Text>
    )
    const textContainer = screen.getByTestId("text-container")
    expect(textContainer).toHaveClass("itpc-text_size_m")
    expect(textContainer).toHaveClass("itpc-text_color_secondary")
    expect(textContainer).toHaveClass("itpc-text_through")
    expect(textContainer).not.toHaveClass("itpc-text_underline")
    expect(textContainer).toHaveClass("itpc-text_weight_bold")
  })

  test("Применяет пользовательский класс через props className", () => {
    render(
      <Text
        className="custom-class"
        data-testid="text-container"
        size={TextSize.L}
        type={TextType.PRIMARY}
      >
        Текстовый контент
      </Text>
    )
    const textContainer = screen.getByTestId("text-container")
    expect(textContainer).toHaveClass("itpc-text_size_l")
    expect(textContainer).toHaveClass("itpc-text_color_primary")
    expect(textContainer).toHaveClass("custom-class")
  })

  test("Применяет дополнительные стили через props style", () => {
    render(
      <Text
        data-testid="text-container"
        style={{ color: "red", fontSize: "16px" }}
      >
        Текстовый контент
      </Text>
    )
    const textContainer = screen.getByTestId("text-container")
    expect(textContainer).toHaveStyle("color: red")
    expect(textContainer).toHaveStyle("font-size: 16px")
  })

  test("Вызывает onClick при клике на текст", () => {
    const mockOnClick = jest.fn()
    render(
      <Text data-testid="text-container" onClick={mockOnClick}>
        Текстовый контент
      </Text>
    )
    const textContainer = screen.getByTestId("text-container")
    fireEvent.click(textContainer)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
