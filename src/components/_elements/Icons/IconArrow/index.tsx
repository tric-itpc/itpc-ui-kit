import React from "react"
import cn from "classnames"

import { Orientation } from "../../../types"

import "./styles.css"

interface Props {
  orientation: Orientation
  onClick?: () => void
}

export const IconArrow: React.FC<Props> = ({ orientation, onClick }) => (
  <i
    className={cn(
      "itpc-icon__arrow",
      orientation === "top" && "itpc-icon__arrow_orientation_top",
      orientation === "bottom" && "itpc-icon__arrow_orientation_bottom",
      orientation === "left" && "itpc-icon__arrow_orientation_left",
      orientation === "right" && "itpc-icon__arrow_orientation_right"
    )}
    onClick={onClick}
  >
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5134 0L6 4.82292L1.48659 0L0 1.58854L6 8L12 1.58854L10.5134 0Z"
        fill="#393185"
      />
    </svg>
  </i>
)
