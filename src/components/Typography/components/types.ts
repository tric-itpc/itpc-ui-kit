import { TextSize, TextType, TextWeight } from "../../../enums"

export type AllowedClassListProps =
  | "className"
  | "size"
  | "through"
  | "type"
  | "underline"
  | "weight"

export interface BaseClassListProps {
  className?: string
  size?: TextSize
  through?: boolean
  type?: TextType
  underline?: boolean
  weight?: TextWeight
}
