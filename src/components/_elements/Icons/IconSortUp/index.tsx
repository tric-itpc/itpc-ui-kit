/* eslint-disable max-len */
import React from "react"

import cn from "classnames"

import "./styles.css"

interface Props {
  isActiveIcon?: boolean
  isClickable?: boolean
}

export const IconSortUp: React.FC<Props> = ({ isActiveIcon, isClickable }) => (
  <i
    className={cn(
      "itpc-icon__sort",
      isClickable && "itpc-icon__sort_clickable",
      isActiveIcon && "itpc-icon__sort_color"
    )}
  >
    <svg
      height="16"
      viewBox="0 0 576 512"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z" />
    </svg>
  </i>
)
