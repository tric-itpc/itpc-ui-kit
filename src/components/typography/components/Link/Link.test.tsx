import React from "react"

import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { Link } from "./index"

describe("Компонент Link", () => {
  test("Рендерится с детьми (children)", () => {
    render(
      <Link data-testid="link-container">
        <span>Текст ссылки</span>
      </Link>
    )
    const linkContainer = screen.getByTestId("link-container")
    expect(linkContainer).toBeInTheDocument()
    expect(linkContainer).toHaveTextContent("Текст ссылки")
  })

  test("Применяет класс itpc-link по умолчанию", () => {
    render(<Link data-testid="link-container">Текст ссылки</Link>)
    const linkContainer = screen.getByTestId("link-container")
    expect(linkContainer).toHaveClass("itpc-link")
  })

  test("Применяет класс itpc-link_disabled, когда пропс disabled=true", () => {
    render(
      <Link data-testid="link-container" disabled>
        Текст ссылки
      </Link>
    )
    const linkContainer = screen.getByTestId("link-container")
    expect(linkContainer).toHaveClass("itpc-link_disabled")
  })

  test("Не вызывает onClick, когда пропс disabled=true", () => {
    const mockOnClick = jest.fn()
    render(
      <Link data-testid="link-container" onClick={mockOnClick} disabled>
        Текст ссылки
      </Link>
    )
    const linkContainer = screen.getByTestId("link-container")
    fireEvent.click(linkContainer)
    expect(mockOnClick).not.toHaveBeenCalled()
  })

  test("Вызывает onClick при клике на ссылку", () => {
    const mockOnClick = jest.fn()
    render(
      <Link data-testid="link-container" onClick={mockOnClick}>
        Текст ссылки
      </Link>
    )
    const linkContainer = screen.getByTestId("link-container")
    fireEvent.click(linkContainer)
    expect(mockOnClick).toHaveBeenCalled()
  })

  test("Применяет дополнительные стили через props style", () => {
    render(
      <Link
        data-testid="link-container"
        style={{ color: "red", textDecoration: "underline" }}
      >
        Текст ссылки
      </Link>
    )
    const linkContainer = screen.getByTestId("link-container")
    expect(linkContainer).toHaveStyle("color: red")
    expect(linkContainer).toHaveStyle("text-decoration: underline")
  })
})
