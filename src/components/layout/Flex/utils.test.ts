import { generateClassList } from "./utils"

describe("Утилита generateClassList", () => {
  test("Генерирует базовый класс itpc-flex", () => {
    const classList = generateClassList({})
    expect(classList).toBe("itpc-flex")
  })

  test("Добавляет класс itpc-flex_direction_vertical, если vertical=true", () => {
    const classList = generateClassList({ vertical: true })
    expect(classList).toContain("itpc-flex_direction_vertical")
  })

  test("Добавляет класс itpc-flex_wrap_wrap, если wrap=wrap", () => {
    const classList = generateClassList({ wrap: "wrap" })
    expect(classList).toContain("itpc-flex_wrap_wrap")
  })

  test("Добавляет класс itpc-flex_justify_center, если justify=center", () => {
    const classList = generateClassList({ justify: "center" })
    expect(classList).toContain("itpc-flex_justify_center")
  })

  test("Добавляет класс itpc-flex_align_center, если align=center", () => {
    const classList = generateClassList({ align: "center" })
    expect(classList).toContain("itpc-flex_align_center")
  })

  test("Добавляет переданный className", () => {
    const classList = generateClassList({ className: "custom-class" })
    expect(classList).toContain("custom-class")
  })
})
