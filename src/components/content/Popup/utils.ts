import { UIKitColors } from "../../../enums"
import { PopupPosition, PopupVariant } from "../../types"

export const getColor = (variant: PopupVariant): UIKitColors => {
  if (variant === "error") {
    return UIKitColors.red
  }

  if (variant === "warning") {
    return UIKitColors.yellow
  }

  if (variant === "success") {
    return UIKitColors.green
  }

  return UIKitColors.grey
}

export const getPosition = (
  position: PopupPosition,
  width: number,
  height: number
): {
  bottom?: string
  left?: string
  right?: string
  top?: string
} => {
  switch (position) {
    case "top-left":
      return {
        left: "1rem",
        top: "1rem",
      }
    case "top-center":
      return {
        left: `calc(50% - ${width / 2}px)`,
        top: "1rem",
      }
    case "top-right":
      return {
        right: "1rem",
        top: "1rem",
      }
    case "center-left":
      return {
        left: "1rem",
        top: `calc(50% - ${height / 2}px)`,
      }
    case "center-center":
      return {
        left: `calc(50% - ${width / 2}px)`,
        top: `calc(50% - ${height / 2}px)`,
      }
    case "center-right":
      return {
        right: "1rem",
        top: `calc(50% - ${height / 2}px)`,
      }
    case "bottom-left":
      return {
        bottom: "1rem",
        left: "1rem",
      }
    case "bottom-center":
      return {
        bottom: "1rem",
        left: `calc(50% - ${width / 2}px)`,
      }
    case "bottom-right":
      return {
        bottom: "1rem",
        right: "1rem",
      }

    default:
      return {}
  }
}
