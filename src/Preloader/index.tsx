import React from "react"

import * as Styled from './styled'

export interface PreloaderProps {
  size?: number
  borderWidth?: number
}

export const Preloader: React.FC<PreloaderProps> = ({
  size = 25,
  borderWidth = 4
}) => (
  <Styled.Preloader size={size} borderWidth={borderWidth} />
)
