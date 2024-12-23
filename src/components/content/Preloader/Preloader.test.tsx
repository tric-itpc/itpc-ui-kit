import React from "react"

import { render, screen } from "@testing-library/react"

import { Preloader } from "./index"

describe("Компонент Preloader", () => {
  test("Рендер с обязательными пропсами", () => {
    render(<Preloader />)
    const preloader = screen.getByRole("preloader")
    expect(preloader).toBeInTheDocument()
    expect(preloader).toHaveClass("itpc-preloader")
  })

  test("Применение дополнительных классов", () => {
    render(<Preloader className="custom-class" />)
    const preloader = screen.getByRole("preloader")
    expect(preloader).toHaveClass("custom-class")
  })

  test("Применение дополнительных атрибутов", () => {
    render(<Preloader aria-label="loading" className="custom-class" />)
    const preloader = screen.getByLabelText("loading")
    expect(preloader).toBeInTheDocument()
    expect(preloader).toHaveClass("itpc-preloader", "custom-class")
  })

  test("Снапшот с обязательными пропсами", () => {
    const { asFragment } = render(<Preloader />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("Снапшот с дополнительным классом", () => {
    const { asFragment } = render(<Preloader className="custom-class" />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("Снапшот с дополнительными атрибутами", () => {
    const { asFragment } = render(
      <Preloader aria-label="loading" className="custom-class" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
