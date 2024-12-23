import { fireEvent, screen } from "@testing-library/react"

import { KeyCode } from "../../enums"

export const getTabElement = (testId: string, position: number): Element =>
  screen.getByTestId(testId).children[0].children[position - 1]

export const getButtonDisabled = (element: HTMLElement): boolean =>
  (element as HTMLButtonElement).disabled

export const getCheckboxValue = (
  element: HTMLElement,
  withLabelLeft: boolean = true
): boolean =>
  (element.children[withLabelLeft ? 1 : 0] as HTMLInputElement).checked

export const getSelectButton = (element: HTMLElement): Element =>
  element.children[0]

export const getSelectValue = (element: HTMLElement): string => {
  const labelValue = element.children[0].children[0].textContent
  const value = element.children[0].textContent

  return value?.replace(labelValue ?? "", "") ?? ""
}

export const getAttributes = (
  element: Element
): { [key: string]: boolean | number | string } =>
  Array.from(element.attributes).reduce((acc, attr) => {
    acc[attr.name] = attr.value
    return acc
  }, {} as { [key: string]: boolean | number | string })

export const getAttributeValue = (
  element: Element,
  attributeName: string
): string => element.getAttribute(attributeName) ?? ""

export const getInputAttributes = (
  element: HTMLElement
): { [key: string]: boolean | number | string } =>
  getAttributes(element.children[0].children[1])

export const getInputAttributeValue = (
  element: HTMLElement,
  attributeName: string
): string => getAttributeValue(element.children[0].children[1], attributeName)

export const getInputDisabled = (element: HTMLElement): boolean =>
  (element.children[0].children[1] as HTMLInputElement).disabled

export const getInputValue = (element: HTMLElement): string =>
  (element.children[0].children[1] as HTMLInputElement).value

export const getInputError = (element: HTMLElement): Element =>
  element.children[0].children[2]

export const getInputErrorValue = (element: HTMLElement): string =>
  (element.children[0].children[2] as HTMLSpanElement).textContent ?? ""

export const getDateInputError = (element: HTMLElement): string =>
  (element.children[0].children[3] as HTMLSpanElement).textContent ?? ""

export const changeInput = (element: HTMLElement, value: string): void => {
  fireEvent.change(element.children[0].children[1], { target: { value } })
}

export const focusInput = (element: HTMLElement): void => {
  fireEvent.focus(element.children[0].children[1])
}

export const blurInput = (element: HTMLElement): void => {
  fireEvent.blur(element.children[0].children[1])
}

export const keyDownInput = (element: HTMLElement, key: KeyCode): void => {
  fireEvent.keyDown(element.children[0].children[1], { key })
}

export const keyDownElement = (element: HTMLElement, key: KeyCode): void => {
  fireEvent.keyDown(element, { key })
}
