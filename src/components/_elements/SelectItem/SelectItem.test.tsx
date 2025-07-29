import React from "react"

import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { SelectItem } from "./index"

describe("Компонент SelectItem", () => {
  const handleChange = jest.fn()

  test("Рендерится с детьми (children)", () => {
    render(
      <SelectItem
        data-testid="select-item"
        id="item-1"
        itemIndex={0}
        onChange={handleChange}
      >
        Элемент 1
      </SelectItem>
    )

    const selectItem = screen.getByTestId("select-item")
    expect(selectItem).toBeInTheDocument()
    expect(selectItem).toHaveTextContent("Элемент 1")
  })

  test("Применяет класс itpc-select-item_clickable, если не disabled", () => {
    render(
      <SelectItem
        data-testid="select-item"
        id="item-1"
        itemIndex={0}
        onChange={handleChange}
      >
        Элемент 1
      </SelectItem>
    )

    const selectItem = screen.getByTestId("select-item")
    expect(selectItem).toHaveClass("itpc-select-item_clickable")
  })

  test("Применяет класс itpc-select-item_disabled, если disabled=true", () => {
    render(
      <SelectItem
        data-testid="select-item"
        id="item-1"
        itemIndex={0}
        onChange={handleChange}
        disabled
      >
        Элемент 1
      </SelectItem>
    )

    const selectItem = screen.getByTestId("select-item")
    expect(selectItem).toHaveClass("itpc-select-item_disabled")
  })

  test("Применяет класс itpc-select-item_selected, если isActive=true и не активный индекс", () => {
    render(
      <SelectItem
        data-testid="select-item"
        id="item-1"
        itemIndex={0}
        onChange={handleChange}
        isActive
      >
        Элемент 1
      </SelectItem>
    )

    const selectItem = screen.getByTestId("select-item")
    expect(selectItem).toHaveClass("itpc-select-item_selected")
  })

  test("Применяет класс itpc-select-item_active, если activeIndex === itemIndex", () => {
    render(
      <SelectItem
        activeIndex={0}
        data-testid="select-item"
        id="item-1"
        itemIndex={0}
        onChange={handleChange}
      >
        Элемент 1
      </SelectItem>
    )

    const selectItem = screen.getByTestId("select-item")
    expect(selectItem).toHaveClass("itpc-select-item_active")
  })

  test("Вызывает onChange при клике, если не disabled", () => {
    render(
      <SelectItem
        data-testid="select-item"
        id="item-1"
        itemIndex={0}
        onChange={handleChange}
      >
        Элемент 1
      </SelectItem>
    )

    const selectItem = screen.getByTestId("select-item")
    fireEvent.click(selectItem)
    expect(handleChange).toHaveBeenCalledWith("item-1")
  })

  test("Не вызывает onChange при клике, если disabled=true", () => {
    const onChange = jest.fn()

    render(
      <SelectItem
        data-testid="select-item"
        id="item-1"
        itemIndex={0}
        onChange={onChange}
        disabled
      >
        Элемент 1
      </SelectItem>
    )

    const selectItem = screen.getByTestId("select-item")
    fireEvent.click(selectItem)
    expect(onChange).not.toHaveBeenCalled()
  })

  test("Показывает itpc-select-item__stick, если isActive=true", () => {
    render(
      <SelectItem
        data-testid="select-item"
        id="item-1"
        itemIndex={0}
        onChange={handleChange}
        isActive
      >
        Элемент 1
      </SelectItem>
    )

    const stickElement = screen.getByTestId("select-item").firstChild
    expect(stickElement).toHaveClass("itpc-select-item__stick_showed")
  })
})
