import React, { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import "./styles.css";
export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Идентификатор */
    id?: string;
}
export declare const TableHeader: React.FC<TableHeaderProps>;
export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
    /** Контент */
    children?: React.ReactNode;
}
export declare const TableBody: React.FC<TableBodyProps>;
export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {
    /** Контент */
    children?: React.ReactNode;
}
export declare const TableFooter: React.FC<TableFooterProps>;
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Идентификатор */
    id?: string;
    /** Обработчик нажатия на строку */
    onPressRow?: (event?: React.MouseEvent<HTMLTableRowElement>) => void;
}
export declare const TableRow: React.FC<TableRowProps>;
export interface TableColumnProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Идентификатор */
    id?: string;
    /** Обработчик нажатия на ячейку */
    onPressColumn?: (event?: React.MouseEvent<HTMLTableCellElement>) => void;
}
export declare const TableColumn: React.FC<TableColumnProps>;
export interface CellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Идентификатор */
    id?: string;
    /** Обработчик нажатия на ячейку */
    onPressCell?: (event?: React.MouseEvent<HTMLTableCellElement>) => void;
}
export declare const Cell: React.FC<CellProps>;
export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Идентификатор */
    id?: string;
    /** Заголовок */
    title?: string;
}
export declare const Table: React.FC<TableProps>;
