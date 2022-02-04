import React from 'react'

import * as Styled from './styled'

export interface TableProps {
  title?: string
}

export interface RowProps {
  onPressRow?: () => void
}

export const TableHeader: React.FC = ({ children }) => (
  <Styled.TableHeader>{children}</Styled.TableHeader>
)

export const TableBody: React.FC = ({ children }) => (
  <Styled.TableBody>{children}</Styled.TableBody>
)

export const TableFooter: React.FC = ({ children }) => (
  <Styled.TableFooter>{children}</Styled.TableFooter>
)

export const Row: React.FC<RowProps> = ({ onPressRow, children }) => (
  <Styled.Row onClick={onPressRow}>{children}</Styled.Row>
)

export const Column: React.FC = ({ children }) => (
  <Styled.Column>{children}</Styled.Column>
)

export const Cell: React.FC = ({ children }) => (
  <Styled.Cell>{children}</Styled.Cell>
)

export const Table: React.FC<TableProps> = ({
  title,
  children
}) => (
  <Styled.Table>
    {title && <Styled.Caption>{title}</Styled.Caption>}
    {children}
  </Styled.Table>
)
