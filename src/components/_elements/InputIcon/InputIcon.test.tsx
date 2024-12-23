import React from "react"

import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { InputIcon } from "./index"

describe("Компонент InputIcon", () => {
  test("Рендерится с детьми (children)", () => {
    render(
      <InputIcon data-testid="input-icon">
        <span>Иконка</span>
      </InputIcon>
    )

    const iconElement = screen.getByTestId("input-icon")
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveTextContent("Иконка")
  })

  test("Применяет класс itpc-input-icon", () => {
    render(
      <InputIcon data-testid="input-icon">
        <span>Иконка</span>
      </InputIcon>
    )

    const iconElement = screen.getByTestId("input-icon")
    expect(iconElement).toHaveClass("itpc-input-icon")
  })

  test("Корректно обрабатывает событие onClick", () => {
    const handleClick = jest.fn()
    render(
      <InputIcon data-testid="input-icon" onClick={handleClick}>
        <span>Иконка</span>
      </InputIcon>
    )

    const iconElement = screen.getByTestId("input-icon")
    fireEvent.click(iconElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("Не вызывает onClick, если обработчик не передан", () => {
    const handleClick = jest.fn()
    render(
      <InputIcon data-testid="input-icon">
        <span>Иконка</span>
      </InputIcon>
    )

    const iconElement = screen.getByTestId("input-icon")
    fireEvent.click(iconElement)
    expect(handleClick).not.toHaveBeenCalled()
  })

  test("Рендерится без ошибок, если children не передан", () => {
    render(<InputIcon data-testid="input-icon" />)

    const iconElement = screen.getByTestId("input-icon")
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toBeEmptyDOMElement()
  })

  test("Рендерится корректно (snapshot)", () => {
    const { container } = render(
      <InputIcon data-testid="input-icon">
        <span>Иконка</span>
      </InputIcon>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
