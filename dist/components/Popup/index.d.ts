import React, { HTMLAttributes } from "react";
import { PopupPosition, PopupSize, PopupVariant } from "../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    iconClose?: React.ReactNode;
    isOpen: boolean;
    position?: PopupPosition;
    size?: PopupSize;
    title: string;
    variant?: PopupVariant;
}
export declare const Popup: React.FC<Props>;
