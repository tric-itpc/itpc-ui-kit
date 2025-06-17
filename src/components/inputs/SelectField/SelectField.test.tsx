import React from "react"

import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { KeyCode } from "../../../enums"
import { getSelectValue, keyDownElement } from "../../../lab/tests"

import { SelectField } from "./index"

describe("Компонент SelectField", () => {
  const defaultProps = {
    items: [
      { id: "1", value: "Apple" },
      { id: "2", value: "Banana" },
      { disabled: true, id: "3", value: "Cherry" },
    ],
    onChange: jest.fn(),
    placeholder: "Выберите элемент",
  }

  test("Рендерится с дефолтными пропсами (снимок)", () => {
    const { container } = render(
      <SelectField {...defaultProps} data-testid="select-field" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Отображает placeholder", () => {
    render(<SelectField {...defaultProps} data-testid="select-field" />)
    const placeholder = screen.getByText("Выберите элемент")
    expect(placeholder).toBeInTheDocument()
  })

  test("Отображает выбранное значение, если defaultItemId передан", () => {
    render(
      <SelectField
        {...defaultProps}
        data-testid="select-field"
        selectedItemId="1"
      />
    )
    const selectField = screen.getByTestId("select-field")
    const selectedValue = getSelectValue(selectField)
    expect(selectedValue).toEqual("Apple")
  })

  test("Открывает выпадающий список при клике на кнопку", () => {
    render(<SelectField {...defaultProps} data-testid="select-field" />)
    const selectField = screen.getByTestId("select-field")
    fireEvent.click(selectField)

    const listBox = screen.getByRole("listbox")
    expect(listBox).toBeInTheDocument()
  })

  test("Вызывает onChange при выборе элемента", () => {
    render(<SelectField {...defaultProps} data-testid="select-field" />)
    const selectField = screen.getByTestId("select-field")
    fireEvent.click(selectField)

    const item = screen.getByText("Banana")
    fireEvent.click(item)

    expect(defaultProps.onChange).toHaveBeenCalledWith("2")
  })

  test("Не позволяет выбрать отключенный элемент", () => {
    const onChange = jest.fn()
    render(
      <SelectField
        {...defaultProps}
        data-testid="select-field"
        onChange={onChange}
      />
    )
    const selectField = screen.getByTestId("select-field")
    fireEvent.click(selectField)

    const disabledItem = screen.getByText("Cherry")
    fireEvent.click(disabledItem)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("Обрабатывает навигацию с клавиатуры", () => {
    render(<SelectField {...defaultProps} data-testid="select-field" />)
    const button = screen.getByRole("button")
    fireEvent.click(button)

    keyDownElement(button, KeyCode.ARROW_DOWN)

    const firstItem = screen.getByText("Apple")
    expect(firstItem).toHaveClass("itpc-select-item_active")

    keyDownElement(button, KeyCode.ARROW_UP)

    const lastItem = screen.getByText("Banana")
    expect(lastItem).toHaveClass("itpc-select-item_active")

    keyDownElement(button, KeyCode.ENTER)
    expect(defaultProps.onChange).toHaveBeenCalledWith("2")
  })

  test("Корректно работает в отключенном состоянии", () => {
    render(
      <SelectField {...defaultProps} data-testid="select-field" disabled />
    )
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()

    fireEvent.click(button)
    const listBox = screen.queryByRole("listbox")
    expect(listBox).toHaveClass("itpc-list-box_closed")
  })

  test("Применяет кастомный класс, если он передан", () => {
    render(
      <SelectField
        {...defaultProps}
        className="custom-class"
        data-testid="select-field"
      />
    )
    const selectField = screen.getByTestId("select-field")
    expect(selectField).toHaveClass("custom-class")
  })
})
