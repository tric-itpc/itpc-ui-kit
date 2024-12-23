import React from "react"

import { render, screen } from "@testing-library/react"

import {
  blurInput,
  changeInput,
  focusInput,
  getInputAttributes,
  getInputDisabled,
  getInputErrorValue,
  getInputValue,
} from "../../../lab/tests"

import { DecimalField } from "./index"

describe("Компонент DecimalField", () => {
  test("Корректно рендерится", () => {
    const { container } = render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onChange={() => {}}
        placeholder="Введите число"
        value=""
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    expect(inputElement).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  test("Корректно обрабатывает изменение значения", () => {
    const handleChange = jest.fn()
    render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onChange={handleChange}
        placeholder="Введите число"
        value=""
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    changeInput(inputElement, "123.45")
    expect(handleChange).toHaveBeenCalledWith("123.45", expect.anything())
  })

  test("Корректно обрабатывает фокус и потерю фокуса", () => {
    const handleFocus = jest.fn()
    const handleBlur = jest.fn()
    render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onBlur={handleBlur}
        onChange={() => {}}
        onFocus={handleFocus}
        placeholder="Введите число"
        value=""
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    focusInput(inputElement)
    expect(handleFocus).toHaveBeenCalled()
    blurInput(inputElement)
    expect(handleBlur).toHaveBeenCalled()
  })

  test("Отображает сообщение об ошибке при невалидном состоянии", () => {
    render(
      <DecimalField
        data-testid="decimal-field"
        errorMessage="Ошибка ввода"
        id="decimal-input"
        name="decimal-input"
        onChange={() => {}}
        placeholder="Введите число"
        validationState="invalid"
        value=""
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    const errorMessage = getInputErrorValue(inputElement)
    expect(errorMessage).toBe("Ошибка ввода")
  })

  test("Разрешает ввод только чисел и точки", () => {
    const handleChange = jest.fn()
    render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onChange={handleChange}
        placeholder="Введите число"
        value=""
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    changeInput(inputElement, "abc!@#")
    expect(handleChange).not.toHaveBeenCalled()

    changeInput(inputElement, "123.45")
    expect(handleChange).toHaveBeenCalledWith("123.45", expect.anything())
  })

  test("Корректно обрабатывает пустое значение, если canEmptyString=true", () => {
    const handleChange = jest.fn()
    render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onChange={handleChange}
        placeholder="Введите число"
        value="1"
        canEmptyString
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    changeInput(inputElement, "")
    expect(handleChange).toHaveBeenCalledWith("", expect.anything())
  })

  test("Не позволяет ввод пустого значения, если canEmptyString=false", () => {
    const handleChange = jest.fn()
    render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onChange={handleChange}
        placeholder="Введите число"
        value="1"
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    changeInput(inputElement, "")
    expect(handleChange).toHaveBeenCalledWith("0", expect.anything())
  })

  test("Корректно ограничивает количество знаков после запятой", () => {
    const handleChange = jest.fn()
    render(
      <DecimalField
        accuracy={2}
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onChange={handleChange}
        placeholder="Введите число"
        value=""
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    changeInput(inputElement, "123.456")
    expect(handleChange).toHaveBeenCalledWith("123.45", expect.anything())
  })

  test("Корректно отображает иконку, если она передана", () => {
    const icon = <span>Icon</span>
    render(
      <DecimalField
        data-testid="decimal-field"
        icon={icon}
        id="decimal-input"
        name="decimal-input"
        onChange={() => {}}
        placeholder="Введите число"
        value=""
      />
    )

    const iconElement = screen.getByText("Icon")
    expect(iconElement).toBeInTheDocument()
  })

  test("Корректно отображает состояние disabled", () => {
    render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onChange={() => {}}
        placeholder="Введите число"
        value=""
        disabled
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    expect(getInputDisabled(inputElement)).toBeTruthy()
  })

  test("Корректно отображает значение value", () => {
    render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onChange={() => {}}
        placeholder="Введите число"
        value="123.45"
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    const inputValue = getInputValue(inputElement)
    expect(inputValue).toBe("123.45")
  })

  test("Корректно отображает placeholder", () => {
    render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        name="decimal-input"
        onChange={() => {}}
        placeholder="Введите число"
        value=""
      />
    )

    const placeholderElement = screen.getByText("Введите число")
    expect(placeholderElement).toBeInTheDocument()
  })

  test("Корректно отображает максимальную длину", () => {
    render(
      <DecimalField
        data-testid="decimal-field"
        id="decimal-input"
        maxLength={5}
        name="decimal-input"
        onChange={() => {}}
        placeholder="Введите число"
        value=""
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    expect(getInputAttributes(inputElement)).toHaveProperty("maxlength", "5")
  })

  test("Корректно отображает состояние validationState", () => {
    render(
      <DecimalField
        data-testid="decimal-field"
        errorMessage="Ошибка ввода"
        id="decimal-input"
        name="decimal-input"
        onChange={() => {}}
        placeholder="Введите число"
        validationState="invalid"
        value=""
      />
    )

    const inputElement = screen.getByTestId("decimal-field")
    expect(getInputErrorValue(inputElement)).toEqual("Ошибка ввода")
  })
})
