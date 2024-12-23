import React from "react"

import { fireEvent, render } from "@testing-library/react"

import {
  Cell,
  Table,
  TableBody,
  TableColumn,
  TableFooter,
  TableHeader,
  TableRow,
} from "./index"

describe("Компонент Table", () => {
  test("должен корректно рендериться с children", () => {
    const { getByText } = render(<Table>Содержимое таблицы</Table>)
    expect(getByText("Содержимое таблицы")).toBeInTheDocument()
  })

  test("должен рендерить заголовок, если он передан", () => {
    const { getByText } = render(
      <Table title="Заголовок таблицы">Содержимое</Table>
    )
    expect(getByText("Заголовок таблицы")).toBeInTheDocument()
  })

  test("должен применять переданный className", () => {
    const { container } = render(
      <Table className="custom-class">Содержимое</Table>
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(<Table>Содержимое таблицы</Table>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("Компонент TableHeader", () => {
  test("должен корректно рендериться с children", () => {
    const { getByText } = render(<TableHeader>Заголовок</TableHeader>)
    expect(getByText("Заголовок")).toBeInTheDocument()
  })

  test("должен применять переданный id", () => {
    const { container } = render(
      <TableHeader id="header-id">Заголовок</TableHeader>
    )
    expect(container.firstChild).toHaveAttribute("id", "header-id")
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(<TableHeader>Заголовок</TableHeader>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("Компонент TableBody", () => {
  test("должен корректно рендериться с children", () => {
    const { getByText } = render(<TableBody>Содержимое</TableBody>)
    expect(getByText("Содержимое")).toBeInTheDocument()
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(<TableBody>Содержимое</TableBody>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("Компонент TableFooter", () => {
  test("должен корректно рендериться с children", () => {
    const { getByText } = render(<TableFooter>Футер</TableFooter>)
    expect(getByText("Футер")).toBeInTheDocument()
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(<TableFooter>Футер</TableFooter>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("Компонент TableRow", () => {
  test("должен корректно рендериться с children", () => {
    const { getByText } = render(<TableRow>Строка</TableRow>)
    expect(getByText("Строка")).toBeInTheDocument()
  })

  test("должен вызывать onPressRow при клике", () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <TableRow onPressRow={handleClick}>Кликни меня</TableRow>
    )
    fireEvent.click(getByText("Кликни меня"))
    expect(handleClick).toHaveBeenCalled()
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(<TableRow>Строка</TableRow>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("КомпонентTableColumn", () => {
  test("должен корректно рендериться с children", () => {
    const { getByText } = render(<TableColumn>Колонка</TableColumn>)
    expect(getByText("Колонка")).toBeInTheDocument()
  })

  test("должен вызывать onPressColumn при клике", () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <TableColumn onPressColumn={handleClick}>Кликни колонку</TableColumn>
    )
    fireEvent.click(getByText("Кликни колонку"))
    expect(handleClick).toHaveBeenCalled()
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(<TableColumn>Колонка</TableColumn>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("Компонент Cell", () => {
  test("должен корректно рендериться с children", () => {
    const { getByText } = render(<Cell>Ячейка</Cell>)
    expect(getByText("Ячейка")).toBeInTheDocument()
  })

  test("должен вызывать onPressCell при клике", () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Cell onPressCell={handleClick}>Кликни ячейку</Cell>
    )
    fireEvent.click(getByText("Кликни ячейку"))
    expect(handleClick).toHaveBeenCalled()
  })

  test("должен соответствовать снапшоту", () => {
    const { asFragment } = render(<Cell>Ячейка</Cell>)
    expect(asFragment()).toMatchSnapshot()
  })
})
