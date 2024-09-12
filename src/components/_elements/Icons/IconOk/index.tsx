/* eslint-disable max-len */
import React from "react"

import cn from "classnames"

import { Theme } from "../../../types"

import "./styles.css"

interface Props {
  theme?: Theme
}

export const IconOk: React.FC<Props> = ({ theme }) => (
  <i
    className={cn(
      "itpc-icon__ok",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme"
    )}
  >
    <svg
      height="22"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z" />
    </svg>
  </i>
)
