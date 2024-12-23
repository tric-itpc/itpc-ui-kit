import React from "react"

import { fireEvent, render, screen } from "@testing-library/react"

import { ButtonRound, Props } from "./index"

describe("Компонент ButtonRound", () => {
  const defaultProps: Props = {
    children: "Круглая кнопка",
    className: "test-class",
    disabled: false,
    onPress: jest.fn(),
    tooltip: "Подсказка",
    tooltipAttr: { "data-testid": "tooltip" },
    type: "button",
  }

  test("Рендерится с дефолтными пропсами (снимок)", () => {
    const { container } = render(<ButtonRound {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test.each(["button", "submit", "reset"] as const)(
    "Рендерится с типом кнопки '%s' (снимок)",
    (type) => {
      const { container } = render(
        <ButtonRound {...defaultProps} type={type} />
      )
      expect(container.firstChild).toMatchSnapshot()
    }
  )

  test("Корректно отображает текст внутри", () => {
    render(<ButtonRound {...defaultProps}>Контент кнопки</ButtonRound>)
    expect(screen.getByRole("button")).toHaveTextContent("Контент кнопки")
  })

  test("Применяет атрибут disabled, если он передан", () => {
    render(<ButtonRound {...defaultProps} disabled />)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })

  test("Вызывает onPress при клике", () => {
    const onPressMock = jest.fn()
    render(<ButtonRound {...defaultProps} onPress={onPressMock} />)
    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(onPressMock).toHaveBeenCalledTimes(1)
    expect(onPressMock).toHaveBeenCalledWith(expect.any(Object)) // Проверка, что вызов был с событием
  })

  test("Не вызывает onPress, если кнопка отключена", () => {
    const onPressMock = jest.fn()
    render(<ButtonRound {...defaultProps} onPress={onPressMock} disabled />)
    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(onPressMock).not.toHaveBeenCalled()
  })

  test("Добавляет кастомный класс, если он передан", () => {
    render(<ButtonRound {...defaultProps} className="custom-class" />)
    const button = screen.getByRole("button")

    expect(button).toHaveClass("custom-class")
  })

  test("Отображает подсказку, если она передана", () => {
    render(<ButtonRound {...defaultProps} tooltip="Тестовая подсказка" />)
    const tooltip = screen.getByTestId("tooltip")

    expect(tooltip).toBeInTheDocument()
    expect(tooltip).toHaveTextContent("Тестовая подсказка")
  })

  test("Не отображает подсказку, если она не передана", () => {
    render(<ButtonRound {...defaultProps} tooltip={undefined} />)
    const tooltip = screen.queryByTestId("tooltip")

    expect(tooltip).not.toBeInTheDocument()
  })

  test("Передаёт дополнительные атрибуты подсказке", () => {
    render(<ButtonRound {...defaultProps} tooltip="Тестовая подсказка" />)
    const tooltip = screen.getByTestId("tooltip")

    expect(tooltip).toHaveAttribute("data-testid", "tooltip")
  })

  test("Передаёт дополнительные атрибуты кнопке", () => {
    render(<ButtonRound {...defaultProps} data-testid="button-round" />)
    const button = screen.getByTestId("button-round")

    expect(button).toBeInTheDocument()
  })
})
