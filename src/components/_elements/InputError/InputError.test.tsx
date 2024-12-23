import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { InputError } from "./index"

describe("Компонент InputError", () => {
  test("Рендерится с текстом ошибки", () => {
    render(<InputError errorMessage="Ошибка" show />)

    const errorElement = screen.getByText("Ошибка")
    expect(errorElement).toBeInTheDocument()
  })

  test("Не отображается, если show=false", () => {
    render(<InputError errorMessage="Ошибка" show={false} />)

    const errorElement = screen.queryByText("Ошибка")
    expect(errorElement).not.toHaveClass("itpc-error_show")
  })

  test("Применяет класс itpc-error_show, если show=true", () => {
    render(<InputError errorMessage="Ошибка" show />)

    const errorElement = screen.getByText("Ошибка")
    expect(errorElement).toHaveClass("itpc-error_show")
  })

  test("Не применяет класс itpc-error_show, если show=false", () => {
    render(<InputError errorMessage="Ошибка" show={false} />)

    const errorElement = screen.queryByText("Ошибка")
    expect(errorElement).not.toHaveClass("itpc-error_show")
  })

  test("Применяет класс для validationType=invalid", () => {
    render(<InputError errorMessage="Ошибка" validationType="invalid" show />)

    const errorElement = screen.getByText("Ошибка")
    expect(errorElement).toHaveClass("itpc-error_type_invalid")
  })

  test("Применяет класс для validationType=valid", () => {
    render(<InputError errorMessage="Ошибка" validationType="valid" show />)

    const errorElement = screen.getByText("Ошибка")
    expect(errorElement).toHaveClass("itpc-error_type_valid")
  })

  test("Применяет класс для validationType=warning", () => {
    render(<InputError errorMessage="Ошибка" validationType="warning" show />)

    const errorElement = screen.getByText("Ошибка")
    expect(errorElement).toHaveClass("itpc-error_type_warning")
  })

  test("Не применяет класс validationType, если он не передан", () => {
    render(<InputError errorMessage="Ошибка" show />)

    const errorElement = screen.getByText("Ошибка")
    expect(errorElement).not.toHaveClass(/itpc-error_type_/)
  })

  test("Добавляет title с текстом ошибки", () => {
    render(<InputError errorMessage="Ошибка" show />)

    const errorElement = screen.getByText("Ошибка")
    expect(errorElement).toHaveAttribute("title", "Ошибка")
  })

  test("Рендерится корректно (snapshot)", () => {
    const { container } = render(<InputError errorMessage="Ошибка" show />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
