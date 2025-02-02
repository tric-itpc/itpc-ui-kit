/* eslint-disable max-len */
import React from "react"

import { UIKitColors } from "../../../../enums"

import "./styles.css"

interface Props {
  color?: UIKitColors
  onPress?: () => void
}

export const IconClose: React.FC<Props> = ({
  color = UIKitColors.grey,
  onPress,
}) => (
  <i className="itpc-icon__close" onClick={onPress}>
    <svg
      fill="none"
      height="20"
      viewBox="0 0 15 15"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3432 7.5L14.6075 3.23565C15.1308 2.71236 15.1308 1.86392 14.6075 1.3402L13.6598 0.392472C13.1365 -0.130824 12.2881 -0.130824 11.7643 0.392472L7.5 4.65682L3.23565 0.392472C2.71236 -0.130824 1.86392 -0.130824 1.3402 0.392472L0.392472 1.3402C-0.130824 1.86349 -0.130824 2.71193 0.392472 3.23565L4.65682 7.5L0.392472 11.7643C-0.130824 12.2876 -0.130824 13.1361 0.392472 13.6598L1.3402 14.6075C1.86349 15.1308 2.71236 15.1308 3.23565 14.6075L7.5 10.3432L11.7643 14.6075C12.2876 15.1308 13.1365 15.1308 13.6598 14.6075L14.6075 13.6598C15.1308 13.1365 15.1308 12.2881 14.6075 11.7643L10.3432 7.5Z"
        fill={color}
      />
    </svg>
  </i>
)
