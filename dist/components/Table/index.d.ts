import React, { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import "./styles.css";
export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
    id?: string;
    children?: React.ReactNode;
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
export interface RowProps extends HTMLAttributes<HTMLTableRowElement> {
    id?: string;
    children?: React.ReactNode;
    onPressRow?: (event?: React.MouseEvent<HTMLTableRowElement>) => void;
}
export declare const Row: React.FC<RowProps>;
export interface ColumnProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
    id?: string;
    children?: React.ReactNode;
    onPressColumn?: (event?: React.MouseEvent<HTMLTableCellElement>) => void;
}
export declare const Column: React.FC<ColumnProps>;
export interface CellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
    id?: string;
    children?: React.ReactNode;
    onPressCell?: (event?: React.MouseEvent<HTMLTableCellElement>) => void;
}
export declare const Cell: React.FC<CellProps>;
export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    id?: string;
    title?: string;
    className?: string;
    children?: React.ReactNode;
}
export declare const Table: React.FC<TableProps>;
