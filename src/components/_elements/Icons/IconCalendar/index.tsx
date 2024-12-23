/* eslint-disable max-len */
import React from "react"

import cn from "classnames"

import "./styles.css"

interface Props {
  disabled?: boolean
  isClickable: boolean
  onClick(): void
}

export const IconCalendar: React.FC<Props> = ({
  disabled,
  isClickable,
  onClick,
}) => (
  <i
    className={cn(
      "itpc-icon__calendar",
      isClickable && "itpc-icon__calendar_clickable",
      disabled && "itpc-icon__calendar_disabled"
    )}
    onClick={onClick}
    role="iconCalendar"
  >
    <svg
      height="20"
      viewBox="0 0 12 12"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_94_50)">
        <path d="M12 3.18227C12 2.31697 11.2794 1.61514 10.3892 1.61514H8.50358V0.482595C8.50358 0.216649 8.28205 0 8.00714 0C7.73223 0 7.5107 0.216649 7.5107 0.482595V1.61514H4.50003V0.482595C4.50003 0.216649 4.2785 0 4.00359 0C3.72868 0 3.50715 0.216649 3.50715 0.482595V1.61514H1.6108C0.720677 1.61514 -0.001297 2.31697 -0.001297 3.18227L3.75196e-05 10.4303C3.75196e-05 11.2956 0.720677 11.9961 1.6108 11.9961H10.3892C11.2794 11.9961 12 11.2956 12 10.4303V3.18227ZM2.01916 2.58162H3.50715V2.76065C3.50715 3.02789 3.73001 3.24324 4.00359 3.24324C4.2785 3.24324 4.50003 3.02659 4.50003 2.76065V2.58162H7.50936V2.76065C7.50936 3.02789 7.73223 3.24324 8.0058 3.24324C8.28071 3.24324 8.50224 3.02659 8.50224 2.76065V2.58162H9.97021C10.5374 2.58162 10.9978 3.03308 10.9978 3.59092V4.54703H0.988914V3.59092C0.991583 3.03308 1.45199 2.58162 2.01916 2.58162ZM9.97422 11.0231H2.0205C1.45333 11.0231 0.992918 10.5717 0.992918 10.0138V5.51222H11.0018V10.0138C11.0018 10.5717 10.5414 11.0231 9.97422 11.0231Z" />
      </g>
      <defs>
        <clipPath id="clip0_94_50">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </svg>
  </i>
)
