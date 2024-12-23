import React from "react"

import { fireEvent, render, screen } from "@testing-library/react"
import moment from "moment"

import { DatePicker, Props } from "./index"

describe("Компонент DatePicker", () => {
  test("Рендеринг компонента DatePicker с пустыми пропсами", () => {
    const { container } = render(<DatePicker />)
    expect(container).toMatchSnapshot()
  })

  test("Рендеринг компонента DatePicker с заданными пропсами", () => {
    const props: Props = {
      disabled: false,
      errorMessage: "Некорректная дата",
      placeholder: "Выберите дату",
      validationState: "invalid",
      value: "2022-01-01",
    }

    const { container } = render(<DatePicker {...props} />)
    expect(container).toMatchSnapshot()
  })

  test("Взаимодействие с компонентом DatePicker", () => {
    const onChangeMock = jest.fn()

    render(<DatePicker onChange={onChangeMock} />)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "01012022" } })

    expect(onChangeMock).toHaveBeenCalledWith(
      { formattedValue: "01.01.2022", value: "01012022" },
      expect.anything(),
      expect.anything()
    )
  })

  test("Выбор даты в компоненте DatePicker", () => {
    const onChangeMock = jest.fn()

    render(<DatePicker onChange={onChangeMock} />)

    const calendarIcon = screen.getByRole("iconCalendar")
    fireEvent.click(calendarIcon)

    const dateCells = screen.getAllByRole("cell")
    const firstDateCell = dateCells.find((c) => c.textContent === "1")
    fireEvent.click(firstDateCell!)

    expect(onChangeMock).toHaveBeenCalledWith(
      {
        formattedValue: `01.${moment().format("MM.YYYY")}`,
        value: `01${moment().format("MMYYYY")}`,
      },
      expect.anything(),
      expect.anything()
    )
  })

  test("Выбор времени в компоненте DatePicker", () => {
    const onChangeMock = jest.fn()

    render(<DatePicker onChange={onChangeMock} withTime />)

    const calendarIcon = screen.getByRole("iconCalendar")
    fireEvent.click(calendarIcon)

    const hoursInput = screen.getByRole("hours")
    fireEvent.change(hoursInput, { target: { value: "13" } })

    expect(onChangeMock).toHaveBeenCalledWith(
      {
        formattedValue: `${moment().format("DD.MM.YYYY")} 13:00:00`,
        value: `${moment().format("DDMMYYYY")}130000`,
      },
      expect.anything(),
      expect.anything()
    )
  })

  test("Корректность состояния компонента DatePicker после изменения даты", () => {
    const onChangeMock = jest.fn()

    render(<DatePicker onChange={onChangeMock} />)

    expect(screen.getByRole("textbox")).toHaveValue("ДД.ММ.ГГГГ")

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "01-01-2022" },
    })

    expect(screen.getByRole("textbox")).toHaveValue("01.01.2022")
  })
})
