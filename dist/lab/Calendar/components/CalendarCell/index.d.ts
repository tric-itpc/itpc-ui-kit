import React from "react";
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
