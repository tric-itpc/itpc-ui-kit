import React from "react";
import './styles.css';
interface Props {
    id: string;
    date: string;
    currentDate: string;
    dayOfTheWeek?: number;
    isHeader?: boolean;
    isChanged: boolean;
    disabled?: boolean;
    onChange?: (date: string, event: React.MouseEvent<HTMLTableDataCellElement>) => void;
}
export declare const CalendarCell: React.FC<Props>;
export {};
