import React from "react"

import { fireEvent, render, screen } from "@testing-library/react"

import { getSelectButton } from "../../../lab/tests"

import { MultiSelectField } from "./index"

describe("Компонент MultiSelectField", () => {
  const items = [
    { id: "1", value: "Элемент 1" },
    { id: "2", value: "Элемент 2" },
    { disabled: true, id: "3", value: "Элемент 3" },
  ]

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
  })

  test("Корректно рендерится", () => {
    const { container } = render(
      <MultiSelectField
        data-testid="multi-select-field"
        items={items}
        onChange={() => {}}
        placeholder="Выберите элементы"
      />
    )

    const inputElement = screen.getByTestId("multi-select-field")
    expect(inputElement).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  test("Открывает и закрывает выпадающий список", () => {
    render(
      <MultiSelectField
        data-testid="multi-select-field"
        items={items}
        onChange={() => {}}
        placeholder="Выберите элементы"
      />
    )

    const inputElement = screen.getByTestId("multi-select-field")
    const buttonElement = getSelectButton(inputElement)

    fireEvent.click(buttonElement)

    const firstItem = screen.getByText("Элемент 1")
    const parentElement = firstItem.closest(".itpc-list-box")

    expect(parentElement).toBeInTheDocument()
    expect(parentElement).toHaveClass("itpc-list-box_opened")
    expect(parentElement).not.toHaveClass("itpc-list-box_closed")

    fireEvent.click(buttonElement)

    expect(parentElement).toHaveClass("itpc-list-box_closed")
    expect(parentElement).not.toHaveClass("itpc-list-box_opened")
  })

  test("Выбирает и отменяет выбор элемента", () => {
    const handleChange = jest.fn()
    const { rerender } = render(
      <MultiSelectField
        items={[
          { id: "1", value: "Элемент 1" },
          { id: "2", value: "Элемент 2" },
        ]}
        data-testid="multi-select-field"
        onChange={handleChange}
        selectedItems={[]}
      />
    )

    const inputElement = screen.getByTestId("multi-select-field")
    const buttonElement = getSelectButton(inputElement)

    fireEvent.click(buttonElement)

    const firstItem = screen.getByText("Элемент 1")
    fireEvent.click(firstItem)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenLastCalledWith(["1"])

    rerender(
      <MultiSelectField
        items={[
          { id: "1", value: "Элемент 1" },
          { id: "2", value: "Элемент 2" },
        ]}
        data-testid="multi-select-field"
        onChange={handleChange}
        selectedItems={["1"]}
      />
    )

    fireEvent.click(firstItem)

    expect(handleChange).toHaveBeenCalledTimes(2)
    expect(handleChange).toHaveBeenLastCalledWith([])
  })

  test("Выбирает несколько элементов", () => {
    const handleChange = jest.fn()
    const { rerender } = render(
      <MultiSelectField
        items={[
          { id: "1", value: "Элемент 1" },
          { id: "2", value: "Элемент 2" },
        ]}
        data-testid="multi-select-field"
        onChange={handleChange}
        selectedItems={[]}
      />
    )

    const inputElement = screen.getByTestId("multi-select-field")
    const buttonElement = getSelectButton(inputElement)

    fireEvent.click(buttonElement)

    const firstItem = screen.getByText("Элемент 1")
    fireEvent.click(firstItem)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenLastCalledWith(["1"])

    rerender(
      <MultiSelectField
        items={[
          { id: "1", value: "Элемент 1" },
          { id: "2", value: "Элемент 2" },
        ]}
        data-testid="multi-select-field"
        onChange={handleChange}
        selectedItems={["1"]}
      />
    )

    const secondItem = screen.getByText("Элемент 2")
    fireEvent.click(secondItem)

    expect(handleChange).toHaveBeenCalledTimes(2)
    expect(handleChange).toHaveBeenLastCalledWith(["1", "2"])
  })

  test("Не позволяет выбрать отключенный элемент", () => {
    const handleChange = jest.fn()
    render(
      <MultiSelectField
        items={[
          { id: "1", value: "Элемент 1" },
          { disabled: true, id: "2", value: "Элемент 2" },
        ]}
        data-testid="multi-select-field"
        onChange={handleChange}
        selectedItems={[]}
      />
    )

    const inputElement = screen.getByTestId("multi-select-field")
    const buttonElement = getSelectButton(inputElement)

    fireEvent.click(buttonElement)

    const disabledItem = screen.getByText("Элемент 2")
    fireEvent.click(disabledItem)

    expect(handleChange).not.toHaveBeenCalled()
  })

  test("Обрабатывает навигацию с клавиатуры", () => {
    const handleChange = jest.fn()
    render(
      <MultiSelectField
        data-testid="multi-select-field"
        items={items}
        onChange={handleChange}
        placeholder="Выберите элементы"
      />
    )

    const inputElement = screen.getByTestId("multi-select-field")
    const buttonElement = getSelectButton(inputElement)
    fireEvent.click(buttonElement)

    fireEvent.keyDown(buttonElement, { key: "ArrowDown" })
    const firstItem = screen.getByText("Элемент 1")
    expect(firstItem).toHaveClass("itpc-select-item_active")

    fireEvent.keyDown(buttonElement, { key: "Enter" })
    expect(handleChange).toHaveBeenCalledWith(["1"])
  })

  test("Корректно отображает выбранные элементы", () => {
    render(
      <MultiSelectField
        data-testid="multi-select-field"
        items={items}
        onChange={() => {}}
        placeholder="Выберите элементы"
        selectedItems={["1", "2"]}
      />
    )

    const inputElement = screen.getByTestId("multi-select-field")
    const buttonElement = getSelectButton(inputElement)
    expect(buttonElement).toHaveTextContent("Выбрано 2 элементов")
  })

  test("Корректно работает в отключенном состоянии", () => {
    render(
      <MultiSelectField
        data-testid="multi-select-field"
        items={items}
        onChange={() => {}}
        placeholder="Выберите элементы"
        disabled
      />
    )

    const inputElement = screen.getByTestId("multi-select-field")
    const buttonElement = getSelectButton(inputElement)
    expect(buttonElement).toBeDisabled()
  })
})
