import styled from "styled-components"

interface Props {
  controlHeight: number
}

export const SelectPeriod = styled.div<Props>`
  padding: 0 1rem;
  width: calc(100% - 2rem);
  height: ${({ controlHeight }) => controlHeight && `calc(100% - 2rem - ${controlHeight}px)`};
  position: absolute;
  top: calc(1rem + 48px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
`
