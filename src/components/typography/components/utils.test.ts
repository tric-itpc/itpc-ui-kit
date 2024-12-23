import { TextSize, TextType, TextWeight } from "../../../enums"

import { generateBaseClassList } from "./utils"

describe("Функция generateBaseClassList", () => {
  test("Не добавляет классы, если все свойства не определены", () => {
    const result = generateBaseClassList({})
    expect(result).toBe("")
  })

  test("Добавляет класс itpc-text_color_{type} при наличии пропса type", () => {
    const result = generateBaseClassList({ type: TextType.PRIMARY })
    expect(result).toContain("itpc-text_color_primary")
  })

  test("Добавляет класс itpc-text_size_{size} при наличии пропса size", () => {
    const result = generateBaseClassList({ size: TextSize.M })
    expect(result).toContain("itpc-text_size_m")
  })

  test("Добавляет класс itpc-text_weight_{weight} при наличии пропса weight", () => {
    const result = generateBaseClassList({ weight: TextWeight.BOLD })
    expect(result).toContain("itpc-text_weight_bold")
  })

  test("Добавляет класс itpc-text_through при presence пропса through", () => {
    const result = generateBaseClassList({ through: true })
    expect(result).toContain("itpc-text_through")
  })

  test("Добавляет класс itpc-text_underline при presence пропса underline", () => {
    const result = generateBaseClassList({ underline: true })
    expect(result).toContain("itpc-text_underline")
  })

  test("Объединяет пользовательский класс с базовыми классами", () => {
    const customClassName = "custom-class"
    const result = generateBaseClassList({
      className: customClassName,
      size: TextSize.L,
      through: true,
      type: TextType.SECONDARY,
      underline: false,
      weight: TextWeight.NORMAL,
    })
    expect(result).toContain("itpc-text_color_secondary")
    expect(result).toContain("itpc-text_size_l")
    expect(result).toContain("itpc-text_weight_normal")
    expect(result).toContain("itpc-text_through")
    expect(result).not.toContain("itpc-text_underline")
    expect(result).toContain(customClassName)
  })
})
