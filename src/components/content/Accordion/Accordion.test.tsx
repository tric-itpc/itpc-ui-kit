import React from "react"

import { fireEvent, render, screen } from "@testing-library/react"

import {
  Accordion,
  AccordionArrow,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "./index"

describe("Компоненты Accordion", () => {
  test("Рендер Accordion с дефолтными пропсами (снимок)", () => {
    const { container } = render(
      <Accordion>
        <AccordionItem>Item 1</AccordionItem>
      </Accordion>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Рендер AccordionItem с контентом", () => {
    render(<AccordionItem>Контент</AccordionItem>)
    expect(screen.getByText("Контент")).toBeInTheDocument()
  })

  test("Рендер AccordionHeader с кликабельным состоянием", () => {
    const onPressMock = jest.fn()
    render(<AccordionHeader onPress={onPressMock}>Заголовок</AccordionHeader>)

    const header = screen.getByText("Заголовок")
    fireEvent.click(header)

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  test("Рендер AccordionArrow с правильной ориентацией в зависимости от isOpened", () => {
    const { container, rerender } = render(<AccordionArrow isOpened />)

    const iconArrow = container.querySelector(".itpc-accordion-arrow")

    expect(iconArrow?.querySelector("i")).toHaveClass(
      "itpc-icon__arrow_orientation_top"
    )

    rerender(<AccordionArrow isOpened={false} />)

    expect(iconArrow?.querySelector("i")).toHaveClass(
      "itpc-icon__arrow_orientation_bottom"
    )
  })

  test("Рендер AccordionBody с правильным классом в зависимости от isOpened", () => {
    const { container, rerender } = render(
      <AccordionBody isOpened>Контент</AccordionBody>
    )

    const accordionBody = container.querySelector(".itpc-accordion-body")

    expect(accordionBody).toHaveClass("itpc-accordion-body_opened")

    rerender(<AccordionBody isOpened={false}>Контент</AccordionBody>)

    expect(accordionBody).not.toHaveClass("itpc-accordion-body_opened")
  })

  test("Рендер AccordionHeader с активным состоянием (isActive)", () => {
    render(<AccordionHeader isActive>Активный заголовок</AccordionHeader>)
    expect(screen.getByText("Активный заголовок")).toHaveClass(
      "itpc-accordion-header_active"
    )
  })

  test("Рендер AccordionHeader с состоянием открытия (isOpened)", () => {
    render(<AccordionHeader isOpened>Заголовок открыт</AccordionHeader>)
    expect(screen.getByText("Заголовок открыт")).toHaveClass(
      "itpc-accordion-header_opened"
    )
  })

  test("AccordionBody скрыт при isOpened=false", () => {
    const { container, rerender } = render(
      <AccordionBody isOpened={false}>Контент</AccordionBody>
    )

    const accordionBody = container.querySelector(".itpc-accordion-body")

    expect(accordionBody).not.toHaveClass("itpc-accordion-body_opened")

    rerender(<AccordionBody isOpened>Контент</AccordionBody>)

    expect(accordionBody).toHaveClass("itpc-accordion-body_opened")
    expect(accordionBody).not.toHaveStyle("display: none")
  })

  test("AccordionBody показан при isOpened=true", () => {
    render(<AccordionBody isOpened>Контент</AccordionBody>)
    const body = screen.getByText("Контент")
    expect(body).toBeVisible()
  })

  test("Accordion передает кастомный класс", () => {
    render(
      <Accordion className="custom-class">
        <AccordionItem>Item 1</AccordionItem>
      </Accordion>
    )
    expect(screen.getByText("Item 1").parentElement).toHaveClass("custom-class")
  })

  test("AccordionArrow снимок", () => {
    const { container } = render(<AccordionArrow isOpened={false} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("AccordionBody снимок с isOpened=true", () => {
    const { container } = render(
      <AccordionBody isOpened>Контент</AccordionBody>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("AccordionHeader снимок с isActive и isOpened", () => {
    const { container } = render(
      <AccordionHeader isActive isOpened>
        Заголовок с состоянием
      </AccordionHeader>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("AccordionItem снимок с контентом", () => {
    const { container } = render(<AccordionItem>Item 1</AccordionItem>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
