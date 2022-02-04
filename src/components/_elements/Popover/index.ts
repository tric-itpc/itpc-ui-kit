import styled from "styled-components"

import { Colors } from "../../constants"

export const Popover = styled.div`
  position: absolute;
  top: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px solid ${Colors.purple};
  border-radius: 5px;
  box-sizing: border-box;
`
