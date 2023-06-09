import React from "react";
import { Day } from "../../types";
import "./styles.css";
interface Props {
    id: string;
    currentDate: string;
    days: Day[];
    activeDates?: string[];
    disabledDates?: string[];
    disabledAfterDate?: string;
    disabledBeforeDate?: string;
    disabledDaysOfWeek?: number[];
    onChange(date: string, event: React.MouseEvent<HTMLTableDataCellElement>): void;
}
export declare const CalendarTable: React.FC<Props>;
export {};
