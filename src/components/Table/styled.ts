import styled from "styled-components"

import { Colors } from "../constants"
import {
  CellStyles,
  ColumnStyles,
  RowStyles,
  TableHeaderStyles,
  TableStyles
} from '../styles'

export const Table = styled.table<TableStyles>`
  width: 100%;
  table-layout: ${({ tableLayout }) => (tableLayout ? tableLayout : 'unset')};
  border: ${({ borderColor, borderWidth }) => `${borderWidth ? borderWidth : 0}px solid ${borderColor ? borderColor : Colors.grey}`};
  border-spacing: 0;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)}px;
  text-align: left;
  overflow: hidden;
`

export const Column = styled.th<ColumnStyles>`
  padding: ${({ padding }) => (padding ? padding : 10)}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  border-bottom: ${({ borderColor, borderWidth }) => `
    ${borderWidth ? borderWidth : 0}px solid ${borderColor ? borderColor : Colors.grey}
  `};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)}px;
`

export const Cell = styled.td<CellStyles>`
  padding: ${({ padding }) => (padding ? padding : 10)}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  border-bottom: ${({ borderColor, borderWidth }) => `
    ${borderWidth ? borderWidth : 0}px solid ${borderColor ? borderColor : Colors.grey}
  `};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)}px;
`

export const Row = styled.tr<RowStyles>`
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
  &:hover {
    background-color: ${({ backgroundColorHover }) => (backgroundColorHover ? backgroundColorHover : Colors.greyLight)};
  }
`

export const TableHeader = styled.thead<TableHeaderStyles>`
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`

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

export const Caption = styled.caption<TableStyles>`
  margin-bottom: .5rem;
  font-size: ${({ captionFontSize }) => (captionFontSize ? `${captionFontSize}px` : '14px')};
`
