import { Decimal } from "decimal.js-light"

import { DecimalFixed } from "./index"

describe("DecimalFixed", () => {
  test("Создание экземпляра с целым числом", () => {
    const decimal = new DecimalFixed("123")
    expect(decimal.int).toBe(123)
    expect(decimal.fraction).toBeNull()
  })

  test("Создание экземпляра с дробным числом", () => {
    const decimal = new DecimalFixed("123.456", 2)
    expect(decimal.int).toBe(123)
    expect(decimal.fraction).toBe("45") // Обрезка до 2 знаков
  })

  test("Создание экземпляра с пустым значением", () => {
    const decimal = new DecimalFixed("", null, true)
    expect(decimal.int).toBeNull()
    expect(decimal.fraction).toBeNull()
    expect(decimal.isEmpty()).toBe(true)
  })

  test("Корректное округление дробной части", () => {
    const decimal = new DecimalFixed("78.123456", 4)
    expect(decimal.fraction).toBe("1234") // Обрезка до 4 знаков
  })

  test("Корректность isValid()", () => {
    expect(new DecimalFixed("123.45").isValid()).toBe(true)
    expect(new DecimalFixed("abc").isValid()).toBe(false)
    expect(new DecimalFixed("123.xyz").isValid()).toBe(false)
  })

  test("Корректность isZero()", () => {
    expect(new DecimalFixed("0").isZero()).toBe(true)
    expect(new DecimalFixed("0.00").isZero()).toBe(true)
    expect(new DecimalFixed("1").isZero()).toBe(false)
  })

  test("Метод plus()", () => {
    const decimal = new DecimalFixed("5.5")
    expect(decimal.plus("2.5").toString()).toBe("8")
  })

  test("Метод minus()", () => {
    const decimal = new DecimalFixed("10.5")
    expect(decimal.minus("3.5").toString()).toBe("7")
  })

  test("Методы сравнения", () => {
    const decimal1 = new DecimalFixed("5.5")
    const decimal2 = new DecimalFixed("3.3")
    expect(decimal1.greaterThan(decimal2.toDecimal())).toBe(true)
    expect(decimal1.lessThan(decimal2.toDecimal())).toBe(false)
  })

  test("Метод toString()", () => {
    const decimal = new DecimalFixed("123.45")
    expect(decimal.toString()).toBe("123.45")
  })

  test("Метод toDecimal()", () => {
    const decimal = new DecimalFixed("7.89")
    expect(decimal.toDecimal()).toBeInstanceOf(Decimal)
    expect(decimal.toDecimal().toString()).toBe("7.89")
  })
})
