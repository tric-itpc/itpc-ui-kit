import React from "react";
import './styles.css';
export interface Props {
    currentValue?: string;
    offsetYear?: number;
    show: boolean;
    handleShow: () => void;
    onChange?: (date: string) => void;
    withTime?: boolean;
}
export declare const Calendar: React.FC<Props>;
