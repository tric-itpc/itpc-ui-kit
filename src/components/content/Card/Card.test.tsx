import React from "react"

import { render, screen } from "@testing-library/react"

import { Card } from "./index"

describe("Компонент Card", () => {
  test("Снимок Card без заголовка и детей", () => {
    const { asFragment } = render(<Card title="Test Card" />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("Снимок Card с заголовком и детьми", () => {
    const { asFragment } = render(
      <Card className="custom-class" title="Test Card">
        <div>Content</div>
      </Card>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Снимок Card с рамкой", () => {
    const { asFragment } = render(<Card title="Test Card" isBordered />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("Рендер Card без заголовка и детей", () => {
    const { container } = render(<Card />)
    const card = container.querySelector(".itpc-card")

    expect(card).toHaveClass("itpc-card")

    const body = card?.querySelector(".itpc-card__body")
    expect(body).toBeInTheDocument()
    expect(body).toBeEmptyDOMElement()
  })

  test("Рендер Card с заголовком", () => {
    render(<Card title="Заголовок карточки" />)
    const title = screen.getByText("Заголовок карточки")
    expect(title).toHaveClass("itpc-card__title")
  })

  test("Рендер Card с детьми", () => {
    render(
      <Card>
        <p>Содержимое карточки</p>
      </Card>
    )
    const bodyContent = screen.getByText("Содержимое карточки")
    expect(bodyContent).toBeInTheDocument()
  })

  test("Присутствие рамки при isBordered=true", () => {
    const { container } = render(<Card isBordered />)
    const card = container.querySelector(".itpc-card")

    expect(card).toBeInTheDocument()

    expect(card).toHaveClass("itpc-card", "itpc-card_bordered")
  })

  test("Проверка передачи дополнительных атрибутов в bodyAttr", () => {
    render(
      <Card bodyAttr={{ "data-testid": "card-body" }}>
        <p>Контент</p>
      </Card>
    )
    const cardBody = screen.getByTestId("card-body")
    expect(cardBody).toHaveClass("itpc-card__body")
  })

  test("Проверка передачи дополнительных атрибутов в titleAttr", () => {
    render(
      <Card
        titleAttr={{
          "aria-label": "Тестовый заголовок",
          "data-testid": "card-title",
        }}
        title="Заголовок"
      />
    )
    const cardTitle = screen.getByTestId("card-title")
    expect(cardTitle).toHaveAttribute("aria-label", "Тестовый заголовок")
    expect(cardTitle).toHaveClass("itpc-card__title")
  })

  test("Присваивание дополнительного класса через className", () => {
    const { container } = render(<Card className="custom-class" />)
    const card = container.querySelector(".itpc-card")

    expect(card).toBeInTheDocument()

    expect(card).toHaveClass("itpc-card", "custom-class")
  })

  test("Рендер Card со всеми пропсами", () => {
    const { container } = render(
      <Card
        bodyAttr={{ "data-testid": "card-body" }}
        className="custom-class"
        title="Заголовок карточки"
        titleAttr={{ "data-testid": "card-title" }}
        isBordered
      >
        <p>Содержимое карточки</p>
      </Card>
    )

    const card = container.querySelector(".itpc-card")
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass("itpc-card", "itpc-card_bordered", "custom-class")

    const title = container.querySelector("[data-testid='card-title']")
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass("itpc-card__title")
    expect(title).toHaveTextContent("Заголовок карточки")

    const body = container.querySelector("[data-testid='card-body']")
    expect(body).toBeInTheDocument()
    expect(body).toHaveClass("itpc-card__body")
    expect(body).toHaveTextContent("Содержимое карточки")
  })
})
