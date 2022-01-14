import styled from "styled-components"

import { Colors } from "../constants"

interface Props {
  marginY: number
  marginX: number
  fontSize: number
}

export const ErrorMessage = styled.span<Props>`
  margin: ${({ marginY, marginX }) => `${marginY}px ${marginX}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${Colors.red}
`
