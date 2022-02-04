import styled from "styled-components"

import { Colors } from "../constants"
import { rotate } from "../_animations"

export interface Props {
  size: number
  borderWidth: number
}

export const Preloader = styled.div<Props>`
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
  max-width: ${({ size }) => size}px;
  max-height: ${({ size }) => size}px;
  border: ${({ borderWidth }) => borderWidth}px solid rgba(0, 0, 0, 0.25);
  border-top-color: ${Colors.purple};
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
`


