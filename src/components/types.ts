export type InputState = 'default' | 'cancel' | 'loading' | 'success' | 'warning'
export type InputType = 'password' | 'text'
export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonVariant = 'purple' | 'white' | 'red'
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

export interface Item {
  id: string
  value: string
}

export interface FormattedValues {
  value: string,
  formattedValue: string
}

export type fontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type cursor = 'pointer' | 'default'
export type tableLayout = 'fixed' | 'unset'
