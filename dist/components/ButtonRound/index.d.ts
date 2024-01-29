import React, { HTMLAttributes } from "react";
import { ButtonType } from "../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    tooltip?: string;
    tooltipAttr?: HTMLAttributes<HTMLSpanElement>;
    type?: ButtonType;
}
export declare const ButtonRound: React.FC<Props>;
