import React from "react"

import { render, screen } from "@testing-library/react"

import { Popup } from "./index"

describe("Компонент Popup", () => {
  test("Рендер с обязательными пропсами", () => {
    render(<Popup title="Заголовок" isOpen />)

    expect(screen.getByText("Заголовок")).toBeInTheDocument()
    expect(screen.getByRole("popup")).toHaveClass("itpc-popup_opened")
  })

  test("Закрыт при isOpen=false", () => {
    render(<Popup isOpen={false} title="Заголовок" />)

    expect(screen.getByRole("popup", { hidden: true })).toHaveClass(
      "itpc-popup_closed"
    )
  })

  test("Рендер с иконкой закрытия", () => {
    render(
      <Popup
        iconClose={<span data-testid="close-icon">×</span>}
        title="Заголовок"
        isOpen
      />
    )

    expect(screen.getByTestId("close-icon")).toBeInTheDocument()
  })

  test("Рендер с контентом", () => {
    render(
      <Popup title="Заголовок" isOpen>
        <p>Контент попапа</p>
      </Popup>
    )

    expect(screen.getByText("Контент попапа")).toBeInTheDocument()
  })

  test("Применение дополнительных классов", () => {
    render(<Popup className="custom-class" title="Заголовок" isOpen />)

    expect(screen.getByRole("popup")).toHaveClass("custom-class")
  })

  test("Применение позиции", () => {
    render(<Popup position="top-left" title="Заголовок" isOpen />)

    expect(screen.getByRole("popup")).toHaveStyle({ left: "1rem", top: "1rem" })
  })

  test("Применение размера normal", () => {
    render(
      <Popup size="normal" title="Заголовок" isOpen>
        <p>Контент попапа</p>
      </Popup>
    )

    expect(screen.getByText("Контент попапа")).toBeInTheDocument()
  })

  test("Применение варианта success", () => {
    render(<Popup title="Заголовок" variant="success" isOpen />)

    expect(screen.getByRole("popup")).toHaveClass("itpc-popup_color_success")
  })

  test("Рендер с иконкой закрытия (снапшот)", () => {
    const { asFragment } = render(
      <Popup
        iconClose={<span data-testid="close-icon">×</span>}
        title="Заголовок"
        isOpen
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Рендер с контентом (снапшот)", () => {
    const { asFragment } = render(
      <Popup title="Заголовок" isOpen>
        <p>Контент попапа</p>
      </Popup>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Применение дополнительных классов (снапшот)", () => {
    const { asFragment } = render(
      <Popup className="custom-class" title="Заголовок" isOpen />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Применение позиции (снапшот)", () => {
    const { asFragment } = render(
      <Popup position="top-left" title="Заголовок" isOpen />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Применение размера normal (снапшот)", () => {
    const { asFragment } = render(
      <Popup size="normal" title="Заголовок" isOpen>
        <p>Контент попапа</p>
      </Popup>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Применение варианта success (снапшот)", () => {
    const { asFragment } = render(
      <Popup title="Заголовок" variant="success" isOpen />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
