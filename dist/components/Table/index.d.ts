import React from 'react';
import { CellStyles, ColumnStyles, RowStyles, TableHeaderStyles, TableStyles } from '../styles';
export interface TableProps {
    title?: string;
    styles?: TableStyles;
}
export interface TableHeaderProps {
    styles?: TableHeaderStyles;
}
export interface RowProps {
    onPressRow?: () => void;
    styles?: RowStyles;
}
export interface ColumnProps {
    styles?: ColumnStyles;
    onPressColumn?: () => void;
}
export interface CellProps {
    styles?: CellStyles;
    onPressCell?: () => void;
}
export declare const TableHeader: React.FC<TableHeaderProps>;
export declare const TableBody: React.FC;
export declare const TableFooter: React.FC;
export declare const Row: React.FC<RowProps>;
export declare const Column: React.FC<ColumnProps>;
export declare const Cell: React.FC<CellProps>;
export declare const Table: React.FC<TableProps>;
