import React from "react"

import { fireEvent, render } from "@testing-library/react"

import { TabButton, Tabs } from "./index"

describe("Компонент Tabs", () => {
  const tabItems = [
    {
      content: <div>Контент для Вкладки 1</div>,
      title: "Вкладка 1",
    },
    {
      content: <div>Контент для Вкладки 2</div>,
      title: "Вкладка 2",
    },
    {
      content: <div>Контент для Вкладки 3</div>,
      title: "Вкладка 3",
    },
  ]

  test("должен рендерить все вкладки", () => {
    const { getByText } = render(<Tabs items={tabItems} />)

    tabItems.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument()
    })
  })

  test("должен показывать контент активной вкладки", () => {
    const { getByText, queryByText } = render(<Tabs items={tabItems} />)

    expect(getByText("Контент для Вкладки 1")).toBeInTheDocument()
    expect(queryByText("Контент для Вкладки 2")).not.toBeInTheDocument()

    fireEvent.click(getByText("Вкладка 2"))
    expect(queryByText("Контент для Вкладки 1")).not.toBeInTheDocument()
    expect(getByText("Контент для Вкладки 2")).toBeInTheDocument()
  })

  test("должен переключать вкладки по клику", () => {
    const { getByText, queryByText } = render(<Tabs items={tabItems} />)

    expect(getByText("Контент для Вкладки 1")).toBeInTheDocument()

    fireEvent.click(getByText("Вкладка 2"))
    expect(queryByText("Контент для Вкладки 1")).not.toBeInTheDocument()
    expect(getByText("Контент для Вкладки 2")).toBeInTheDocument()

    fireEvent.click(getByText("Вкладка 3"))
    expect(queryByText("Контент для Вкладки 2")).not.toBeInTheDocument()
    expect(getByText("Контент для Вкладки 3")).toBeInTheDocument()
  })

  test("не должен менять вкладку, если вкладки отключены", () => {
    const { getByText, queryByText } = render(
      <Tabs items={tabItems} disabled />
    )

    expect(getByText("Контент для Вкладки 1")).toBeInTheDocument()

    fireEvent.click(getByText("Вкладка 2"))
    expect(queryByText("Контент для Вкладки 2")).not.toBeInTheDocument()
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(<Tabs items={tabItems} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("Компонент TabButton", () => {
  test("должен иметь активный стиль, если вкладка активна", () => {
    const { getByText } = render(
      <TabButton id={0} onClick={() => {}} title="Вкладка 1" isActive />
    )
    expect(getByText("Вкладка 1")).toHaveClass("itpc-tabs__button_active")
  })

  test("не должен быть активным, если вкладка не активна", () => {
    const { getByText } = render(
      <TabButton id={0} isActive={false} onClick={() => {}} title="Вкладка 1" />
    )
    expect(getByText("Вкладка 1")).not.toHaveClass("itpc-tabs__button_active")
  })

  test("должен вызывать onClick при клике", () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <TabButton
        id={0}
        isActive={false}
        onClick={handleClick}
        title="Вкладка 1"
      />
    )
    fireEvent.click(getByText("Вкладка 1"))
    expect(handleClick).toHaveBeenCalledWith(0)
  })

  test("должен быть отключен, если передан флаг disabled", () => {
    const { getByText } = render(
      <TabButton
        id={0}
        isActive={false}
        onClick={() => {}}
        title="Вкладка 1"
        disabled
      />
    )
    expect(getByText("Вкладка 1")).toBeDisabled()
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(
      <TabButton id={0} isActive={false} onClick={() => {}} title="Вкладка 1" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
