import React from "react"
import cn from "classnames"

import "./styles.css"

export interface TableHeaderProps {
  id?: string
  children?: React.ReactNode
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  id = "",
  children,
}) => (
  <thead id={id} className="itpc-table__head">
    {children}
  </thead>
)

export interface TableBodyProps {
  children?: React.ReactNode
}

export const TableBody: React.FC<TableBodyProps> = ({ children }) => (
  <tbody className="itpc-table__body">{children}</tbody>
)

export interface TableFooterProps {
  children?: React.ReactNode
}

export const TableFooter: React.FC<TableFooterProps> = ({ children }) => (
  <tfoot className="itpc-table__footer">{children}</tfoot>
)

export interface RowProps {
  id?: string
  children?: React.ReactNode
  onPressRow?: (event?: React.MouseEvent<HTMLTableRowElement>) => void
}

export const Row: React.FC<RowProps> = ({ id = "", onPressRow, children }) => (
  <tr
    id={id}
    className={cn("itpc-table__row", onPressRow && "itpc-table__row_clickable")}
    onClick={onPressRow && onPressRow}
  >
    {children}
  </tr>
)

export interface ColumnProps {
  id?: string
  children?: React.ReactNode
  onPressColumn?: (event?: React.MouseEvent<HTMLTableCellElement>) => void
}

export const Column: React.FC<ColumnProps> = ({
  id = "",
  onPressColumn,
  children,
}) => (
  <th
    id={id}
    className={cn(
      "itpc-table__column",
      onPressColumn && "itpc-table__column_clickable"
    )}
    onClick={onPressColumn && onPressColumn}
  >
    {children}
  </th>
)

export interface CellProps {
  id?: string
  children?: React.ReactNode
  onPressCell?: (event?: React.MouseEvent<HTMLTableCellElement>) => void
}

export const Cell: React.FC<CellProps> = ({
  id = "",
  onPressCell,
  children,
}) => (
  <td
    id={id}
    className={cn(
      "itpc-table__cell",
      onPressCell && "itpc-table__cell_clickable"
    )}
    onClick={onPressCell && onPressCell}
  >
    {children}
  </td>
)

export interface TableProps {
  id?: string
  title?: string
  className?: string
  children?: React.ReactNode
}

export const Table: React.FC<TableProps> = ({
  id = "",
  title,
  className = "",
  children,
}) => (
  <table id={id} className={cn("itpc-table", className)}>
    {title && <caption className="itpc-table__caption">{title}</caption>}
    {children}
  </table>
)
