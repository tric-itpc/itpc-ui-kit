import React from "react";
import { IInfo } from "../../components";
import './styles.css';
export interface Props {
    id: string;
    name: string;
    currentValue?: string;
    offsetYear?: number;
    activeDates?: string[];
    disabledDates?: string[];
    disabledAfterDate?: string;
    disabledBeforeDate?: string;
    disabledDaysOfWeek?: number[];
    disabledSelectMonth?: boolean;
    disabledSelectYear?: boolean;
    show: boolean;
    handleShow: () => void;
    onChange?: (date: string, event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLTableCellElement>, info: IInfo) => void;
    withTime?: boolean;
}
export declare const Calendar: React.FC<Props>;
