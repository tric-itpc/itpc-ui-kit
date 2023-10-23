import { FC, HTMLAttributes } from "react";
import { PaginationResult } from "../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    step?: number;
    dataLength: number;
    className?: string;
    callback: (pagination: PaginationResult) => void;
}
export declare const Pagination: FC<Props>;
