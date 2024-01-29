import React from "react";
import "./styles.css";
interface Props {
    currentDate: string;
    date: string;
    dayOfTheWeek?: number;
    disabled?: boolean;
    id: string;
    isChanged: boolean;
    isHeader?: boolean;
    onChange?: (date: string, event: React.MouseEvent<HTMLTableDataCellElement>) => void;
}
export declare const CalendarCell: React.FC<Props>;
export {};
