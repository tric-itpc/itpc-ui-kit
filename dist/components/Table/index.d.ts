import React from 'react';
import './styles.css';
export interface TableHeaderProps {
    id?: string;
    children?: React.ReactNode;
}
export declare const TableHeader: React.FC<TableHeaderProps>;
export interface TableBodyProps {
    children?: React.ReactNode;
}
export declare const TableBody: React.FC<TableBodyProps>;
export interface TableFooterProps {
    children?: React.ReactNode;
}
export declare const TableFooter: React.FC<TableFooterProps>;
export interface RowProps {
    id?: string;
    children?: React.ReactNode;
    onPressRow?: (event?: React.MouseEvent<HTMLTableRowElement>) => void;
}
export declare const Row: React.FC<RowProps>;
export interface ColumnProps {
    id?: string;
    children?: React.ReactNode;
    onPressColumn?: (event?: React.MouseEvent<HTMLTableCellElement>) => void;
}
export declare const Column: React.FC<ColumnProps>;
export interface CellProps {
    id?: string;
    children?: React.ReactNode;
    onPressCell?: (event?: React.MouseEvent<HTMLTableCellElement>) => void;
}
export declare const Cell: React.FC<CellProps>;
export interface TableProps {
    id?: string;
    title?: string;
    className?: string;
    children?: React.ReactNode;
}
export declare const Table: React.FC<TableProps>;
