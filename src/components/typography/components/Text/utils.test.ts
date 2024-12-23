import { TextSize, TextTag, TextType, TextWeight } from "../../../../enums"

import { generateClassList, getTag } from "./utils"

describe("Функция getTag", () => {
  test("Возвращает тег 'p' для TextTag.PARAGRAPH", () => {
    const result = getTag(TextTag.PARAGRAPH)
    expect(result).toBe("p")
  })

  test("Возвращает тег 'code' для TextTag.CODE", () => {
    const result = getTag(TextTag.CODE)
    expect(result).toBe("code")
  })

  test("Возвращает тег 'em' для TextTag.EM", () => {
    const result = getTag(TextTag.EM)
    expect(result).toBe("em")
  })

  test("Возвращает тег 'strong' для TextTag.STRONG", () => {
    const result = getTag(TextTag.STRONG)
    expect(result).toBe("strong")
  })
})

describe("Функция generateClassList", () => {
  test("Добавляет базовый класс itpc-text", () => {
    const result = generateClassList({})
    expect(result).toContain("itpc-text")
  })

  test("Добавляет классы из generateBaseClassList", () => {
    const result = generateClassList({
      size: TextSize.M,
      through: true,
      type: TextType.SECONDARY,
      underline: false,
      weight: TextWeight.BOLD,
    })
    expect(result).toContain("itpc-text")
    expect(result).toContain("itpc-text_size_m")
    expect(result).toContain("itpc-text_color_secondary")
    expect(result).toContain("itpc-text_through")
    expect(result).not.toContain("itpc-text_underline")
    expect(result).toContain("itpc-text_weight_bold")
  })

  test("Объединяет пользовательский класс с базовыми классами", () => {
    const customClassName = "custom-class"
    const result = generateClassList({
      className: customClassName,
      size: TextSize.L,
      type: TextType.PRIMARY,
    })
    expect(result).toContain("itpc-text")
    expect(result).toContain("itpc-text_size_l")
    expect(result).toContain("itpc-text_color_primary")
    expect(result).toContain(customClassName)
  })
})
