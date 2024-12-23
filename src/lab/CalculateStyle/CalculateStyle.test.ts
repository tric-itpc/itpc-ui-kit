import { RefObject } from "react"

import {
  ALLOWED_POSITIONS,
  GetHorizontalPositionArg,
  HORIZONTAL_POSITION,
  PositionType,
  VERTICAL_POSITION,
} from "./types"

import {
  getCalculatePosition,
  getHorizontalPosition,
  getVerticalPosition,
} from "./index"

const createMockRef = <T>(value: T) => ({
  current: value,
})

describe("Функция getHorizontalPosition", () => {
  test("Возвращает CALCULATED, если currentWidth не определен", () => {
    const arg: GetHorizontalPositionArg = {
      defaultParentWidth: undefined,
      distanceRight: 10,
      documentWidth: 800,
      elementWidth: 0,
      parentLeft: 20,
      parentWidth: 300,
      scrollbarWidth: 17,
    }
    const result = getHorizontalPosition(arg)
    expect(result).toBe(HORIZONTAL_POSITION.CALCULATED)
  })

  test("Возвращает LEFT, если parentWidth > currentWidth", () => {
    const arg: GetHorizontalPositionArg = {
      defaultParentWidth: 500,
      distanceRight: 10,
      documentWidth: 800,
      elementWidth: 200,
      parentLeft: 20,
      parentWidth: 300,
      scrollbarWidth: 17,
    }
    const result = getHorizontalPosition(arg)
    expect(result).toBe(HORIZONTAL_POSITION.LEFT)
  })

  test("Возвращает CENTER, если условия для центрирования выполнены", () => {
    const arg: GetHorizontalPositionArg = {
      defaultParentWidth: 500,
      distanceRight: 10,
      documentWidth: 800,
      elementWidth: 410,
      parentLeft: 20,
      parentWidth: 400,
      scrollbarWidth: 17,
    }
    const result = getHorizontalPosition(arg)
    expect(result).toBe(HORIZONTAL_POSITION.CENTER)
  })

  test("Возвращает RIGHT, если parentWidth + parentLeft > currentWidth", () => {
    const arg: GetHorizontalPositionArg = {
      defaultParentWidth: 500,
      distanceRight: 0,
      documentWidth: 800,
      elementWidth: 250,
      parentLeft: 20,
      parentWidth: 240,
      scrollbarWidth: 17,
    }
    const result = getHorizontalPosition(arg)
    expect(result).toBe(HORIZONTAL_POSITION.RIGHT)
  })

  test("Возвращает CALCULATED, если documentWidth - scrollbarWidth < currentWidth", () => {
    const arg: GetHorizontalPositionArg = {
      defaultParentWidth: 500,
      distanceRight: 10,
      documentWidth: 300,
      elementWidth: 400,
      parentLeft: 20,
      parentWidth: 300,
      scrollbarWidth: 17,
    }
    const result = getHorizontalPosition(arg)
    expect(result).toBe(HORIZONTAL_POSITION.CALCULATED)
  })
})

describe("Функция getVerticalPosition", () => {
  beforeEach(() => {
    Object.defineProperty(document, "documentElement", {
      configurable: true,
      value: {
        clientHeight: 768,
        clientWidth: 1024,
      },
      writable: true,
    })
  })

  test("Возвращает BOTTOM, если достаточно места под родительским элементом", () => {
    const refParent = createMockRef({
      getBoundingClientRect: jest.fn(() => ({ bottom: 100 })),
      offsetHeight: 100,
    })
    const refChildren = createMockRef({
      offsetHeight: 200,
    })

    const result = getVerticalPosition(
      refParent as unknown as RefObject<HTMLDivElement>,
      refChildren as RefObject<HTMLDivElement>,
      10
    )
    expect(result).toBe(VERTICAL_POSITION.BOTTOM)
  })

  test("Возвращает TOP, если недостаточно места под родительским элементом", () => {
    const refParent = createMockRef({
      getBoundingClientRect: jest.fn(() => ({ bottom: 600 })),
      offsetHeight: 100,
    })
    const refChildren = createMockRef({
      offsetHeight: 200,
    })

    const result = getVerticalPosition(
      refParent as unknown as RefObject<HTMLDivElement>,
      refChildren as RefObject<HTMLDivElement>,
      10
    )
    expect(result).toBe(VERTICAL_POSITION.TOP)
  })
})

describe("Функция getCalculatePosition", () => {
  test("Бросает ошибку при недопустимом значении position", () => {
    const refParent = createMockRef(null)
    const refChildren = createMockRef(null)

    expect(() =>
      getCalculatePosition(refParent, refChildren, "invalid" as PositionType)
    ).toThrowError("Недопустимое значение свойства position: invalid")
  })
})
