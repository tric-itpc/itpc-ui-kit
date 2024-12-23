import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { getAttributes, getAttributeValue } from "../../../lab/tests"

import { Placeholder } from "./index"

describe("Компонент Placeholder", () => {
  test("Рендерится с детьми (children)", () => {
    render(<Placeholder data-testid="placeholder">Тестовый текст</Placeholder>)

    const placeholder = screen.getByTestId("placeholder")
    expect(placeholder).toBeInTheDocument()
    expect(placeholder).toHaveTextContent("Тестовый текст")
  })

  test("Применяет класс itpc-placeholder", () => {
    render(<Placeholder data-testid="placeholder">Тестовый текст</Placeholder>)

    const placeholder = screen.getByTestId("placeholder")
    expect(placeholder).toHaveClass("itpc-placeholder")
  })

  test("Применяет класс itpc-placeholder_disabled, если disabled=true", () => {
    render(
      <Placeholder data-testid="placeholder" disabled>
        Тестовый текст
      </Placeholder>
    )

    const placeholder = screen.getByTestId("placeholder")
    expect(placeholder).toHaveClass("itpc-placeholder_disabled")
  })

  test("Применяет класс itpc-placeholder_focused, если focused=true", () => {
    render(
      <Placeholder data-testid="placeholder" focused>
        Тестовый текст
      </Placeholder>
    )

    const placeholder = screen.getByTestId("placeholder")
    expect(placeholder).toHaveClass("itpc-placeholder_focused")
  })

  test("Применяет класс itpc-placeholder_color_red, если validationState=invalid", () => {
    render(
      <Placeholder data-testid="placeholder" validationState="invalid">
        Тестовый текст
      </Placeholder>
    )

    const placeholder = screen.getByTestId("placeholder")
    expect(placeholder).toHaveClass("itpc-placeholder_color_red")
  })

  test("Не применяет класс itpc-placeholder_color_red, если validationState не invalid", () => {
    render(
      <Placeholder data-testid="placeholder" validationState="valid">
        Тестовый текст
      </Placeholder>
    )

    const placeholder = screen.getByTestId("placeholder")
    expect(placeholder).not.toHaveClass("itpc-placeholder_color_red")
  })

  test("Передаёт атрибут htmlFor", () => {
    render(
      <Placeholder data-testid="placeholder" htmlFor="input-id">
        Тестовый текст
      </Placeholder>
    )

    const placeholder = screen.getByTestId("placeholder")
    expect(getAttributes(placeholder)).toHaveProperty("for")
    expect(getAttributeValue(placeholder, "for")).toBe("input-id")
  })

  test("Применяет переданный className", () => {
    render(
      <Placeholder className="custom-class" data-testid="placeholder">
        Тестовый текст
      </Placeholder>
    )

    const placeholder = screen.getByTestId("placeholder")
    expect(placeholder).toHaveClass("custom-class")
  })
})
