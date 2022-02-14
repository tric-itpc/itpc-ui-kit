import React from 'react';
export interface TableProps {
    title?: string;
}
export interface RowProps {
    onPressRow?: () => void;
}
export declare const TableHeader: React.FC;
export declare const TableBody: React.FC;
export declare const TableFooter: React.FC;
export declare const Row: React.FC<RowProps>;
export declare const Column: React.FC;
export declare const Cell: React.FC;
export declare const Table: React.FC<TableProps>;
