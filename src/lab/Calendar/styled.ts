import styled from "styled-components"

interface Props {
  show: boolean
}

export const Calendar = styled.div<Props>`
  position: relative;
  padding: 1rem;
  max-width: 350px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(16, 36, 94, 0.2);
  z-index: 1000;
`
