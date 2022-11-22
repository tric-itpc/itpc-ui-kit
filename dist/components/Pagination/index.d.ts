import { FC } from "react";
import { PaginationResult } from "../types";
import './styles.css';
export interface Props {
    step?: number;
    dataLength: number;
    className?: string;
    callback: (pagination: PaginationResult) => void;
}
export declare const Pagination: FC<Props>;
