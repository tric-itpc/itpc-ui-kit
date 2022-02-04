import styled from "styled-components"

import { Colors, DefaultValues } from "../constants"

interface Props {
  position: number
}

export const DatePicker = styled.div`
  position: relative;
`

export const CalendarWrap = styled.div<Props>`
  position: absolute;
  z-index: ${DefaultValues.zIndex};
  top: ${({ position }) => position}px;
  background-color: ${Colors.white}
`
