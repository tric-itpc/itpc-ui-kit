import React from "react"

import { DefaultValues } from "../constants"

import * as Styled from './styled'

export interface ErrorMessageProps {
  marginY?: number
  marginX?: number
  fontSize?: number
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  marginY = 0,
  marginX = DefaultValues.gap,
  fontSize = DefaultValues.fontSizeS,
  children
}) => (
  <Styled.ErrorMessage
    marginY={marginY}
    marginX={marginX}
    fontSize={fontSize}
  >
    {children}
  </Styled.ErrorMessage>
)
