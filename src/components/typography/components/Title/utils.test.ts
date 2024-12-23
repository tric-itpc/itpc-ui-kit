import { TextSize, TextType, TextWeight } from "../../../../enums"

import { generateClassList, getTag } from "./utils"

describe("Функция getTag", () => {
  test("Возвращает правильный тег для уровня 1", () => {
    const result = getTag(1)
    expect(result).toBe("h1")
  })

  test("Возвращает правильный тег для уровня 2", () => {
    const result = getTag(2)
    expect(result).toBe("h2")
  })

  test("Возвращает правильный тег для уровня 3", () => {
    const result = getTag(3)
    expect(result).toBe("h3")
  })

  test("Возвращает правильный тег для уровня 4", () => {
    const result = getTag(4)
    expect(result).toBe("h4")
  })

  test("Возвращает правильный тег для уровня 5", () => {
    const result = getTag(5)
    expect(result).toBe("h5")
  })

  test("Возвращает правильный тег для уровня 6", () => {
    const result = getTag(6)
    expect(result).toBe("h6")
  })

  test("Возвращает h1 по умолчанию для недопустимого уровня", () => {
    const result = getTag(7)
    expect(result).toBe("h1")
  })
})

describe("Функция generateClassList", () => {
  test("Добавляет базовый класс itpc-title", () => {
    const result = generateClassList({})
    expect(result).toContain("itpc-title")
  })

  test("Добавляет классы из generateBaseClassList", () => {
    const result = generateClassList({
      size: TextSize.M,
      through: true,
      type: TextType.SECONDARY,
      underline: false,
      weight: TextWeight.BOLD,
    })
    expect(result).toContain("itpc-title")
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
    expect(result).toContain("itpc-title")
    expect(result).toContain("itpc-text_size_l")
    expect(result).toContain("itpc-text_color_primary")
    expect(result).toContain(customClassName)
  })
})
