import React, { type CSSProperties } from "react"

export type InputType = "password" | "text"
export type ButtonType = "button" | "reset" | "submit"
export type ButtonVariant = "red" | "white"
export type InputCheckboxType = "checkbox" | "radio"
export type InputCheckboxVariant = "android" | "ios" | "round" | "square"
export type InputCheckboxLabelPosition = "all" | "left" | "right"
export type Orientation = "bottom" | "left" | "right" | "top"
export type PopupSize = "normal" | "small"
export type PopupVariant = "default" | "error" | "success" | "warning"
export type PopupPosition =
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "center-center"
  | "center-left"
  | "center-right"
  | "top-center"
  | "top-left"
  | "top-right"
export type ValidationState = "invalid" | "valid" | "warning"

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

export interface DurationAnimation {
  durationClose?: number
  durationOpen?: number
}

export interface CSSPropertiesWithTransformOrigin extends CSSProperties {
  transformOrigin?: string
}
