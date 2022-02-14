import React from "react";
import { Day } from "../../types";
interface Props {
    currentValue: string;
    currentDate: string;
    days: Day[];
    onChange(date: string): void;
}
export declare const CalendarTable: React.FC<Props>;
export {};
