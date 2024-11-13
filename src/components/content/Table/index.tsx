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
  /** Контент */
  children?: React.ReactNode
  /** Идентификатор */
  id?: string
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  id = "",
  ...rest
}) => (
  <thead className={cn("itpc-table__head")} id={id} {...rest}>
    {children}
  </thead>
)

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  /** Контент */
  children?: React.ReactNode
}

export const TableBody: React.FC<TableBodyProps> = ({ children, ...rest }) => (
  <tbody className="itpc-table__body" {...rest}>
    {children}
  </tbody>
)

export interface TableFooterProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  /** Контент */
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
  /** Контент */
  children?: React.ReactNode
  /** Идентификатор */
  id?: string
  /** Обработчик нажатия на строку */
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
  /** Контент */
  children?: React.ReactNode
  /** Идентификатор */
  id?: string
  /** Обработчик нажатия на ячейку */
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
  /** Контент */
  children?: React.ReactNode
  /** Идентификатор */
  id?: string
  /** Обработчик нажатия на ячейку */
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
  /** Контент */
  children?: React.ReactNode
  /** Дополнительный класс */
  className?: string
  /** Идентификатор */
  id?: string
  /** Заголовок */
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
