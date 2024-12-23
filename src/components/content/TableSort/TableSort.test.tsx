import React from "react"

import { fireEvent, render, screen, waitFor } from "@testing-library/react"

import { NumberColumns } from "../../../enums"

import { Column } from "./types"

import { TableSort } from "./index"

interface RowType {
  age: number
  id: string
  location: string
  name: string
}

const columns: Column<RowType>[] = [
  { isSortable: true, name: "name", title: "Name" },
  { isSortable: true, name: "age", title: "Age" },
  { isSortable: false, name: "location", title: "Location" },
]

const rows: RowType[] = [
  { age: 30, id: "1", location: "New York", name: "Alice" },
  { age: 25, id: "2", location: "Los Angeles", name: "Bob" },
  { age: 35, id: "3", location: "Chicago", name: "Charlie" },
]

describe("Компонент TableSort", () => {
  test("должен корректно рендериться", () => {
    const { container } = render(
      <TableSort columns={columns} rows={rows} title="Test Table" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("должен отображать заголовок таблицы", () => {
    render(<TableSort columns={columns} rows={rows} title="Test Table" />)
    const tableElement = screen.getByTitle("Test Table")
    expect(tableElement).toBeInTheDocument()
  })

  test("должен корректно отображать колонки", () => {
    render(<TableSort columns={columns} rows={rows} title="Test Table" />)
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Age")).toBeInTheDocument()
    expect(screen.getByText("Location")).toBeInTheDocument()
  })

  test("должен сортировать данные по возрастанию при клике на заголовок", () => {
    const columns = [
      { isSortable: true, name: "name", title: "Name" },
      {
        isSortable: true,
        name: "age",
        sorter: (a: RowType, b: RowType) => a.age - b.age,
        title: "Age",
      },
      { isSortable: true, name: "location", title: "Location" },
    ]

    const rows = [
      { age: 30, id: "1", location: "New York", name: "Alice" },
      { age: 25, id: "2", location: "Los Angeles", name: "Bob" },
      { age: 35, id: "3", location: "Chicago", name: "Charlie" },
    ]

    render(<TableSort columns={columns} rows={rows} title="Test Table" />)

    const ageHeader = screen.getAllByRole("columnheader")[1]
    const beforeSortedRows = screen.getAllByRole("row").slice(1)

    expect(beforeSortedRows[0].children[0].textContent).toBe("Alice")
    expect(beforeSortedRows[1].children[0].textContent).toBe("Bob")
    expect(beforeSortedRows[2].children[0].textContent).toBe("Charlie")

    expect(beforeSortedRows[0].children[1].textContent).toBe("30")
    expect(beforeSortedRows[1].children[1].textContent).toBe("25")
    expect(beforeSortedRows[2].children[1].textContent).toBe("35")

    fireEvent.click(ageHeader)

    const sortedRows = screen.getAllByRole("row").slice(1)

    waitFor(() => {
      expect(sortedRows[0].children[0].textContent).toBe("Bob")
      expect(sortedRows[1].children[0].textContent).toBe("Alice")
      expect(sortedRows[2].children[0].textContent).toBe("Charlie")

      expect(sortedRows[0].children[1].textContent).toBe("25")
      expect(sortedRows[1].children[1].textContent).toBe("30")
      expect(sortedRows[2].children[1].textContent).toBe("35")
    })
  })

  test("должен сортировать данные по убыванию при повторном клике на заголовок", () => {
    render(<TableSort columns={columns} rows={rows} title="Test Table" />)

    const ageColumn = screen.getByText("Age")
    fireEvent.click(ageColumn) // Сортировка по возрасту по возрастанию
    fireEvent.click(ageColumn) // Сортировка по возрасту по убыванию

    const rowsAfterSortDesc = screen.getAllByRole("row")

    waitFor(() => {
      expect(rowsAfterSortDesc[1].textContent).toContain("Charlie")
      expect(rowsAfterSortDesc[2].textContent).toContain("Alice")
      expect(rowsAfterSortDesc[3].textContent).toContain("Bob")
    })
  })

  test("должен корректно сортировать данные по двум колонкам", () => {
    const updatedColumns = [
      { isSortable: true, name: "name", title: "Name" },
      { isSortable: true, name: "age", title: "Age" },
    ]

    const updatedRows = [
      { age: "30", id: "1", location: "New York", name: "Alice" },
      { age: "25", id: "2", location: "Los Angeles", name: "Bob" },
      { age: "30", id: "3", location: "Chicago", name: "Charlie" },
    ]

    render(
      <TableSort
        columns={updatedColumns}
        rows={updatedRows}
        sortByNumberColumns={NumberColumns.TWO}
        title="Test Table"
      />
    )

    const nameColumn = screen.getByText("Name")
    fireEvent.click(nameColumn) // Сортировка по имени

    const rowsAfterSort = screen.getAllByRole("row")

    waitFor(() => {
      expect(rowsAfterSort[1].textContent).toContain("Alice")
      expect(rowsAfterSort[2].textContent).toContain("Bob")
      expect(rowsAfterSort[3].textContent).toContain("Charlie")
    })
  })
})
