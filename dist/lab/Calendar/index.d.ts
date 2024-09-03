import React from "react";
import { IInfo } from "../../components";
import "./styles.css";
export interface Props {
    activeDates?: string[];
    currentValue?: string;
    disabledAfterDate?: string;
    disabledBeforeDate?: string;
    disabledDates?: string[];
    disabledDaysOfWeek?: number[];
    disabledSelectMonth?: boolean;
    disabledSelectYear?: boolean;
    handleShow: () => void;
    id: string;
    name: string;
    offsetYear?: number;
    onChange?: (date: string, event: React.MouseEvent<HTMLTableCellElement> | React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>, info: IInfo) => void;
    parentRef?: React.RefObject<HTMLDivElement>;
    scrollToYear?: number;
    show: boolean;
    withTime?: boolean;
    yearsFromTo?: [number, number];
}
export declare const Calendar: React.FC<Props>;
