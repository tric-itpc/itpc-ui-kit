import React from "react"

import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { Field } from "./index"

describe("Компонент Field", () => {
  test("Рендерится с детьми (children)", () => {
    render(
      <Field data-testid="field-container">
        <p>Тестовый текст</p>
      </Field>
    )

    const fieldElement = screen.getByTestId("field-container")
    expect(fieldElement).toBeInTheDocument()
    expect(fieldElement).toHaveTextContent("Тестовый текст")
  })

  test("Применяет переданный className", () => {
    render(
      <Field className="custom-class" data-testid="field-container">
        <p>Тестовый текст</p>
      </Field>
    )

    const fieldElement = screen.getByTestId("field-container")
    expect(fieldElement).toHaveClass("itpc-field custom-class")
  })

  test("Применяет стандартный класс itpc-field, если className не передан", () => {
    render(
      <Field data-testid="field-container">
        <p>Тестовый текст</p>
      </Field>
    )

    const fieldElement = screen.getByTestId("field-container")
    expect(fieldElement).toHaveClass("itpc-field")
    expect(fieldElement).not.toHaveClass("custom-class")
  })

  test("Передаёт все дополнительные пропсы (например, title)", () => {
    render(
      <Field data-testid="field-container" title="Field Title">
        <p>Тестовый текст</p>
      </Field>
    )

    const fieldElement = screen.getByTestId("field-container")
    expect(fieldElement).toHaveAttribute("title", "Field Title")
  })

  test("Корректно применяет стили через проп style", () => {
    const style = { backgroundColor: "red" }
    render(
      <Field data-testid="field-container" style={style}>
        <p>Тестовый текст</p>
      </Field>
    )

    const fieldElement = screen.getByTestId("field-container")
    expect(fieldElement).toHaveStyle("background-color: red")
  })

  test("Рендерится без детей, если children не передан", () => {
    render(<Field data-testid="field-container" />)

    const fieldElement = screen.getByTestId("field-container")
    expect(fieldElement).toBeEmptyDOMElement()
  })

  test("Корректно обрабатывает событие onClick", () => {
    const handleClick = jest.fn()
    render(
      <Field data-testid="field-container" onClick={handleClick}>
        <p>Тестовый текст</p>
      </Field>
    )

    const fieldElement = screen.getByTestId("field-container")
    fireEvent.click(fieldElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("Рендерится корректно (snapshot)", () => {
    const { container } = render(
      <Field className="custom-class" data-testid="field-container">
        <p>Тестовый текст</p>
      </Field>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
