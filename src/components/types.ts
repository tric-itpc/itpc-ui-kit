import React from "react"

export type InputState = 'default' | 'cancel' | 'loading' | 'success' | 'warning'
export type InputType = 'password' | 'text'
export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonVariant = 'white' | 'red'
export type InputCheckboxType = "checkbox" | "radio"
export type Orientation = 'top' | 'right' | 'bottom' | 'left'
export type PopupSize = 'small' | 'normal'
export type PopupVariant = 'default' | 'error' | 'warning' | 'success'
export type PopupPosition =
  'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center-center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
export type ValidationState = 'valid' | 'invalid'

export interface TabsItem {
  title: string,
  content: React.ReactElement<React.ReactNode>
}

export interface PaginationResult {
  currentPage?: number
  start: number
  end: number
}

export interface Item {
  id: string
  value: string
  disabled?: boolean
}

export interface FormattedValues {
  value: string,
  formattedValue: string
}
