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
  children?: React.ReactNode
  id?: string
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  id = "",
  ...rest
}) => (
  <thead className="itpc-table__head" id={id} {...rest}>
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

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode
  id?: string
  onPressRow?: (event?: React.MouseEvent<HTMLTableRowElement>) => void
}

export const TableRow: React.FC<TableRowProps> = ({
  children,
  id = "",
  onPressRow,
  ...rest
}) => (
  <tr
    className={cn("itpc-table__row", onPressRow && "itpc-table__row_clickable")}
    id={id}
    onClick={onPressRow && onPressRow}
    {...rest}
  >
    {children}
  </tr>
)

export interface TableColumnProps
  extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children?: React.ReactNode
  id?: string
  onPressColumn?: (event?: React.MouseEvent<HTMLTableCellElement>) => void
}

export const TableColumn: React.FC<TableColumnProps> = ({
  children,
  id = "",
  onPressColumn,
  ...rest
}) => (
  <th
    className={cn(
      "itpc-table__column",
      onPressColumn && "itpc-table__column_clickable"
    )}
    id={id}
    onClick={onPressColumn && onPressColumn}
    {...rest}
  >
    {children}
  </th>
)

export interface CellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
  children?: React.ReactNode
  id?: string
  onPressCell?: (event?: React.MouseEvent<HTMLTableCellElement>) => void
}

export const Cell: React.FC<CellProps> = ({
  children,
  id = "",
  onPressCell,
  ...rest
}) => (
  <td
    className={cn(
      "itpc-table__cell",
      onPressCell && "itpc-table__cell_clickable"
    )}
    id={id}
    onClick={onPressCell && onPressCell}
    {...rest}
  >
    {children}
  </td>
)

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode
  className?: string
  id?: string
  title?: string
}

export const Table: React.FC<TableProps> = ({
  children,
  className = "",
  id = "",
  title,
  ...rest
}) => (
  <table className={cn("itpc-table", className)} id={id} {...rest}>
    {title && <caption className="itpc-table__caption">{title}</caption>}
    {children}
  </table>
)
