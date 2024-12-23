import React from "react"

import { fireEvent, render } from "@testing-library/react"

import { Checkbox } from "./index"

describe("Компонент Checkbox", () => {
  test("должен рендерить чекбокс с правильным состоянием", () => {
    const { getByLabelText } = render(
      <Checkbox
        id="test-checkbox"
        label="Тестовый чекбокс"
        name="test"
        isChecked
      />
    )
    const checkbox = getByLabelText("Тестовый чекбокс")
    expect((checkbox as HTMLInputElement).checked).toBe(true)
  })

  test("должен вызывать onClick при изменении состояния", () => {
    const handleClick = jest.fn()
    const { getByLabelText } = render(
      <Checkbox
        id="test-checkbox"
        isChecked={false}
        label="Тестовый чекбокс"
        name="test"
        onClick={handleClick}
      />
    )
    const checkbox = getByLabelText("Тестовый чекбокс")
    fireEvent.click(checkbox)
    expect(handleClick).toHaveBeenCalled()
  })

  test("должен быть отключен, если передан флаг disabled", () => {
    const { getByLabelText } = render(
      <Checkbox
        id="test-checkbox"
        label="Тестовый чекбокс"
        name="test"
        disabled
      />
    )
    const checkbox = getByLabelText("Тестовый чекбокс")
    expect(checkbox).toBeDisabled()
  })

  test("должен изменять состояние на основе пропса isChecked", () => {
    const { getByLabelText, rerender } = render(
      <Checkbox
        id="test-checkbox"
        isChecked={false}
        label="Тестовый чекбокс"
        name="test"
      />
    )
    const checkbox = getByLabelText("Тестовый чекбокс")

    expect((checkbox as HTMLInputElement).checked).toBe(false)

    rerender(
      <Checkbox
        id="test-checkbox"
        label="Тестовый чекбокс"
        name="test"
        isChecked
      />
    )
    expect((checkbox as HTMLInputElement).checked).toBe(true)
  })

  test("должен рендерить левую подпись, если передан labelPosition 'left' или 'all'", () => {
    const { getByText } = render(
      <Checkbox
        id="test-checkbox"
        labelLeft="Левая подпись"
        labelPosition="left"
        name="test"
      />
    )
    expect(getByText("Левая подпись")).toBeInTheDocument()
  })

  test("должен рендерить правую подпись, если передан labelPosition 'right' или 'all'", () => {
    const { getByText } = render(
      <Checkbox
        id="test-checkbox"
        label="Правая подпись"
        labelPosition="right"
        name="test"
      />
    )
    expect(getByText("Правая подпись")).toBeInTheDocument()
  })

  test("должен рендерить все подписи, если передан labelPosition 'all'", () => {
    const { getByText } = render(
      <Checkbox
        id="test-checkbox"
        label="Правая подпись"
        labelLeft="Левая подпись"
        labelPosition="all"
        name="test"
      />
    )
    expect(getByText("Левая подпись")).toBeInTheDocument()
    expect(getByText("Правая подпись")).toBeInTheDocument()
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(
      <Checkbox id="test-checkbox" label="Тестовый чекбокс" name="test" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
