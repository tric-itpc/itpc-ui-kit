import React from "react"

import cn from "classnames"

import { Orientation, Theme } from "../../../types"

import "./styles.css"

interface Props {
  onClick?: () => void
  orientation: Orientation
  theme?: Theme
}

export const IconDoubleArrow: React.FC<Props> = ({
  onClick,
  orientation,
  theme,
}) => (
  <i
    className={cn(
      "itpc-icon__double-arrow",
      orientation === "top" && "itpc-icon__double-arrow_orientation_top",
      orientation === "bottom" && "itpc-double-icon__arrow_orientation_bottom",
      orientation === "left" && "itpc-icon__double-arrow_orientation_left",
      orientation === "right" && "itpc-icon__double-arrow_orientation_right",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme"
    )}
    onClick={onClick}
  >
    <svg
      height="8"
      viewBox="0 0 12 8"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5134 0L6 4.82292L1.48659 0L0 1.58854L6 8L12 1.58854L10.5134 0Z" />
    </svg>
    <svg
      height="8"
      viewBox="0 0 12 8"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5134 0L6 4.82292L1.48659 0L0 1.58854L6 8L12 1.58854L10.5134 0Z" />
    </svg>
  </i>
)
