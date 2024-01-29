import React from "react";
import { Day } from "../../types";
import "./styles.css";
interface Props {
    activeDates?: string[];
    currentDate: string;
    days: Day[];
    disabledAfterDate?: string;
    disabledBeforeDate?: string;
    disabledDates?: string[];
    disabledDaysOfWeek?: number[];
    id: string;
    onChange(date: string, event: React.MouseEvent<HTMLTableDataCellElement>): void;
}
export declare const CalendarTable: React.FC<Props>;
export {};
