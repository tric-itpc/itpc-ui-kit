import React from "react"

import { DefaultValues } from "../constants"

import * as Styled from './styled'

export interface PreloaderProps {
  size?: number
  borderWidth?: number
}

export const Preloader: React.FC<PreloaderProps> = ({
  size = DefaultValues.preloaderSize,
  borderWidth = DefaultValues.preloaderBorderWidth
}) => (
  <Styled.Preloader size={size} borderWidth={borderWidth} />
)
