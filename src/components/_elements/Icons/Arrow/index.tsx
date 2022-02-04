import React from "react"

import { Orientation } from "../../../types"

import { Icon } from '../styled'

interface Props {
  orientation: Orientation
}

export const Arrow: React.FC<Props> = ({ orientation }) => (
  <Icon orientation={orientation}>
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5134 0L6 4.82292L1.48659 0L0 1.58854L6 8L12 1.58854L10.5134 0Z" fill="#393185"/>
    </svg>
  </Icon>
)
