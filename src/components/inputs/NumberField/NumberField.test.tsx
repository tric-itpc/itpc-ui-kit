import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import {
  blurInput,
  changeInput,
  focusInput,
  getInputDisabled,
  getInputError,
  getInputErrorValue,
  getInputValue,
} from "../../../lab/tests"

import { NumberField, Props } from "./index"

describe("Компонент NumberField", () => {
  const defaultProps: Props = {
    format: "###",
    id: "test-id",
    name: "test-name",
    onChange: jest.fn(),
    placeholder: "Введите значение",
    value: "",
  }

  test("Рендерится с дефолтными пропсами (снимок)", () => {
    const { container } = render(
      <NumberField data-testid="number-field" {...defaultProps} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Корректно отображает placeholder", () => {
    render(<NumberField data-testid="number-field" {...defaultProps} />)
    const placeholder = screen.getByText("Введите значение")
    expect(placeholder).toBeInTheDocument()
  })

  test("Корректно отображает значение", () => {
    render(
      <NumberField data-testid="number-field" {...defaultProps} value="123" />
    )
    const inputElement = screen.getByTestId("number-field")
    expect(getInputValue(inputElement)).toBe("123")
  })

  test("Применяет атрибут disabled, если он передан", () => {
    render(
      <NumberField data-testid="number-field" {...defaultProps} disabled />
    )
    const inputElement = screen.getByTestId("number-field")
    expect(getInputDisabled(inputElement)).toBe(true)
  })

  test("Вызывает onChange при изменении значения", () => {
    const onChangeMock = jest.fn()
    render(
      <NumberField
        data-testid="number-field"
        {...defaultProps}
        onChange={onChangeMock}
      />
    )
    const inputElement = screen.getByTestId("number-field")
    changeInput(inputElement, "123")

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(
      {
        formattedValue: "123",
        value: "123",
      },
      expect.any(Object)
    )
  })

  test("Не вызывает onChange, если поле отключено", () => {
    const onChangeMock = jest.fn()
    render(
      <NumberField
        data-testid="number-field"
        {...defaultProps}
        onChange={onChangeMock}
        disabled
      />
    )
    const inputElement = screen.getByTestId("number-field")
    changeInput(inputElement, "123")

    expect(onChangeMock).not.toHaveBeenCalled()
  })

  test("Отображает иконку, если она передана", () => {
    const icon = <span>Icon</span>
    render(
      <NumberField data-testid="number-field" {...defaultProps} icon={icon} />
    )
    const iconElement = screen.getByText("Icon")
    expect(iconElement).toBeInTheDocument()
  })

  test("Отображает сообщение об ошибке, если validationState = 'invalid'", () => {
    const errorMessage = "Ошибка ввода"
    render(
      <NumberField
        data-testid="number-field"
        {...defaultProps}
        errorMessage={errorMessage}
        validationState="invalid"
      />
    )
    const inputElement = screen.getByTestId("number-field")
    expect(getInputErrorValue(inputElement)).toBe(errorMessage)
  })

  test("Не отображает сообщение об ошибке, если validationState = 'valid'", () => {
    const errorMessage = "Ошибка ввода"
    render(
      <NumberField
        data-testid="number-field"
        {...defaultProps}
        errorMessage={errorMessage}
        validationState="valid"
      />
    )
    const inputElement = screen.getByTestId("number-field")
    expect(getInputError(inputElement)).not.toHaveClass("itpc-error_show")
  })

  test("Применяет форматирование, если передан формат", () => {
    render(
      <NumberField
        data-testid="number-field"
        {...defaultProps}
        format="+7 (###) ###-##-##"
        value="1234567890"
      />
    )
    const inputElement = screen.getByTestId("number-field")
    expect(getInputValue(inputElement)).toBe("+7 (123) 456-78-90")
  })

  test("Корректно обрабатывает потерю фокуса", () => {
    const onBlurMock = jest.fn()
    render(
      <NumberField
        {...defaultProps}
        data-testid="number-field"
        onBlur={onBlurMock}
      />
    )
    const inputElement = screen.getByTestId("number-field")
    blurInput(inputElement)

    expect(onBlurMock).toHaveBeenCalledTimes(1)
  })

  // TODO: разобраться в причине неработающего теста.
  // test("Корректно обрабатывает получение фокуса", () => {
  //   const onFocusMock = jest.fn()
  //   render(
  //     <NumberField
  //       {...defaultProps}
  //       data-testid="number-field"
  //       onFocus={onFocusMock}
  //     />
  //   )
  //   const inputElement = screen.getByTestId("number-field")
  //   focusInput(inputElement)
  //
  //   expect(onFocusMock).toHaveBeenCalledTimes(1)
  // })

  test("Передаёт дополнительные атрибуты", () => {
    render(<NumberField {...defaultProps} data-testid="custom-input" />)
    const inputElement = screen.getByTestId("custom-input")
    expect(inputElement).toBeInTheDocument()
  })

  test("Добавляет кастомный класс, если он передан", () => {
    render(
      <NumberField
        data-testid="number-field"
        {...defaultProps}
        className="custom-class"
      />
    )
    const inputElement = screen.getByTestId("number-field")
    expect(inputElement).toHaveClass("custom-class")
  })
})
