import { TextSize, TextWeight } from "../../../../enums"

import { generateClassList } from "./utils"

describe("Функция generateClassList", () => {
  test("Добавляет базовый класс itpc-link", () => {
    const result = generateClassList({ disabled: false })
    expect(result).toContain("itpc-link")
  })

  test("Добавляет класс itpc-link_disabled, когда пропс disabled=true", () => {
    const result = generateClassList({ disabled: true })
    expect(result).toContain("itpc-link_disabled")
  })

  test("Не добавляет класс itpc-link_disabled, когда пропс disabled=false", () => {
    const result = generateClassList({ disabled: false })
    expect(result).not.toContain("itpc-link_disabled")
  })

  test("Добавляет классы из generateBaseClassList", () => {
    const result = generateClassList({
      disabled: false,
      size: TextSize.M,
      through: true,
      underline: false,
      weight: TextWeight.BOLD,
    })
    expect(result).toContain("itpc-link")
    expect(result).toContain("itpc-text_size_m")
    expect(result).toContain("itpc-text_weight_bold")
    expect(result).toContain("itpc-text_through")
    expect(result).not.toContain("itpc-link_underline")
  })

  test("Объединяет пользовательский класс с базовыми классами", () => {
    const customClassName = "custom-class"
    const result = generateClassList({
      className: customClassName,
      disabled: false,
      size: TextSize.L,
      weight: TextWeight.NORMAL,
    })
    expect(result).toContain("itpc-link")
    expect(result).toContain("itpc-text_size_l")
    expect(result).toContain("itpc-text_weight_normal")
    expect(result).toContain(customClassName)
  })
})
