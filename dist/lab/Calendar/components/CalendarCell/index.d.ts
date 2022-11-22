import React from "react";
import './styles.css';
interface Props {
    date: string;
    currentDate: string;
    dayOfTheWeek?: number;
    isHeader?: boolean;
    isChanged: boolean;
    onChange?: (date: string) => void;
}
export declare const CalendarCell: React.FC<Props>;
export {};
