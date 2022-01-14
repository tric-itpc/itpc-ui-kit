import styled from "styled-components"

interface Props {
  isHeader: boolean
  isChanged: boolean
  isCurrentMonth: boolean
}

export const CalendarCell = styled.td<Props>`
  padding: .5rem;
  color: #000;
  cursor: pointer;
  
  &:hover {
    color: #000;
    background-color: #f0f0f0;
  }
  
  ${({ isHeader }) => isHeader && `
    cursor: default;

    &:hover {
      background-color: transparent;
    }
  `}
  
  ${({ isChanged }) => isChanged && `
    color: #fff;
    background-color: #4c43a1;
  `}

  ${({ isCurrentMonth }) => !isCurrentMonth && `
    color: #ccc;
  `}
`

export const CalendarCellHead = styled(CalendarCell)``
