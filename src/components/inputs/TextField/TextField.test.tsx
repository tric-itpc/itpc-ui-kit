import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { AutoComplete, KeyCode } from "../../../enums"
import {
  blurInput,
  changeInput,
  focusInput,
  getInputAttributes,
  getInputAttributeValue,
  getInputDisabled,
  getInputError,
  getInputValue,
  keyDownInput,
} from "../../../lab/tests"

import { TextField } from "./index"

describe("Компонент TextField", () => {
  const defaultProps = {
    id: "test-input",
    name: "test-input",
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onFocus: jest.fn(),
    onKeyDown: jest.fn(),
    placeholder: "Введите текст",
  }

  test("Рендерится с дефолтными пропсами (снимок)", () => {
    const { container } = render(
      <TextField {...defaultProps} data-testid="text-field" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Отображает placeholder", () => {
    render(<TextField {...defaultProps} data-testid="text-field" />)
    const placeholder = screen.getByText("Введите текст")
    expect(placeholder).toBeInTheDocument()
  })

  test("Отображает переданное значение", () => {
    render(
      <TextField
        {...defaultProps}
        data-testid="text-field"
        value="Тестовый текст"
      />
    )
    const input = screen.getByTestId("text-field")
    expect(getInputValue(input)).toBe("Тестовый текст")
  })

  test("Вызывает onChange при изменении значения", () => {
    const onChange = jest.fn()
    render(
      <TextField
        {...defaultProps}
        data-testid="text-field"
        onChange={onChange}
      />
    )
    const input = screen.getByTestId("text-field")
    changeInput(input, "Новый текст")

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith("Новый текст", expect.any(Object))
  })

  test("Вызывает onFocus при фокусе", () => {
    const onFocus = jest.fn()
    render(
      <TextField {...defaultProps} data-testid="text-field" onFocus={onFocus} />
    )
    const input = screen.getByTestId("text-field")
    focusInput(input)

    expect(onFocus).toHaveBeenCalledTimes(1)
  })

  test("Вызывает onBlur при потере фокуса", () => {
    const onBlur = jest.fn()
    render(
      <TextField {...defaultProps} data-testid="text-field" onBlur={onBlur} />
    )
    const input = screen.getByTestId("text-field")
    focusInput(input)
    blurInput(input)

    expect(onBlur).toHaveBeenCalledTimes(1)
  })

  test("Отображает ошибку, если validationState = 'invalid'", () => {
    const errorMessage = "Ошибка ввода"
    render(
      <TextField
        {...defaultProps}
        data-testid="text-field"
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
      <TextField
        {...defaultProps}
        data-testid="text-field"
        errorMessage={errorMessage}
        validationState="valid"
      />
    )
    const input = screen.getByTestId("text-field")
    const error = getInputError(input)
    expect(error).not.toHaveClass("itpc-error_show")
  })

  test("Применяет класс disabled, если disabled = true", () => {
    render(<TextField {...defaultProps} data-testid="text-field" disabled />)
    const input = screen.getByTestId("text-field")
    expect(getInputDisabled(input)).toBeTruthy()
  })

  test("Обрабатывает нажатие клавиш", () => {
    render(<TextField {...defaultProps} data-testid="text-field" />)
    const input = screen.getByTestId("text-field")
    keyDownInput(input, KeyCode.ENTER)

    expect(defaultProps.onKeyDown).toHaveBeenCalledTimes(1)
  })

  test("Отображает иконку, если она передана", () => {
    const icon = <span>🔍</span>
    render(<TextField {...defaultProps} data-testid="text-field" icon={icon} />)
    const iconElement = screen.getByText("🔍")
    expect(iconElement).toBeInTheDocument()
  })

  test("Применяет maxLength, если он передан", () => {
    render(
      <TextField {...defaultProps} data-testid="text-field" maxLength={10} />
    )
    const input = screen.getByTestId("text-field")
    expect(getInputAttributes(input)).toHaveProperty("maxlength")
    expect(getInputAttributeValue(input, "maxlength")).toEqual("10")
  })

  test("Применяет autoComplete, если он передан", () => {
    render(
      <TextField
        {...defaultProps}
        autoComplete={AutoComplete.OFF}
        data-testid="text-field"
      />
    )
    const input = screen.getByTestId("text-field")
    expect(getInputAttributes(input)).toHaveProperty("autocomplete")
    expect(getInputAttributeValue(input, "autocomplete")).toEqual(
      AutoComplete.OFF
    )
  })

  test("Применяет кастомный класс, если он передан", () => {
    render(
      <TextField
        {...defaultProps}
        className="custom-class"
        data-testid="text-field"
      />
    )
    const input = screen.getByTestId("text-field")
    expect(input).toHaveClass("custom-class")
  })
})
