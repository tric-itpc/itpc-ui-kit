import React, { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import "./styles.css";
export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
    id?: string;
}
export declare const TableHeader: React.FC<TableHeaderProps>;
export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export declare const TableBody: React.FC<TableBodyProps>;
export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export declare const TableFooter: React.FC<TableFooterProps>;
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    children?: React.ReactNode;
    id?: string;
    onPressRow?: (event?: React.MouseEvent<HTMLTableRowElement>) => void;
}
export declare const TableRow: React.FC<TableRowProps>;
export interface TableColumnProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
    children?: React.ReactNode;
    id?: string;
    onPressColumn?: (event?: React.MouseEvent<HTMLTableCellElement>) => void;
}
export declare const TableColumn: React.FC<TableColumnProps>;
export interface CellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
    children?: React.ReactNode;
    id?: string;
    onPressCell?: (event?: React.MouseEvent<HTMLTableCellElement>) => void;
}
export declare const Cell: React.FC<CellProps>;
export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    children?: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
}
export declare const Table: React.FC<TableProps>;
