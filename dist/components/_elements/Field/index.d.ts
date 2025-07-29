import React, { HTMLAttributes } from "react";
import { ErrorPlacement } from "../../../enums";
import "./styles.css";
interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    errorPlacement?: ErrorPlacement;
}
export declare const Field: React.FC<Props>;
export {};
