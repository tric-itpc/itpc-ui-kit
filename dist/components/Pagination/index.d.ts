import { FC, HTMLAttributes } from "react";
import { PaginationResult } from "../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    callback: (pagination: PaginationResult) => void;
    className?: string;
    dataLength: number;
    step?: number;
}
export declare const Pagination: FC<Props>;
