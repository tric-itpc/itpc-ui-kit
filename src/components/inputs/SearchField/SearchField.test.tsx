import React from "react"

import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { KeyCode } from "../../../enums"
import {
  blurInput,
  changeInput,
  focusInput,
  getInputValue,
  keyDownInput,
} from "../../../lab/tests"

import { Props, SearchField } from "./index"

describe("Компонент SearchField", () => {
  const defaultProps: Props = {
    items: [
      { id: "1", value: "Apple" },
      { id: "2", value: "Banana" },
      { id: "3", value: "Cherry" },
    ],
    onChange: jest.fn(),
    placeholder: "Search...",
  }

  test("Рендерится с дефолтными пропсами (снимок)", () => {
    const { container } = render(
      <SearchField {...defaultProps} data-testid="search-field" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Отображает placeholder", () => {
    render(<SearchField {...defaultProps} data-testid="search-field" />)
    const input = screen.getByText("Search...")
    expect(input).toBeInTheDocument()
  })

  test("Отображает иконку, если она передана", () => {
    const icon = <span>🔍</span>
    render(
      <SearchField {...defaultProps} data-testid="search-field" icon={icon} />
    )
    const iconElement = screen.getByText("🔍")
    expect(iconElement).toBeInTheDocument()
  })

  test("Открывает выпадающий список при фокусе", () => {
    render(<SearchField {...defaultProps} data-testid="search-field" />)
    const search = screen.getByTestId("search-field")
    const input = search.children[0]

    changeInput(input as HTMLElement, "ban")
    focusInput(input as HTMLElement)

    const listBox = screen.getByRole("listbox")
    expect(listBox).toBeInTheDocument()
    expect(listBox).toHaveClass("itpc-list-box_opened")
  })

  test("Закрывает выпадающий список при потере фокуса", () => {
    render(<SearchField {...defaultProps} data-testid="search-field" />)
    const search = screen.getByTestId("search-field")
    const input = search.children[0]

    changeInput(input as HTMLElement, "ban")
    focusInput(input as HTMLElement)
    blurInput(input as HTMLElement)

    const listBox = screen.queryByRole("listbox")
    expect(listBox).toBeInTheDocument()
    expect(listBox).toHaveClass("itpc-list-box_closed")
  })

  test("Фильтрует элементы при вводе текста", () => {
    render(<SearchField {...defaultProps} data-testid="search-field" />)
    const search = screen.getByTestId("search-field")
    const input = search.children[0]

    changeInput(input as HTMLElement, "Ban")

    const filteredItem = screen.getByText("Banana")
    expect(filteredItem).toBeInTheDocument()
    expect(screen.queryByText("Apple")).not.toBeInTheDocument()
  })

  test("Вызывает onChange при выборе элемента", () => {
    render(<SearchField {...defaultProps} data-testid="search-field" />)
    const search = screen.getByTestId("search-field")
    const input = search.children[0]

    focusInput(input as HTMLElement)
    changeInput(input as HTMLElement, "Ban")

    const item = screen.getByText("Banana")
    fireEvent.click(item)

    expect(defaultProps.onChange).toHaveBeenCalledWith("2")
  })

  test("Обрабатывает навигацию с клавиатуры", () => {
    render(<SearchField {...defaultProps} data-testid="search-field" />)
    const search = screen.getByTestId("search-field")
    const input = search.children[0]

    changeInput(input as HTMLElement, "A")
    focusInput(input as HTMLElement)

    const firstItem = screen.getByText("Apple")
    expect(firstItem).toHaveClass("itpc-select-item_active")

    keyDownInput(input as HTMLElement, KeyCode.ARROW_DOWN)

    const lastItem = screen.getByText("Banana")
    expect(lastItem).toHaveClass("itpc-select-item_active")

    keyDownInput(input as HTMLElement, KeyCode.ENTER)
    expect(defaultProps.onChange).toHaveBeenCalledWith("2")
  })

  test("Очищает поле при нажатии на иконку", () => {
    const icon = <span>❌</span>
    render(
      <SearchField {...defaultProps} data-testid="search-field" icon={icon} />
    )
    const search = screen.getByTestId("search-field")
    const input = search.children[0]
    changeInput(input as HTMLElement, "Ban")

    const clearIcon = screen.getByText("❌")
    fireEvent.click(clearIcon)

    expect(getInputValue(input as HTMLElement)).toEqual("")
    expect(defaultProps.onChange).toHaveBeenCalledWith("")
  })

  test("Не очищает поле, если isDisableClickIcon = true", () => {
    const onChange = jest.fn()
    const icon = <span>❌</span>
    render(
      <SearchField
        {...defaultProps}
        data-testid="search-field"
        icon={icon}
        onChange={onChange}
        isDisableClickIcon
      />
    )
    const search = screen.getByTestId("search-field")
    const input = search.children[0]
    changeInput(input as HTMLElement, "Ban")

    const clearIcon = screen.getByText("❌")
    fireEvent.click(clearIcon)

    expect(getInputValue(input as HTMLElement)).toEqual("Ban")
    expect(onChange).not.toHaveBeenCalled()
  })

  test("Вызывает fetchData при изменении значения", async () => {
    const fetchData = jest.fn()
    render(
      <SearchField
        {...defaultProps}
        data-testid="search-field"
        fetchData={fetchData}
      />
    )
    const search = screen.getByTestId("search-field")
    const input = search.children[0]
    changeInput(input as HTMLElement, "Ban")

    await new Promise((resolve) => setTimeout(resolve, 500))

    expect(fetchData).toHaveBeenCalledWith("Ban")
  })
})
