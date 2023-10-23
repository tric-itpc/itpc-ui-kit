import React, {
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react"
import cn from "classnames"

import "./styles.css"

export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  id?: string
  children?: React.ReactNode
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  id = "",
  children,
  ...rest
}) => (
  <thead id={id} className="itpc-table__head" {...rest}>
    {children}
  </thead>
)

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode
}

export const TableBody: React.FC<TableBodyProps> = ({ children, ...rest }) => (
  <tbody className="itpc-table__body" {...rest}>
    {children}
  </tbody>
)

export interface TableFooterProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode
}

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  ...rest
}) => (
  <tfoot className="itpc-table__footer" {...rest}>
    {children}
  </tfoot>
)

export interface RowProps extends HTMLAttributes<HTMLTableRowElement> {
  id?: string
  children?: React.ReactNode
  onPressRow?: (event?: React.MouseEvent<HTMLTableRowElement>) => void
}

export const Row: React.FC<RowProps> = ({
  id = "",
  onPressRow,
  children,
  ...rest
}) => (
  <tr
    id={id}
    className={cn("itpc-table__row", onPressRow && "itpc-table__row_clickable")}
    onClick={onPressRow && onPressRow}
    {...rest}
  >
    {children}
  </tr>
)

export interface ColumnProps
  extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
  id?: string
  children?: React.ReactNode
  onPressColumn?: (event?: React.MouseEvent<HTMLTableCellElement>) => void
}

export const Column: React.FC<ColumnProps> = ({
  id = "",
  onPressColumn,
  children,
  ...rest
}) => (
  <th
    id={id}
    className={cn(
      "itpc-table__column",
      onPressColumn && "itpc-table__column_clickable"
    )}
    onClick={onPressColumn && onPressColumn}
    {...rest}
  >
    {children}
  </th>
)

export interface CellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
  id?: string
  children?: React.ReactNode
  onPressCell?: (event?: React.MouseEvent<HTMLTableCellElement>) => void
}

export const Cell: React.FC<CellProps> = ({
  id = "",
  onPressCell,
  children,
  ...rest
}) => (
  <td
    id={id}
    className={cn(
      "itpc-table__cell",
      onPressCell && "itpc-table__cell_clickable"
    )}
    onClick={onPressCell && onPressCell}
    {...rest}
  >
    {children}
  </td>
)

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
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
  ...rest
}) => (
  <table id={id} className={cn("itpc-table", className)} {...rest}>
    {title && <caption className="itpc-table__caption">{title}</caption>}
    {children}
  </table>
)
