import React, { HTMLAttributes } from "react";
import { PopupPosition, PopupSize, PopupVariant } from "../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string;
    isOpen: boolean;
    size?: PopupSize;
    variant?: PopupVariant;
    position?: PopupPosition;
    className?: string;
    iconClose?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const Popup: React.FC<Props>;
