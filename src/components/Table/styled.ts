import styled from "styled-components"

import { Colors } from "../constants"

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border: 1px solid ${Colors.grey};
  border-spacing: 0;
  border-radius: 5px;
  text-align: left;
  overflow: hidden;
`

export const Column = styled.th`
  padding: 10px;
  font-weight: 400;
  border-bottom: 1px solid ${Colors.grey};
`

export const Cell = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${Colors.grey};
`

export const Row = styled.tr`
  &:hover {
    background-color: ${Colors.greyLight};
  }
`

export const TableHeader = styled.thead``

export const TableBody = styled.tbody`
  ${Row} {
    cursor: pointer;
  }
  
  ${Row}:last-child {
    ${Cell} {
      border: none;
    }
  }
`

export const TableFooter = styled.tfoot``

export const Caption = styled.caption`
  margin-bottom: .5rem;
`
