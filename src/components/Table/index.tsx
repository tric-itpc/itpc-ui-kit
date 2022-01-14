import React from 'react'

import {
  CellStyles,
  ColumnStyles,
  RowStyles,
  TableHeaderStyles,
  TableStyles
} from '../styles'

import * as Styled from './styled'

export interface TableProps {
  title?: string
  styles?: TableStyles
}

export interface TableHeaderProps {
  styles?: TableHeaderStyles
}

export interface RowProps {
  onPressRow?: () => void
  styles?: RowStyles
}

export interface ColumnProps {
  styles?: ColumnStyles
  onPressColumn?: () => void
}

export interface CellProps {
  styles?: CellStyles
  onPressCell?: () => void
}

export const TableHeader: React.FC<TableHeaderProps> = ({ styles, children }) => (
  <Styled.TableHeader {...styles}>{children}</Styled.TableHeader>
)

export const TableBody: React.FC = ({ children }) => (
  <Styled.TableBody>{children}</Styled.TableBody>
)

export const TableFooter: React.FC = ({ children }) => (
  <Styled.TableFooter>{children}</Styled.TableFooter>
)

export const Row: React.FC<RowProps> = ({
  onPressRow,
  styles,
  children
}) => (
  <Styled.Row onClick={onPressRow && onPressRow} {...styles}>{children}</Styled.Row>
)

export const Column: React.FC<ColumnProps> = ({
  onPressColumn,
  styles,
  children
}) => (
  <Styled.Column onClick={onPressColumn && onPressColumn} {...styles}>{children}</Styled.Column>
)

export const Cell: React.FC<CellProps> = ({
  onPressCell,
  styles,
  children
}) => (
  <Styled.Cell onClick={onPressCell && onPressCell} {...styles}>{children}</Styled.Cell>
)

export const Table: React.FC<TableProps> = ({
  title,
  styles,
  children
}) => (
  <Styled.Table {...styles}>
    {title && <Styled.Caption {...styles}>{title}</Styled.Caption>}
    {children}
  </Styled.Table>
)
