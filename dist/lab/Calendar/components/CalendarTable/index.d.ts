import React from "react";
import { Day } from "../../types";
import './styles.css';
interface Props {
    currentDate: string;
    days: Day[];
    onChange(date: string): void;
}
export declare const CalendarTable: React.FC<Props>;
export {};
