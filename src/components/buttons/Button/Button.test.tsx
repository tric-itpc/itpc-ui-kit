import React from "react"

import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { Button, Props } from "./index"

describe("Компонент Button", () => {
  const defaultProps: Props = {
    children: "Нажми меня",
    className: "test-class",
    disabled: false,
    onPress: jest.fn(),
    type: "button",
    variant: "primary",
  }

  test("Рендерится с дефолтными пропсами (снимок)", () => {
    const { container } = render(<Button {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test.each(["primary", "red", "white"] as const)(
    "Рендерится с вариантом '%s' (снимок)",
    (variant) => {
      const { container } = render(
        <Button {...defaultProps} variant={variant} />
      )
      expect(container.firstChild).toMatchSnapshot()
    }
  )

  test.each(["button", "submit", "reset"] as const)(
    "Рендерится с типом кнопки '%s' (снимок)",
    (type) => {
      const { container } = render(<Button {...defaultProps} type={type} />)
      expect(container.firstChild).toMatchSnapshot()
    }
  )

  test("Корректно отображает текст внутри", () => {
    render(<Button {...defaultProps}>Тестовый контент</Button>)
    expect(screen.getByRole("button")).toHaveTextContent("Тестовый контент")
  })

  test("Применяет атрибут disabled, если он передан", () => {
    render(<Button {...defaultProps} disabled />)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("Вызывает onPress при клике", () => {
    const onPressMock = jest.fn()
    render(<Button {...defaultProps} onPress={onPressMock} />)
    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(onPressMock).toHaveBeenCalledTimes(1)
    expect(onPressMock).toHaveBeenCalledWith(expect.any(Object))
  })

  test("Не вызывает onPress, если кнопка отключена", () => {
    const onPressMock = jest.fn()
    render(<Button {...defaultProps} onPress={onPressMock} disabled />)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(onPressMock).not.toHaveBeenCalled()
  })

  test.each(["primary", "red", "white"] as const)(
    "Добавляет корректный класс для варианта '%s'",
    (variant) => {
      render(<Button {...defaultProps} variant={variant} />)
      expect(screen.getByRole("button")).toHaveClass(
        `itpc-button__color_${variant}`
      )
    }
  )

  test.each(["button", "submit", "reset"] as const)(
    "Устанавливает корректный тип кнопки '%s'",
    (type) => {
      render(<Button {...defaultProps} type={type} />)
      expect(screen.getByRole("button")).toHaveAttribute("type", type)
    }
  )

  test("Передаёт дополнительные атрибуты", () => {
    render(<Button {...defaultProps} data-testid="custom-button" />)
    expect(screen.getByTestId("custom-button")).toBeInTheDocument()
    expect(screen.getByTestId("custom-button")).toHaveAttribute(
      "data-testid",
      "custom-button"
    )
  })

  test("Добавляет кастомный класс, если он передан", () => {
    render(<Button {...defaultProps} className="custom-class" />)
    const button = expect(screen.getByRole("button")).toHaveClass(
      "custom-class"
    )
  })
})
