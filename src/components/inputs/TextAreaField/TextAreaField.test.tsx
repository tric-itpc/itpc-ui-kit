import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import {
  blurInput,
  changeInput,
  focusInput,
  getInputDisabled,
  getInputError,
  getInputValue,
} from "../../../lab/tests"

import { TextAreaField } from "./index"

describe("Компонент TextAreaField", () => {
  const defaultProps = {
    "data-testid": "textarea-field",
    id: "test-textarea",
    name: "test-textarea",
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onFocus: jest.fn(),
    placeholder: "Введите текст",
  }

  test("Рендерится с дефолтными пропсами (снимок)", () => {
    const { container } = render(<TextAreaField {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Отображает placeholder", () => {
    render(<TextAreaField {...defaultProps} />)
    const placeholder = screen.getByText("Введите текст")
    expect(placeholder).toBeInTheDocument()
  })

  test("Отображает переданное значение", () => {
    render(<TextAreaField {...defaultProps} value="Тестовый текст" />)
    const textarea = screen.getByTestId("textarea-field")
    expect(getInputValue(textarea)).toBe("Тестовый текст")
  })

  test("Вызывает onChange при изменении значения", () => {
    render(<TextAreaField {...defaultProps} />)
    const textarea = screen.getByTestId("textarea-field")
    changeInput(textarea, "Новый текст")

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onChange).toHaveBeenCalledWith(
      "Новый текст",
      expect.any(Object)
    )
  })

  test("Вызывает onFocus при фокусе", () => {
    const onFocus = jest.fn()
    render(<TextAreaField {...defaultProps} onFocus={onFocus} />)
    const textarea = screen.getByTestId("textarea-field")
    focusInput(textarea)

    expect(onFocus).toHaveBeenCalledTimes(1)
  })

  test("Вызывает onBlur при потере фокуса", () => {
    render(<TextAreaField {...defaultProps} />)
    const textarea = screen.getByTestId("textarea-field")
    focusInput(textarea)
    blurInput(textarea)

    expect(defaultProps.onBlur).toHaveBeenCalledTimes(1)
  })

  test("Отображает ошибку, если validationState = 'invalid'", () => {
    const errorMessage = "Ошибка ввода"
    render(
      <TextAreaField
        {...defaultProps}
        errorMessage={errorMessage}
        validationState="invalid"
      />
    )
    const error = screen.getByText(errorMessage)
    expect(error).toBeInTheDocument()
  })

  test("Не отображает ошибку, если validationState = 'valid'", () => {
    const errorMessage = "Ошибка ввода"
    render(
      <TextAreaField
        {...defaultProps}
        errorMessage={errorMessage}
        validationState="valid"
      />
    )
    const textarea = screen.getByTestId("textarea-field")
    const error = getInputError(textarea)
    expect(error).not.toHaveClass("itpc-error_show")
  })

  test("Применяет класс disabled, если disabled = true", () => {
    render(<TextAreaField {...defaultProps} disabled />)
    const textarea = screen.getByTestId("textarea-field")
    expect(getInputDisabled(textarea)).toBeTruthy()
  })
})
