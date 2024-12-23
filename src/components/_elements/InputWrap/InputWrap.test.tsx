import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { InputWrap } from "./index"

describe("Компонент InputWrap", () => {
  test("Рендерится с детьми (children)", () => {
    render(
      <InputWrap data-testid="input-wrap" validationState="valid">
        <input type="text" />
      </InputWrap>
    )

    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toBeInTheDocument()
  })

  test("Применяет класс itpc-input-wrap", () => {
    render(<InputWrap data-testid="input-wrap" validationState="valid" />)

    const wrapElement = screen.getByTestId("input-wrap")
    expect(wrapElement).toHaveClass("itpc-input-wrap")
  })

  test("Применяет класс itpc-input-wrap_focused, если focused=true", () => {
    render(
      <InputWrap data-testid="input-wrap" validationState="valid" focused />
    )

    const wrapElement = screen.getByTestId("input-wrap")
    expect(wrapElement).toHaveClass("itpc-input-wrap_focused")
  })

  test("Применяет класс itpc-input-wrap_disabled, если disabled=true", () => {
    render(
      <InputWrap data-testid="input-wrap" validationState="valid" disabled />
    )

    const wrapElement = screen.getByTestId("input-wrap")
    expect(wrapElement).toHaveClass("itpc-input-wrap_disabled")
  })

  test("Применяет класс itpc-input-wrap_hover, если disabled=false", () => {
    render(
      <InputWrap
        data-testid="input-wrap"
        disabled={false}
        validationState="valid"
      />
    )

    const wrapElement = screen.getByTestId("input-wrap")
    expect(wrapElement).toHaveClass("itpc-input-wrap_hover")
  })

  test("Применяет класс itpc-input-wrap_error, если validationState=invalid", () => {
    render(<InputWrap data-testid="input-wrap" validationState="invalid" />)

    const wrapElement = screen.getByTestId("input-wrap")
    expect(wrapElement).toHaveClass("itpc-input-wrap_error")
  })

  test("Применяет стили height и maxHeight", () => {
    render(
      <InputWrap
        data-testid="input-wrap"
        height={50}
        maxHeight={300}
        validationState="valid"
      />
    )

    const wrapElement = screen.getByTestId("input-wrap")
    expect(wrapElement).toHaveStyle("height: 50px")
    expect(wrapElement).toHaveStyle("max-height: 300px")
  })

  test("Применяет fixedHeight вместо maxHeight, если fixedHeight передан", () => {
    render(
      <InputWrap
        data-testid="input-wrap"
        fixedHeight={150}
        maxHeight={300}
        validationState="valid"
      />
    )

    const wrapElement = screen.getByTestId("input-wrap")
    expect(wrapElement).toHaveStyle("max-height: 150px")
  })

  test("Не применяет fixedHeight, если он не передан", () => {
    render(
      <InputWrap
        data-testid="input-wrap"
        maxHeight={300}
        validationState="valid"
      />
    )

    const wrapElement = screen.getByTestId("input-wrap")
    expect(wrapElement).toHaveStyle("max-height: 300px")
  })

  test("Рендерится корректно (snapshot)", () => {
    const { container } = render(
      <InputWrap data-testid="input-wrap" validationState="valid">
        <input type="text" />
      </InputWrap>
    )

    expect(container).toMatchSnapshot()
  })
})
