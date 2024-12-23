import React, { createRef } from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { ListBox } from "./index"

describe("Компонент ListBox", () => {
  const parentRef = createRef<HTMLDivElement>()
  const childrenRef = createRef<HTMLUListElement>()

  test("Рендерится с детьми (children)", () => {
    render(
      <ListBox
        data-testid="list-box"
        durationAnimation={{ durationClose: 300, durationOpen: 300 }}
        refChildren={childrenRef}
        refParent={parentRef}
        isOpen
      >
        <li>Элемент 1</li>
        <li>Элемент 2</li>
      </ListBox>
    )

    const listBox = screen.getByTestId("list-box")
    expect(listBox).toBeInTheDocument()
    expect(listBox).toHaveTextContent("Элемент 1")
    expect(listBox).toHaveTextContent("Элемент 2")
  })

  test("Применяет класс itpc-list-box_opened, если isOpen=true", () => {
    render(
      <ListBox
        data-testid="list-box"
        durationAnimation={{ durationClose: 300, durationOpen: 300 }}
        refChildren={childrenRef}
        refParent={parentRef}
        isOpen
      />
    )

    const listBox = screen.getByTestId("list-box")
    expect(listBox).toHaveClass("itpc-list-box_opened")
  })

  test("Применяет класс itpc-list-box_closed, если isOpen=false", () => {
    render(
      <ListBox
        data-testid="list-box"
        durationAnimation={{ durationClose: 300, durationOpen: 300 }}
        isOpen={false}
        refChildren={childrenRef}
        refParent={parentRef}
      />
    )

    const listBox = screen.getByTestId("list-box")
    expect(listBox).toHaveClass("itpc-list-box_closed")
  })
})
