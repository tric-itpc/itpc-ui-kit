import styled from "styled-components"

export const SelectPeriod = styled.div`
  padding: 1rem;
  width: calc(100% - 2rem);
  height: calc(100% - 3rem - 48px);
  position: absolute;
  top: calc(1rem + 48px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
`
