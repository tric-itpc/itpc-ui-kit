import React from "react"

import { fireEvent, render } from "@testing-library/react"

import { Pagination } from "./index"

describe("Компонент Pagination", () => {
  test("Снимок Pagination с данными", () => {
    const { asFragment } = render(
      <Pagination callback={() => {}} dataLength={100} step={10} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Рендер компонента Pagination", () => {
    const callbackMock = jest.fn()
    const { container } = render(
      <Pagination callback={callbackMock} dataLength={100} />
    )

    const pagination = container.querySelector(".itpc-pagination")
    expect(pagination).toBeInTheDocument()
  })

  test("Кнопка 'В начало' отключена, если на первой странице", () => {
    const callbackMock = jest.fn()
    const { container } = render(
      <Pagination callback={callbackMock} dataLength={100} />
    )

    const startButton = container.querySelector(".itpc-pagination__btn_left")
    expect(startButton).toBeDisabled()
  })

  test("Кнопка 'В конец' активна, если не на последней странице", () => {
    const callbackMock = jest.fn()
    const { container } = render(
      <Pagination callback={callbackMock} dataLength={100} />
    )

    const endButton = container.querySelectorAll(
      ".itpc-pagination__btn_right"
    )[1]
    expect(endButton).not.toBeDisabled()
  })

  test("Кнопка 'На следующую страницу' вызывает callback с правильными данными", () => {
    const callbackMock = jest.fn()
    const { container } = render(
      <Pagination callback={callbackMock} dataLength={100} step={10} />
    )

    const nextButton = container.querySelector(".itpc-pagination__btn_right")
    fireEvent.click(nextButton!)

    expect(callbackMock).toHaveBeenCalledWith({
      currentPage: 2,
      end: 20,
      start: 10,
    })
  })

  test("Кнопка 'На предыдущую страницу' вызывает callback с правильными данными", () => {
    const callbackMock = jest.fn()
    const { container } = render(
      <Pagination callback={callbackMock} dataLength={100} step={10} />
    )

    const nextButton = container.querySelector(".itpc-pagination__btn_right")
    fireEvent.click(nextButton!)

    const prevButton = container.querySelector(".itpc-pagination__btn_left")
    fireEvent.click(prevButton!)

    expect(callbackMock).toHaveBeenCalledWith({
      currentPage: 1,
      end: 10,
      start: 0,
    })
  })

  test("Кнопка перехода на конкретную страницу вызывает callback с правильными данными", () => {
    const callbackMock = jest.fn()
    const { getByText } = render(
      <Pagination callback={callbackMock} dataLength={100} step={10} />
    )

    const pageButton = getByText("3")
    fireEvent.click(pageButton)

    expect(callbackMock).toHaveBeenCalledWith({
      currentPage: 3,
      end: 30,
      start: 20,
    })
  })

  test("Правильное количество кнопок страниц отображается", () => {
    const callbackMock = jest.fn()
    const { container } = render(
      <Pagination callback={callbackMock} dataLength={50} step={10} />
    )

    const pageButtons = container.querySelectorAll(".itpc-pagination__btn_page")
    expect(pageButtons).toHaveLength(5)
  })
})
