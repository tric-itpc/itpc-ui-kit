import { PopupPosition, PopupVariant } from "../types"
import { UIKitColors } from "../constants"

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
  top?: string
  left?: string
  bottom?: string
  right?: string
} => {
  switch (position) {
    case "top-left":
      return {
        top: "1rem",
        left: "1rem",
      }
    case "top-center":
      return {
        top: "1rem",
        left: `calc(50% - ${width / 2}px)`,
      }
    case "top-right":
      return {
        top: "1rem",
        right: "1rem",
      }
    case "center-left":
      return {
        top: `calc(50% - ${height / 2}px)`,
        left: "1rem",
      }
    case "center-center":
      return {
        top: `calc(50% - ${height / 2}px)`,
        left: `calc(50% - ${width / 2}px)`,
      }
    case "center-right":
      return {
        top: `calc(50% - ${height / 2}px)`,
        right: "1rem",
      }
    case "bottom-left":
      return {
        left: "1rem",
        bottom: "1rem",
      }
    case "bottom-center":
      return {
        left: `calc(50% - ${width / 2}px)`,
        bottom: "1rem",
      }
    case "bottom-right":
      return {
        right: "1rem",
        bottom: "1rem",
      }

    default:
      return {}
  }
}
