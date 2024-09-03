import React from "react"

export type InputState =
  | "default"
  | "loading"
  | "success"
  | "warning"
  | "cancel"
export type InputType = "password" | "text"
export type ButtonType = "button" | "submit" | "reset"
export type ButtonVariant = "white" | "red"
export type InputCheckboxType = "checkbox" | "radio"
export type InputCheckboxVariant = "android" | "square" | "round" | "ios"
export type InputCheckboxLabelPosition = "right" | "left" | "all"
export type Orientation = "bottom" | "right" | "left" | "top"
export type PopupSize = "normal" | "small"
export type PopupVariant = "default" | "warning" | "success" | "error"
export type PopupPosition =
  | "center-center"
  | "bottom-center"
  | "center-right"
  | "bottom-right"
  | "center-left"
  | "bottom-left"
  | "top-center"
  | "top-right"
  | "top-left"
export type ValidationState = "invalid" | "warning" | "valid"

export interface TabsItem {
  content: React.ReactElement<React.ReactNode>
  title: string
}

export interface PaginationResult {
  currentPage?: number
  end: number
  start: number
}

export interface Item {
  disabled?: boolean
  id: string
  value: string
}

export interface FormattedValues {
  formattedValue: string
  value: string
}

export interface IInfo {
  id: string
  name: string
}
