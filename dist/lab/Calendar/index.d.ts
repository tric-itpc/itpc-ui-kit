import React from "react";
import './styles.css';
export interface Props {
    id: string;
    currentValue?: string;
    offsetYear?: number;
    activeDates?: string[];
    disabledDates?: string[];
    disabledAfterDate?: string;
    disabledBeforeDate?: string;
    show: boolean;
    handleShow: () => void;
    onChange?: (date: string, event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLTableDataCellElement>) => void;
    withTime?: boolean;
}
export declare const Calendar: React.FC<Props>;
