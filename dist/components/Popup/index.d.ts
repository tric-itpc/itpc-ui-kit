import React from "react";
import { PopupPosition, PopupSize, PopupVariant } from "../types";
export interface PopupProps {
    title: string;
    isOpen: boolean;
    size?: PopupSize;
    variant?: PopupVariant;
    position?: PopupPosition;
    onClose(): void;
}
export declare const Popup: React.FC<PopupProps>;
